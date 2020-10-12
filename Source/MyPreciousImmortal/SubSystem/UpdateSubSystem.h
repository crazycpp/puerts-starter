// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "UpdateSubSystem.generated.h"

/**
 * 
 */
UCLASS()
class MYPRECIOUSIMMORTAL_API UUpdateSubSystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()
public:
	virtual void Initialize(FSubsystemCollectionBase& Collection) override;

	void CheckUpdate();

	UFUNCTION(BlueprintCallable, Category = "SubSystem")
	void OnUpdateCompleted();

};
