// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Containers/Ticker.h"
#include "NetworkBuffer.h"
#include "ExtensionMethods.h"


class ISocketEventHandler {
public:
	virtual void OnSocketConnected() = 0;
	virtual void OnSokcetDisconnected() = 0;
	virtual void OnRecvMessage(int MsgID, FArrayBuffer& arrayBuffer) = 0;
};

class MYPRECIOUSIMMORTAL_API FTCPConnector
{
public:

	FTCPConnector(ISocketEventHandler* EventHandler);

	void Connect(FString IpAddress, int32 ServerPort);

	void DisConnect();

	bool Tick(float DeltaTime);

	void SendMsgPacket(int MsgType, int MsgID, uint8* MsgContent, int MsgLength);

private:
	bool Send();
	bool Recv();

private:
	FString HostAddress;
	int32 Port;
	class FSocket* ClientSocket;
	FTickerDelegate TickerDelegate;

	int32 BytesReaded{0};
	class FRecvNetworkBuffer* RecvBuffer{nullptr};
	class FSendNetworkBuffer* SendBuffer{nullptr};

	ISocketEventHandler* SocketEventHandler;
};
