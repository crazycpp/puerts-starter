// Fill out your copyright notice in the Description page of Project Settings.


#include "MsgPacket.h"

UMsgPacket::UMsgPacket() {
}

UMsgPacket::~UMsgPacket() {
	UE_LOG(LogStreaming, Warning, TEXT("UMsgPacket Destroy"));
	delete[] _msgBuffer;
}

void UMsgPacket::FillPacket(int msgTypeID, int msgID, void* msgBuffer, int msgLength)
{
	_msgTypeId = msgTypeID;
	msgID = msgID;
	_msgBuffer = new char[msgLength];
	::memcpy(_msgBuffer, msgBuffer, msgLength);
	msgLength = msgLength;
}

char* UMsgPacket::GetBuffer() const
{
	return _msgBuffer;
}

unsigned short UMsgPacket::GetDataLength() const
{
	return _msgLength;
}


int UMsgPacket::GetMsgID()const {
	return _msgId;
}

int UMsgPacket::GetMsgType()const {
	return _msgTypeId;
}