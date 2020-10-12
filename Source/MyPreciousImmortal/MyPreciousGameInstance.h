// Fill out your copyright notice in the Description page of Project Settings.

#pragma once


#include "JsEnv.h"

#include "CoreMinimal.h"
#include "Engine/GameInstance.h"
#include "MyPreciousGameInstance.generated.h"



/**
 *
 */
UCLASS()
class MYPRECIOUSIMMORTAL_API UMyPreciousGameInstance : public UGameInstance
{
	GENERATED_BODY()

public:
	virtual void Init() override;

	virtual void OnStart() override;

	virtual void Shutdown() override;


	UFUNCTION(BlueprintCallable, Category = "SubSystem")
		UWorld* GetCurrentWorld()const;
};
