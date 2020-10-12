// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Containers/Ticker.h"
#include "NetworkBuffer.h"


class MYPRECIOUSIMMORTAL_API FTCPConnector
{
public:

	FTCPConnector(FString IpAddress, int32 ServerPort);

	void Connect();

	void DisConnect();

	bool Tick(float DeltaTime);

	void SendMsgPacket(int MsgType, int MsgID, char* MsgContent, int MsgLength);

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
};
