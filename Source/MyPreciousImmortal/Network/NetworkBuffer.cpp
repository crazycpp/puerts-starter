// Fill out your copyright notice in the Description page of Project Settings.


#include "NetworkBuffer.h"

// 最大缓冲
#define MAX_SIZE		1024 * 1024 // 1M

FNetworkBuffer::FNetworkBuffer(const unsigned int size)
{
	_bufferSize = size;
	_beginIndex = 0;
	_endIndex = 0;
	_dataSize = 0;
	_buffer = new uint8[_bufferSize];
}

FNetworkBuffer::~FNetworkBuffer()
{
	delete[] _buffer;
}

unsigned int FNetworkBuffer::GetEmptySize()
{
	return _bufferSize - _dataSize;
}

unsigned int FNetworkBuffer::GetWriteSize() const
{
	if (_beginIndex <= _endIndex)
	{
		return _bufferSize - _endIndex;
	}
	else
	{
		return _beginIndex - _endIndex;
	}
}

unsigned int FNetworkBuffer::GetReadSize() const
{
	if (_dataSize <= 0)
		return 0;

	if (_beginIndex < _endIndex)
	{
		return _endIndex - _beginIndex;
	}
	else
	{
		return _bufferSize - _beginIndex;
	}
}

void FNetworkBuffer::FillData(unsigned int size) {
	_dataSize += size;

	// 移动到头部
	if ((_bufferSize - _endIndex) <= size)
	{
		size -= _bufferSize - _endIndex;
		_endIndex = 0;
	}

	_endIndex += size;
}

void FNetworkBuffer::RemoveData(unsigned int size) {
	_dataSize -= size;

	if ((_beginIndex + size) >= _bufferSize)
	{
		size -= _bufferSize - _beginIndex;
		_beginIndex = 0;
	}

	_beginIndex += size;
}

void FNetworkBuffer::ReAllocBuffer(const unsigned int dataLength) {
	// 如果缓冲区超过最大缓冲值，发出警告
	if (_bufferSize >= MAX_SIZE) {
		//std::cout << "Buffer::Realloc except!! Max size:" << _bufferSize << std::endl;
		UE_LOG(LogTemp, Warning, TEXT("Buffer::Realloc except!! Max size:%d"), _bufferSize);
	}

	uint8* tempBuffer = new uint8[_bufferSize + ADDITIONAL_SIZE];
	unsigned int _newEndIndex;
	if (_beginIndex < _endIndex)
	{
		::memcpy(tempBuffer, _buffer + _beginIndex, _endIndex - _beginIndex);
		_newEndIndex = _endIndex - _beginIndex;
	}
	else
	{
		if (_beginIndex == _endIndex && dataLength <= 0)
		{
			_newEndIndex = 0;
		}
		else
		{
			// 1.先COPY尾部
			::memcpy(tempBuffer, _buffer + _beginIndex, _bufferSize - _beginIndex);
			_newEndIndex = _bufferSize - _beginIndex;

			// 2.再COPY头部
			if (_endIndex > 0)
			{
				::memcpy(tempBuffer + _newEndIndex, _buffer, _endIndex);
				_newEndIndex += _endIndex;
			}
		}
	}

	// 修改数据
	_bufferSize += ADDITIONAL_SIZE;

	delete[] _buffer;
	_buffer = tempBuffer;

	_beginIndex = 0;
	_endIndex = _newEndIndex;
}


//////////////////////////////////////////////////////////////////////////
FRecvNetworkBuffer::FRecvNetworkBuffer(const unsigned int size) :FNetworkBuffer(size)
{
	
}

int FRecvNetworkBuffer::GetBuffer(uint8*& Buffer)const
{
	Buffer = _buffer + _endIndex;
	return GetWriteSize();
}


void FRecvNetworkBuffer::MemcpyFromBuffer(uint8* pVoid, unsigned int size) {
	const auto readSize = GetReadSize();
	if (readSize < size)
	{
		// 1.copy尾部数据
		::memcpy(pVoid, _buffer + _beginIndex, readSize);

		// 2.copy头部数据
		::memcpy(pVoid + readSize, _buffer, size - readSize);
	}
	else
	{
		::memcpy(pVoid, _buffer + _beginIndex, size);
	}
}

