// Fill out your copyright notice in the Description page of Project Settings.


#include "MyPreciousGameInstance.h"


UMyPreciousGameInstance* MyPreciousGameInstancePtr;

void UMyPreciousGameInstance::Init()
{
	Super::Init();	
	MyPreciousGameInstancePtr = this;
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


