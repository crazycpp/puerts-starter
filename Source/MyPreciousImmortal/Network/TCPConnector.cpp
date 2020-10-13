// Fill out your copyright notice in the Description page of Project Settings.


#include "TCPConnector.h"
#include "Sockets.h"
#include "IpAddress.h"
#include "SocketSubsystem.h"
#include "Interfaces/IPv4/IPv4Address.h"

#include "NetworkBuffer.h"
#include "MsgPacket.h"

#include "protobuf/proto_id.pb.h"
#include "protobuf/msg.pb.h"
#include "protobuf/db.pb.h"

#define DEFAULT_SEND_BUFFER_SIZE	1024 * 128
#define DEFAULT_RECV_BUFFER_SIZE	1024 * 128

FTCPConnector::FTCPConnector(FString IpAddress, int32 ServerPort)
{

	this->HostAddress = IpAddress;
	this->Port = ServerPort;
	TickerDelegate = FTickerDelegate::CreateRaw(this, &FTCPConnector::Tick);

	SendBuffer = new FSendNetworkBuffer(DEFAULT_SEND_BUFFER_SIZE);
	RecvBuffer = new FRecvNetworkBuffer(DEFAULT_RECV_BUFFER_SIZE);
}

void FTCPConnector::Connect()
{

	auto SocketSubSystem = ISocketSubsystem::Get(PLATFORM_SOCKETSUBSYSTEM);
	ClientSocket = SocketSubSystem->CreateSocket(NAME_Stream, TEXT("default"), false );
	if (!ClientSocket)
	{
		return;
	}

	FIPv4Address Ip;
	FIPv4Address::Parse(this->HostAddress, Ip);

	TSharedRef<FInternetAddr> InternetAddr = SocketSubSystem->CreateInternetAddr();
	InternetAddr->SetIp(Ip.Value);
	InternetAddr->SetPort(Port);

	bool bConnected = ClientSocket->Connect(*InternetAddr);
	if (bConnected) 
	{
		ClientSocket->SetNonBlocking();
		UE_LOG(LogStreaming, Warning, TEXT("Connect to the host successed!"));

		// add ticker
		FTicker::GetCoreTicker().AddTicker(TickerDelegate);
	}
	else 
	{
		UE_LOG(LogStreaming, Warning, TEXT("Connect to the host failed!"));
	}
}

void FTCPConnector::DisConnect()
{
	ClientSocket->Close();

	FTicker::GetCoreTicker().RemoveTicker(TickerDelegate.GetHandle());
}


bool FTCPConnector::Tick(float DeltaTime) {
	
	if (ClientSocket->GetConnectionState() == SCS_Connected)
	{
		Send();
		Recv();
	}
	else
	{
		// TODO
		// 通知逻辑层，网络连接断开
		// 返回false，让Ticker停止掉
	}

	return true;
}

void FTCPConnector::SendMsgPacket(int MsgType, int MsgID, char* MsgContent, int MsgLength)
{
	UMsgPacket* Packet =  NewObject<UMsgPacket>();
	Packet->FillPacket(MsgType, MsgID, MsgContent, MsgLength);
	SendBuffer->AddPacket(Packet);
}

bool FTCPConnector::Send()
{
	if (ClientSocket->GetConnectionState() != SCS_Connected)
		return false;

	while (true) {
		char* pBuffer = nullptr;
		const int needSendSize = SendBuffer->GetBuffer(pBuffer);

		// 没有数据可发送
		if (needSendSize <= 0)
			return true;

		int realSendSize = 0;
		if (ClientSocket->Send((uint8*)pBuffer, needSendSize, realSendSize))
		{
			SendBuffer->RemoveData(realSendSize);

			// 下一帧再发送
			if (realSendSize < needSendSize)
				return true;
		}
		else
		{
			UE_LOG(LogTemp, Warning, TEXT("FSocket->Send failed. needSendSize:%d."), needSendSize);
			return false;
		}
	}
}

bool FTCPConnector::Recv()
{
	if (ClientSocket->GetConnectionState() != SCS_Connected)
		return false;

	//if (!_pFSocket->HasPendingData(_iPendingDataSize))
	//	return false;

	bool isRs = false;
	char* pBuffer = nullptr;
	while (true)
	{
		// 总空间数据不足一个头的大小，扩容
		if (RecvBuffer->GetEmptySize() < (sizeof(PacketHead) + sizeof(TotalSizeType) * 2))
		{
			RecvBuffer->ReAllocBuffer();
		}

		const int emptySize = RecvBuffer->GetBuffer(pBuffer);
		if (!ClientSocket->Recv((uint8*)pBuffer, emptySize, BytesReaded))
			break;

		if (BytesReaded <= 0)
			break;

		RecvBuffer->FillData(BytesReaded);
	}

	while (true)
	{
		const auto pPacket = RecvBuffer->GetPacket();
		if (pPacket == nullptr)
			break;

		// 消息处理
		// 传递到脚本层
		UE_LOG(LogTemp, Warning, TEXT("receive msg Type:%d MsgID:%d"), pPacket->GetMsgType(), pPacket->GetMsgID());

		/*
		Proto::PlayerLoginRet protoResult;
		protoResult.ParsePartialFromArray(pPacket->GetBuffer(), pPacket->GetDataLength());
		protoResult.ret();
		*/
	}

	return true;
}

