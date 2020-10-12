// Fill out your copyright notice in the Description page of Project Settings.

#pragma once
#include "JsEnv.h"

#include "CoreMinimal.h"
#include "Subsystems/Subsystem.h"
#include "ScriptSubsystem.generated.h"


/**
 * 
 */
UCLASS()
class MYPRECIOUSIMMORTAL_API UScriptSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()
	
public :

	// Æô¶¯JS»·¾³
	void StartUpJSEnv();

	virtual void Deinitialize() override;

private:
	TSharedPtr<puerts::FJsEnv> GameScript;
};
