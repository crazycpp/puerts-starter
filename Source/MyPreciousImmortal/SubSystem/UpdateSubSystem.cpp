// Fill out your copyright notice in the Description page of Project Settings.


#include "UpdateSubSystem.h"
#include "ScriptSubsystem.h"
#include "../Network/TCPConnector.h"
#include "Engine/GameInstance.h"


void UUpdateSubSystem::Initialize(FSubsystemCollectionBase& Collection)
{
	UE_LOG(LogTemp, Warning, TEXT("Update SubSystem Init"));
}

void UUpdateSubSystem::CheckUpdate()
{

}

void UUpdateSubSystem::OnUpdateCompleted()
{
	// 下面这行代码无法通过移动端版本编译
	GetGameInstance()->GetSubsystem<UScriptSubsystem>()->StartUpJSEnv();
}
