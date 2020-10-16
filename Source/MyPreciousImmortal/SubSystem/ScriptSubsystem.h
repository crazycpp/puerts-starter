// Fill out your copyright notice in the Description page of Project Settings.

#pragma once
#include "JsEnv.h"

#include "CoreMinimal.h"
#include "Subsystems/Subsystem.h"
#include "ScriptSubsystem.generated.h"



DECLARE_DYNAMIC_DELEGATE_OneParam(FScriptEngineTicker, float, DeltaTime);

/**
 * 
 */
UCLASS()
class MYPRECIOUSIMMORTAL_API UScriptSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()
	
public :

	virtual void Initialize(FSubsystemCollectionBase& Collection)override;

	virtual void Deinitialize() override;
	// Æô¶¯JS»·¾³
	void StartUpJSEnv();

	bool Tick(float DeltaTime);

private:
	TSharedPtr<puerts::FJsEnv> GameScript;

	UPROPERTY()
	// support for script sandbox tick
	FScriptEngineTicker OnGameTick;

	FTickerDelegate TickerDelegate;
};
