// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "MsgPacket.h"

struct PacketHead
{
	unsigned short MsgTypeId;
	unsigned short MsgId;
};

#define ADDITIONAL_SIZE 1024 * 128
// 存储协议总长度的类型
using TotalSizeType = unsigned short;
/**
 * 
 */
class MYPRECIOUSIMMORTAL_API FNetworkBuffer
{
public:
	FNetworkBuffer(const unsigned int size);
	~FNetworkBuffer();

	// 包括环的头与环的尾一共的空字节数
	unsigned int GetEmptySize();

	// 当前可写长度
	unsigned int GetWriteSize() const;

	// 当前可读长度
	unsigned int GetReadSize() const;

	void FillData(unsigned int  size);
	void RemoveData(unsigned int size);
	void ReAllocBuffer(const unsigned int dataLength);
	void ReAllocBuffer() { ReAllocBuffer(_dataSize); }

protected:
	// 在环形中，极端情况下 _endIndex 可能与 _beginIndex 重合
	// 重合时有两种可能，一种是没有数据，另一种是满数据
	unsigned int _dataSize; // 有效数据

	uint8* _buffer{ nullptr };
	unsigned int _beginIndex{ 0 }; // buffer数据 开始位与结束位
	unsigned int _endIndex{ 0 };

	unsigned int _bufferSize{ 0 }; // 总长度
};


class FRecvNetworkBuffer : public FNetworkBuffer
{
public:
	FRecvNetworkBuffer(unsigned int _size);
	int GetBuffer(uint8*& pBuffer) const;
	UMsgPacket* GetPacket();

private:
	void MemcpyFromBuffer(uint8* pVoid, unsigned int size);
};

class FSendNetworkBuffer : public FNetworkBuffer
{
public:
	FSendNetworkBuffer(unsigned int size);
	int GetBuffer(uint8*& pBuffer) const;
	void AddPacket(UMsgPacket* pPacket);

private:
	void MemcpyToBuffer(uint8* pVoid, unsigned int size);
};