UMsgPacket* FRecvNetworkBuffer::GetPacket() {
	// 数据长度不够
	if (_dataSize < sizeof(TotalSizeType))
	{
		return nullptr;
	}

	// 1.读出 整体长度
	unsigned short totalSize;
	MemcpyFromBuffer(reinterpret_cast<uint8*>(&totalSize), sizeof(TotalSizeType));

	// 协议体长度不够，等待
	if (_dataSize < totalSize)
	{
		return nullptr;
	}


	RemoveData(sizeof(TotalSizeType));

	// 2.头部长
	unsigned short headSize;
	MemcpyFromBuffer(reinterpret_cast<uint8*>(&headSize), sizeof(TotalSizeType));
	RemoveData(sizeof(TotalSizeType));

	// 3.读出 PacketHead
	if (headSize != sizeof(PacketHead))
	{
		UE_LOG(LogTemp, Error, TEXT("recv invalid msg. head size != sizeof(PacketHead)"));
		return nullptr;
	}

	PacketHead head;
	MemcpyFromBuffer(reinterpret_cast<uint8*>(&head), sizeof(PacketHead));
	RemoveData(sizeof(PacketHead));

	auto pHead = &head;

	unsigned int dataLength = totalSize - sizeof(PacketHead) - sizeof(TotalSizeType) * 2;
	UMsgPacket* Packet = NewObject<UMsgPacket>();
	// this->_buffer+this->_beginIndex 为实际的消息体
	uint8* MsgBuffer = this->_buffer + _beginIndex; // 协议内容的指针
	Packet->FillPacket(head.MsgTypeId, head.MsgId, MsgBuffer, dataLength);
	this->RemoveData(dataLength);

	return Packet;
}


//////////////////////////////////////////////////////////////////////////
FSendNetworkBuffer::FSendNetworkBuffer(unsigned int size):FNetworkBuffer(size)
{
}

int FSendNetworkBuffer::GetBuffer(uint8*& pBuffer)const
{
	if (_dataSize <= 0)
	{
		pBuffer = nullptr;
		return 0;
	}

	if (_beginIndex < _endIndex)
	{
		pBuffer = _buffer + _beginIndex;
		return _endIndex - _beginIndex;
	}
	else
	{
		pBuffer = _buffer + _beginIndex;
		return _bufferSize - _beginIndex;
	}
}

void FSendNetworkBuffer::AddPacket(UMsgPacket* MsgPacket) {
	const auto dataLength = MsgPacket->GetDataLength();

	// 检查一下最大可能的长度，Head按最长的算
	// 格式为：总长 + 头部长 + 头部 + 协议体
	TotalSizeType totalSize = dataLength + sizeof(PacketHead) + sizeof(TotalSizeType) * 2;

	// 长度不够，扩容
	while (GetEmptySize() < totalSize) {
		ReAllocBuffer(dataLength);
		//std::cout << "send buffer::Realloc. _bufferSize:" << _bufferSize << std::endl;
	}

	// 对于http协议来说，只有body，没有自定义头
	const auto msgId = MsgPacket->GetMsgID();

	// 1.整体长度
	MemcpyToBuffer(reinterpret_cast<uint8*>(&totalSize), sizeof(TotalSizeType));

	// 2.头部
	PacketHead head{};
	head.MsgTypeId = MsgPacket->GetMsgType();
	head.MsgId = MsgPacket->GetMsgID();

	TotalSizeType headSize = sizeof(PacketHead);
	MemcpyToBuffer(reinterpret_cast<uint8*>(&headSize), sizeof(TotalSizeType));
	MemcpyToBuffer(reinterpret_cast<uint8*>(&head), sizeof(PacketHead));

	// 3.数据
	MemcpyToBuffer(MsgPacket->GetBuffer(), MsgPacket->GetDataLength());
}

void FSendNetworkBuffer::MemcpyToBuffer(uint8* pVoid, const unsigned int size)
{
	const auto writeSize = GetWriteSize();
	if (writeSize < size)
	{
		// 1.copy到尾部
		::memcpy(_buffer + _endIndex, pVoid, writeSize);

		// 2.copy到头部
		::memcpy(_buffer, pVoid + writeSize, size - writeSize);
	}
	else
	{
		::memcpy(_buffer + _endIndex, pVoid, size);
	}

	FillData(size);
}


