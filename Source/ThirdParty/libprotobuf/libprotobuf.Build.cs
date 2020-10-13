using System.Runtime.InteropServices;
using UnrealBuildTool;
using System.IO;

public class libprotobuf : ModuleRules
{
    public libprotobuf(ReadOnlyTargetRules Target) : base(Target)
    {
        Type = ModuleType.External;

        if ((Target.Platform == UnrealTargetPlatform.Win32) || (Target.Platform == UnrealTargetPlatform.Win64))
        {
            PublicIncludePaths.Add(Path.Combine(ModuleDirectory, "include"));
            PublicAdditionalLibraries.Add(Path.Combine(ModuleDirectory, "lib", "windows", "libprotobufd.lib"));

            PublicDefinitions.AddRange(
                new string[]
                {
                    "WIN32",
                    "_WINDOWS",
                    "GOOGLE_PROTOBUF_CMAKE_BUILD",
                    "GOOGLE_PROTOBUF_NO_RTTI=1",
                    "GOOGLE_PROTOBUF_USE_UNALIGNED=0",
                    "_CRT_SECURE_NO_WARNINGS",
                });
        }
    }
}