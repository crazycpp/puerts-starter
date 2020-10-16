// Fill out your copyright notice in the Description page of Project Settings.


#include "TCPConnector.h"
#include "Sockets.h"
#include "IpAddress.h"
#include "SocketSubsystem.h"
#include "Interfaces/IPv4/IPv4Address.h"

#include "NetworkBuffer.h"
#include "MsgPacket.h"

#define DEFAULT_SEND_BUFFER_SIZE	1024 * 128
#define DEFAULT_RECV_BUFFER_SIZE	1024 * 128

FTCPConnector::FTCPConnector(ISocketEventHandler* EventHandler)
{
	TickerDelegate = FTickerDelegate::CreateRaw(this, &FTCPConnector::Tick);

	SendBuffer = new FSendNetworkBuffer(DEFAULT_SEND_BUFFER_SIZE);
	RecvBuffer = new FRecvNetworkBuffer(DEFAULT_RECV_BUFFER_SIZE);

	SocketEventHandler = EventHandler;
}

void FTCPConnector::Connect(FString IpAddress, int32 ServerPort)
{
	this->HostAddress = IpAddress;
	this->Port = ServerPort;

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


	// TODO: 把连接放到多线程里面去
	bool bConnected = ClientSocket->Connect(*InternetAddr);
	if (bConnected) 
	{
		ClientSocket->SetNonBlocking();
		UE_LOG(LogStreaming, Warning, TEXT("Connect to the host successed!"));

		SocketEventHandler->OnSocketConnected();

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

	// 待定，正常关闭的话，这里应该也需要调用连接断开的事件 
	SocketEventHandler->OnSokcetDisconnected();
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
		//OnSocketDisConnectedDelegate.ExecuteIfBound();
	}

	return true;
}

void FTCPConnector::SendMsgPacket(int MsgType, int MsgID, uint8* MsgContent, int MsgLength)
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
		uint8* pBuffer = nullptr;
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
	if (ClientSocket->GetConnectionState() != SCS_Connected) {
		return false;
	}

	uint8* pBuffer = nullptr;
	while (true)
	{
		// 总空间数据不足一个头的大小，扩容
		if (RecvBuffer->GetEmptySize() < (sizeof(PacketHead) + sizeof(TotalSizeType) * 2))
		{
			RecvBuffer->ReAllocBuffer();
		}

		const int emptySize = RecvBuffer->GetBuffer(pBuffer);
		if (!ClientSocket->Recv((uint8*)pBuffer, emptySize, BytesReaded))
		{
			break;
		}

		if (BytesReaded <= 0)
		{
			break;
		}

		RecvBuffer->FillData(BytesReaded);
	}

	while (true)
	{
		const UMsgPacket* Packet = RecvBuffer->GetPacket();
		if (Packet == nullptr) {
			break;
		}

		FArrayBuffer Buffer;
		Buffer.Data = Packet->GetBuffer();
		Buffer.Length = Packet->GetDataLength();
		SocketEventHandler->OnRecvMessage(Packet->GetMsgID(), Buffer);
	}

	return true;
}

