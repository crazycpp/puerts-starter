// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;

public class MyPreciousImmortal : ModuleRules
{
	public MyPreciousImmortal(ReadOnlyTargetRules Target) : base(Target)
	{
		PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
	
		PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "JsEnv", "UMG", "Sockets", "Networking", "NavigationSystem", "AIModule", "Json" });

		PrivateDependencyModuleNames.AddRange(new string[] { });

		// all plugin within this project.
		PublicDependencyModuleNames.AddRange(new string[] {"JsEnv"});

		bEnableUndefinedIdentifierWarnings = false;


		PrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });
	
		
		// Uncomment if you are using online features
		// PrivateDependencyModuleNames.Add("OnlineSubsystem");

		// To include OnlineSubsystemSteam, add it to the plugins section in your uproject file with the Enabled attribute set to true
	}
}
