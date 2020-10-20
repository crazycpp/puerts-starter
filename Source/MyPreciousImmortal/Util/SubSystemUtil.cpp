
#include "SubSystemUtil.h"
#include "../MyPreciousGameInstance.h"

UNetworkSubsystem* USubSystemUtil::GetNetworkSubSystem()
{
	return MyPreciousGameInstancePtr->GetSubsystem<UNetworkSubsystem>();
}

UScriptSubsystem* USubSystemUtil::GetScriptSubSystem()
{
	return MyPreciousGameInstancePtr->GetSubsystem<UScriptSubsystem>();
}

