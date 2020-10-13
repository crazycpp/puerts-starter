// Fill out your copyright notice in the Description page of Project Settings.


#include "NetworkSubsystem.h"

void UNetworkSubsystem::Initialize(FSubsystemCollectionBase& Collection)
{

}

void UNetworkSubsystem::Deinitialize()
{

}

void UNetworkSubsystem::Connect(const FString& HostAddress, const int Port) {

}

void UNetworkSubsystem::SendMessage(int MsgType, int MsgID, const FArrayBuffer& MsgBuffer) const
{
	TCPConnector->SendMsgPacket(MsgType, MsgID, (char*)MsgBuffer.Data, MsgBuffer.Length);
}
