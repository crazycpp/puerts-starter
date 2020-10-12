/*
* Tencent is pleased to support the open source community by making Puerts available.
* Copyright (C) 2020 THL A29 Limited, a Tencent company.  All rights reserved.
* Puerts is licensed under the BSD 3-Clause License, except for the third-party components listed in the file 'LICENSE' which may be subject to their corresponding license terms.
* This file is subject to the terms and conditions defined in file 'LICENSE', which is part of this source code package.
*/

#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "ExtensionMethods.generated.h"

USTRUCT(BlueprintType)
struct FArrayBuffer //��ʱ�������
{
public:
    GENERATED_USTRUCT_BODY()

public:
    void* Data;
    size_t Length;
};

/**
 * 
 */
UCLASS()
class JSENV_API UExtensionMethods : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()
	
};