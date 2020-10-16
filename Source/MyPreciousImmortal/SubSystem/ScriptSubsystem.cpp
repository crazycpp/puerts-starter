// Fill out your copyright notice in the Description page of Project Settings.


#include "ScriptSubsystem.h"


void UScriptSubsystem::Initialize(FSubsystemCollectionBase& Collection)
{
	TickerDelegate = FTickerDelegate::CreateUObject(this, &UScriptSubsystem::Tick);
}

void UScriptSubsystem::Deinitialize()
{
	Super::Deinitialize();

	GameScript.Reset();
}


void UScriptSubsystem::StartUpJSEnv()
{
	GameScript = MakeShared<puerts::FJsEnv>();
	
	// uncomment below code to open the Debugger
	//GameScript = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("MyPreciousImmortal/JSEnv/JavaScript")), std::make_shared<puerts::FDefaultLogger>(), 8080);
	//GameScript->WaitDebugger();

	TArray<TPair<FString, UObject*>> Arguments;
	Arguments.Add(TPair<FString, UObject*>("GameInstance", this->GetGameInstance()));
	Arguments.Add(TPair<FString, UObject*>("Engine", GEngine));

	GameScript->Start("Main", Arguments);

	FTicker::GetCoreTicker().AddTicker(TickerDelegate);
}

bool UScriptSubsystem::Tick(float DeltaTime)
{
	OnGameTick.ExecuteIfBound(DeltaTime);

	return true;
}