
#include "SubSystemUtil.h"
#include "../MyPreciousGameInstance.h"

UNetworkSubsystem* USubSystemUtil::GetNetworkSubSystem()
{
	return  GGameInstance->GetSubsystem<UNetworkSubsystem>();
}

UScriptSubsystem* USubSystemUtil::GetScriptSubSystem()
{
	return GGameInstance->GetSubsystem<UScriptSubsystem>();
}

