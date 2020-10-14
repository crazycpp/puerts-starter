// Fill out your copyright notice in the Description page of Project Settings.


#include "NetworkSubsystem.h"

void UNetworkSubsystem::Initialize(FSubsystemCollectionBase& Collection)
{

}

void UNetworkSubsystem::Deinitialize()
{
	if (TCPConnector != nullptr)
	{
		TCPConnector->DisConnect();
	}
}

void UNetworkSubsystem::BeginDestroy()
{
	Super::BeginDestroy();
	if (TCPConnector != nullptr)
	{
		TCPConnector->DisConnect();
	}
}

void UNetworkSubsystem::Connect(const FString& HostAddress, const int Port) {
	if (TCPConnector != nullptr) 
	{
		TCPConnector->DisConnect();
	}
	TCPConnector = MakeShareable(new FTCPConnector(this));
	TCPConnector->Connect(HostAddress, Port);
}

void UNetworkSubsystem::SendMessage(int MsgType, int MsgID, const FArrayBuffer& MsgBuffer) const
{
	TCPConnector->SendMsgPacket(MsgType, MsgID, (uint8*)MsgBuffer.Data, MsgBuffer.Length);
}

void UNetworkSubsystem::OnSocketConnected()
{
	this->OnConnectedDelegate.ExecuteIfBound();
}

void UNetworkSubsystem::OnSokcetDisconnected()
{
	this->OnDisConnectedDelegate.ExecuteIfBound();
}

void UNetworkSubsystem::OnRecvMessage(int32 MsgID, FArrayBuffer& Buffer)
{
	this->OnRecvMsgDelegate.ExecuteIfBound(MsgID, Buffer);
}

