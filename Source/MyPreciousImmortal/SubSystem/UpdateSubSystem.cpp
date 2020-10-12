// Fill out your copyright notice in the Description page of Project Settings.


#include "UpdateSubSystem.h"
#include "ScriptSubsystem.h"
#include "../Network/TCPConnector.h"
#include "../Network/Protobuf/msg.pb.h"
#include "../Network/Protobuf/proto_id.pb.h"


void UUpdateSubSystem::Initialize(FSubsystemCollectionBase& Collection)
{
	UE_LOG(LogTemp, Warning, TEXT("Update SubSystem Init"));
}

void UUpdateSubSystem::CheckUpdate()
{

}

void UUpdateSubSystem::OnUpdateCompleted()
{
	GetGameInstance()->GetSubsystem<UScriptSubsystem>()->StartUpJSEnv();
	FTCPConnector* pConnector = new FTCPConnector("192.168.0.149", 5401);
	pConnector->Connect();

	Proto::PlayerLogin request;
	request.set_server_id(1);
	request.set_channel("pc");
	request.set_uuid("windknife");
	int total = request.ByteSizeLong();
	char* buffer = new char[total];
	request.SerializePartialToArray(buffer, total);
	pConnector->SendMsgPacket(Proto::MsgTypeId::MI_Logic, (int)Proto::C2S_PlayerLogin, buffer, total);
}
