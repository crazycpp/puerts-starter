// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "UObject/NoExportTypes.h"
#include "MsgPacket.generated.h"

/**
 * 
 */
UCLASS()
class MYPRECIOUSIMMORTAL_API UMsgPacket : public UObject
{
	GENERATED_BODY()

public:
	UMsgPacket();
	~UMsgPacket();

	void FillPacket(int msgTypeID, int msgID, void* msgBuffer, int msgLength);
	char* GetBuffer()const;
	unsigned short GetDataLength()const;

	int GetMsgID()const;
	int GetMsgType()const;

private:
	int _msgTypeId;
	int _msgId;
	unsigned short _msgLength;
	char* _msgBuffer{ nullptr };
};
