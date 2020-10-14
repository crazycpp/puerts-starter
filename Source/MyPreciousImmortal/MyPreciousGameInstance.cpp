// Fill out your copyright notice in the Description page of Project Settings.


#include "MyPreciousGameInstance.h"

void UMyPreciousGameInstance::Init()
{
	Super::Init();
	GGameInstance = this;
}

void UMyPreciousGameInstance::OnStart()
{

}

void UMyPreciousGameInstance::Shutdown()
{

}

UWorld* UMyPreciousGameInstance::GetCurrentWorld()const {
	return this->GetWorld();
}



