// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "../Network/TCPConnector.h"
#include "ExtensionMethods.h"

#include "NetworkSubsystem.generated.h"

// 要传到脚本的Delegates
DECLARE_DYNAMIC_DELEGATE(FOnConnected);
DECLARE_DYNAMIC_DELEGATE(FOnDisConnected);
DECLARE_DYNAMIC_DELEGATE_TwoParams(FOnRecvMsg, int32, MsgID, FArrayBuffer, MsgBuffer);


UCLASS()
class MYPRECIOUSIMMORTAL_API UNetworkSubsystem : public UGameInstanceSubsystem, public ISocketEventHandler
{
	GENERATED_BODY()

public:
	virtual void Initialize(FSubsystemCollectionBase& Collection)override;

	virtual void Deinitialize()override;

	virtual void BeginDestroy()override;

	virtual void OnSocketConnected()override;

	virtual void OnSokcetDisconnected()override;
	
	virtual void OnRecvMessage(int MsgID, FArrayBuffer& ArrayBuffer)override;


	UFUNCTION(BlueprintCallable, meta = (DisplayName = "Connect", ScriptName = "UNetworkSubsystem", Keywords = "network"), Category = "network")
	void Connect(const FString& HostAddress, const int Port);


	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SendMessage", ScriptName = "UNetworkSubsystem", Keywords = "network"), Category = "network")
	void SendMessage(int MsgType, int MsgID, const FArrayBuffer& MsgBuffer)const;

private:
	UPROPERTY()
	FOnConnected OnConnectedDelegate;

	UPROPERTY()
	FOnConnected OnDisConnectedDelegate;

	UPROPERTY()
	FOnRecvMsg	OnRecvMsgDelegate;

	TSharedPtr<FTCPConnector> TCPConnector;
};
