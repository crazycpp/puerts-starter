// Fill out your copyright notice in the Description page of Project Settings.


#include "UpdateSubSystem.h"
#include "MyPreciousGameInstance.h"

#include "ScriptSubsystem.h"

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
}
