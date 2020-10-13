// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "../Network/TCPConnector.h"
#include "ExtensionMethods.h"

#include "NetworkSubsystem.generated.h"


DECLARE_DYNAMIC_DELEGATE(FOnConnected);
DECLARE_DYNAMIC_DELEGATE(FOnDisConnected);
DECLARE_DYNAMIC_DELEGATE_ThreeParams(FOnRecvMsg, int32, MsgType, int32, MsgID, FArrayBuffer&, MsgBuffer);


UCLASS()
class MYPRECIOUSIMMORTAL_API UNetworkSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()

public:
	virtual void Initialize(FSubsystemCollectionBase& Collection)override;

	virtual void Deinitialize()override;

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "Connect", ScriptName = "UNetworkSubsystem", Keywords = "network"), Category = "network")
	void Connect(const FString& HostAddress, const int Port);


	UFUNCTION(BlueprintCallable, meta = (DisplayName = "Connect", ScriptName = "UNetworkSubsystem", Keywords = "network"), Category = "network")
	void SendMessage(int MsgType, int MsgID, const FArrayBuffer& MsgBuffer)const;

private:
	UPROPERTY()
	FOnConnected OnConnected;

	UPROPERTY()
	FOnConnected OnDisConnected;

	UPROPERTY()
	FOnRecvMsg	OnRecvMsg;

	TSharedPtr<FTCPConnector> TCPConnector;
};
