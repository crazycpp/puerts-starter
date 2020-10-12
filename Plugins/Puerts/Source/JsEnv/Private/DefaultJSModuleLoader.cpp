/*
* Tencent is pleased to support the open source community by making Puerts available.
* Copyright (C) 2020 THL A29 Limited, a Tencent company.  All rights reserved.
* Puerts is licensed under the BSD 3-Clause License, except for the third-party components listed in the file 'LICENSE' which may be subject to their corresponding license terms.
* This file is subject to the terms and conditions defined in file 'LICENSE', which is part of this source code package.
*/

#include "JSModuleLoader.h"
#include "Misc/Paths.h"
#include "Misc/FileHelper.h"
#include "HAL/PlatformFileManager.h"
#include "Algo/Reverse.h"

namespace puerts
{
    static FString PathNormalize(const FString& PathIn)
    {
        TArray<FString> PathFrags;
        PathIn.ParseIntoArray(PathFrags, TEXT("/"));
        Algo::Reverse(PathFrags);
        TArray<FString> NewPathFrags;
        while (PathFrags.Num() > 0) {
            FString E = PathFrags.Pop();
            if (E != TEXT("") && E != TEXT(".")) 
            {
                if (E == TEXT("..") && NewPathFrags.Num() > 0 && NewPathFrags.Last() != TEXT("..")) {
                    NewPathFrags.Pop();
                }
                else {
                    NewPathFrags.Push(E);
                }
            }
        }
        return FString::Join(NewPathFrags, TEXT("/"));
    }

	bool DefaultJSModuleLoader::CheckExists(const FString& PathIn, FString& Path, FString& AbsolutePath)
	{
        IPlatformFile& PlatformFile = FPlatformFileManager::Get().GetPlatformFile();
        FString NormalizedPath = PathNormalize(PathIn);
		if (PlatformFile.FileExists(*NormalizedPath))
		{
            AbsolutePath = IFileManager::Get().ConvertToAbsolutePathForExternalAppForRead(*NormalizedPath);
#if PLATFORM_WINDOWS
			auto PathInWin = AbsolutePath.Replace(TEXT("/"), TEXT("\\"));
			if (PathInWin.Len() && PathInWin[1] == ':')
			{
				PathInWin = PathInWin.Mid(0, 1).ToLower() + PathInWin.Mid(1);
			}
#endif
            
            Path = NormalizedPath;
            
            return true;
		}

		return false;
	}

	bool DefaultJSModuleLoader::SearchModuleInDir(const FString& Dir, const FString&RequiredModule, FString& Path, FString& AbsolutePath)
	{
        if (FPaths::GetExtension(RequiredModule) == TEXT(""))
        {
            return SearchModuleWithExtInDir(Dir, RequiredModule + ".js", Path, AbsolutePath)
                || SearchModuleWithExtInDir(Dir, RequiredModule / "index.js", Path, AbsolutePath)
                || SearchModuleWithExtInDir(Dir, RequiredModule / "package.json", Path, AbsolutePath);
        }
        else
        {
            return SearchModuleWithExtInDir(Dir, RequiredModule, Path, AbsolutePath);
        }
	}

    bool DefaultJSModuleLoader::SearchModuleWithExtInDir(const FString& Dir, const FString&RequiredModule, FString& Path, FString& AbsolutePath)
    {
        return CheckExists(Dir / RequiredModule, Path, AbsolutePath)
            || (!Dir.EndsWith(TEXT("node_modules")) && CheckExists(Dir / TEXT("node_modules") / RequiredModule, Path, AbsolutePath));
    }

	bool DefaultJSModuleLoader::Search(const FString& RequiredDir, const FString& RequiredModule, FString& Path, FString& AbsolutePath)
	{
        if (SearchModuleInDir(RequiredDir, RequiredModule, Path, AbsolutePath))
        {
            return true;
        }
        else if (RequiredDir != TEXT("") && !RequiredModule.GetCharArray().Contains('/') && !RequiredModule.EndsWith(TEXT(".js")))
        {
            // 调用require的文件所在的目录往上找
            TArray<FString> pathFrags;
            RequiredDir.ParseIntoArray(pathFrags, TEXT("/"));
            pathFrags.Pop(); // has try in "if (SearchModuleInDir(RequiredDir, RequiredModule, Path, AbsolutePath))"
            while (pathFrags.Num() > 0)
            {
                if (!pathFrags.Last().Equals(TEXT("node_modules")))
                {
                    if (SearchModuleInDir(FString::Join(pathFrags, TEXT("/")), RequiredModule, Path, AbsolutePath))
                    {
                        return true;
                    }
                }
                pathFrags.Pop();
            }
        }
        
		return SearchModuleInDir(FPaths::ProjectContentDir() / ScriptRoot, RequiredModule, Path, AbsolutePath) 
            || (ScriptRoot != TEXT("JavaScript") && SearchModuleInDir(FPaths::ProjectContentDir() + TEXT("MyPreciousImmortal/JSEnv/JavaScript"), RequiredModule, Path, AbsolutePath));
	}

	bool DefaultJSModuleLoader::Load(const FString& Path, TArray<uint8>& Content)
	{
		//return (FPaths::FileExists(FullPath) && FFileHelper::LoadFileToString(Content, *FullPath));
        IPlatformFile& PlatformFile = FPlatformFileManager::Get().GetPlatformFile();
        IFileHandle* FileHandle = PlatformFile.OpenRead(*Path);
        if (FileHandle) {
            int len = FileHandle->Size();
            Content.Reset(len + 2);
            Content.AddUninitialized(len);
            FileHandle->Read(Content.GetData(), len);
            delete FileHandle;
            
            return true;
        }
        return false;
	}

    FString& DefaultJSModuleLoader::GetScriptRoot()
    {
        return ScriptRoot;
    }

}