#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "../SubSystem/NetworkSubsystem.h"
#include "../SubSystem/ScriptSubsystem.h"

#include "SubSystemUtil.generated.h"



UCLASS()
class MYPRECIOUSIMMORTAL_API USubSystemUtil : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

	UFUNCTION(BlueprintCallable, Category = "Utility")
	static UNetworkSubsystem* GetNetworkSubSystem();

	UFUNCTION(BlueprintCallable, Category = "Utility")
	static UScriptSubsystem* GetScriptSubSystem();
};
