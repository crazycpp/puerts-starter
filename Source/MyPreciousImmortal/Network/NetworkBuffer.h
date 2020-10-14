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
// �洢Э���ܳ��ȵ�����
using TotalSizeType = unsigned short;
/**
 * 
 */
class MYPRECIOUSIMMORTAL_API FNetworkBuffer
{
public:
	FNetworkBuffer(const unsigned int size);
	~FNetworkBuffer();

	// ��������ͷ�뻷��βһ���Ŀ��ֽ���
	unsigned int GetEmptySize();

	// ��ǰ��д����
	unsigned int GetWriteSize() const;

	// ��ǰ�ɶ�����
	unsigned int GetReadSize() const;

	void FillData(unsigned int  size);
	void RemoveData(unsigned int size);
	void ReAllocBuffer(const unsigned int dataLength);
	void ReAllocBuffer() { ReAllocBuffer(_dataSize); }

protected:
	// �ڻ����У���������� _endIndex ������ _beginIndex �غ�
	// �غ�ʱ�����ֿ��ܣ�һ����û�����ݣ���һ����������
	unsigned int _dataSize; // ��Ч����

	uint8* _buffer{ nullptr };
	unsigned int _beginIndex{ 0 }; // buffer���� ��ʼλ�����λ
	unsigned int _endIndex{ 0 };

	unsigned int _bufferSize{ 0 }; // �ܳ���
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