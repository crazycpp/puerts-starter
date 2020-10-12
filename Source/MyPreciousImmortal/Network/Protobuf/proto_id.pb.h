// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto_id.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_proto_5fid_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_proto_5fid_2eproto

#include <limits>
#include <string>

#include <google/protobuf/port_def.inc>
#if PROTOBUF_VERSION < 3009000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers. Please update
#error your headers.
#endif
#if 3009001 < PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers. Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/port_undef.inc>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/inlined_string_field.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/generated_enum_reflection.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_proto_5fid_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_proto_5fid_2eproto {
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::AuxillaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTable schema[1]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::FieldMetadata field_metadata[];
  static const ::PROTOBUF_NAMESPACE_ID::internal::SerializationTable serialization_table[];
  static const ::PROTOBUF_NAMESPACE_ID::uint32 offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_proto_5fid_2eproto;
PROTOBUF_NAMESPACE_OPEN
PROTOBUF_NAMESPACE_CLOSE
namespace Proto {

enum MsgTypeId : int {
  MI_Logic = 0,
  MI_Card = 1,
  MI_Battle = 2,
  MI_Item = 3,
  MI_Chat = 4,
  MI_GM = 5,
  MI_Gacha = 6,
  MI_Character = 7,
  MsgTypeId_INT_MIN_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::min(),
  MsgTypeId_INT_MAX_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::max()
};
bool MsgTypeId_IsValid(int value);
constexpr MsgTypeId MsgTypeId_MIN = MI_Logic;
constexpr MsgTypeId MsgTypeId_MAX = MI_Character;
constexpr int MsgTypeId_ARRAYSIZE = MsgTypeId_MAX + 1;

const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* MsgTypeId_descriptor();
template<typename T>
inline const std::string& MsgTypeId_Name(T enum_t_value) {
  static_assert(::std::is_same<T, MsgTypeId>::value ||
    ::std::is_integral<T>::value,
    "Incorrect type passed to function MsgTypeId_Name.");
  return ::PROTOBUF_NAMESPACE_ID::internal::NameOfEnum(
    MsgTypeId_descriptor(), enum_t_value);
}
inline bool MsgTypeId_Parse(
    const std::string& name, MsgTypeId* value) {
  return ::PROTOBUF_NAMESPACE_ID::internal::ParseNamedEnum<MsgTypeId>(
    MsgTypeId_descriptor(), name, value);
}
enum MsgId : int {
  MsgId_None = 0,
  MI_NetworkConnect = 1,
  MI_NetworkConnected = 2,
  MI_NetworkListen = 3,
  MI_NetworkListenKey = 4,
  MI_NetworkDisconnect = 10,
  MI_NetworkDisconnectEx = 11,
  MI_NetworkRequestDisconnect = 20,
  MI_RemoveComponent = 50,
  MI_CreateComponent = 51,
  MI_CreateSystem = 52,
  MI_Ping = 101,
  MI_AppRegister = 102,
  MI_AppInfoSync = 103,
  MI_AppInfoListSync = 104,
  MI_SpaceReady = 120,
  DB_LoadAllAccount = 196,
  DB_LoadAllAccountRs = 197,
  DB_LoadAllPlayer = 198,
  DB_LoadAllPlayerRs = 199,
  DB_LoadPlayer = 200,
  DB_LoadPlayerRs = 201,
  DB_SaveToDB = 202,
  DB_SaveToDBRs = 203,
  DB_QueryPlayer = 204,
  DB_QueryPlayerRs = 205,
  DB_CreatePlayer = 206,
  DB_CreatePlayerRs = 207,
  DB_SavePlayer = 208,
  DB_SavePlayerRs = 209,
  C2L_AccountCheck = 1000,
  C2L_AccountCheckRs = 1001,
  L2DB_QueryPlayerList = 1010,
  L2DB_QueryPlayerListRs = 1011,
  L2C_PlayerList = 1012,
  L2DB_CreatePlayer = 1016,
  L2DB_CreatePlayerRs = 1017,
  C2L_SelectPlayer = 1018,
  C2L_SelectPlayerRs = 1019,
  L2C_GameToken = 1024,
  C2S_PlayerLogin = 1030,
  S2C_PlayerLoginRs = 1031,
  C2S_PlayerCreate = 1032,
  S2C_PlayerCreateRs = 1033,
  C2G_LoginByToken = 1100,
  C2G_LoginByTokenRs = 1101,
  G2DB_QueryPlayer = 1104,
  G2DB_QueryPlayerRs = 1105,
  G2C_SyncPlayer = 1106,
  G2M_RequestWorld = 1108,
  G2S_CreateWorld = 1109,
  MI_Teleport = 1110,
  MI_TeleportAfter = 1111,
  G2S_SyncPlayer = 1112,
  G2S_RequestSyncPlayer = 1113,
  G2DB_SavePlayer = 1114,
  G2S_RemovePlayer = 1115,
  C2S_EnterWorld = 1116,
  G2M_QueryDungeonBySn = 1117,
  G2M_QueryDungeonBySnRs = 1118,
  S2G_DestoryWorld = 1119,
  S2C_SyncWorld = 1120,
  C2S_EnterHome = 1121,
  C2S_QueryWorldData = 1122,
  S2C_QueryWorldDataRs = 1123,
  C2S_WorldAction = 1126,
  S2C_WorldAction = 1127,
  S2C_SyncWorldAction = 1128,
  G2DB_QueryAllPlayerName = 1140,
  G2DB_QueryAllPlayerNameRs = 1141,
  C2S_AddExp = 1202,
  S2C_AddExpRs = 1203,
  C2S_Dungeon = 1204,
  S2C_DungeonRs = 1205,
  C2S_Chat = 1206,
  S2C_ChatRs = 1207,
  C2S_GetChatRecord = 1208,
  S2C_GetChatRecordRs = 1209,
  C2S_GetFriendList = 1210,
  S2C_GetFriendListRs = 1211,
  C2S_AddFriend = 1212,
  S2C_AddFriendRs = 1213,
  C2S_DelFriend = 1214,
  S2C_DelFriendRs = 1215,
  C2S_RefresFriend = 1216,
  S2C_RefresFriendRs = 1217,
  S2C_SyncChat = 1234,
  C2S_GetTargetInfo = 1235,
  S2C_GetTargetInfoRs = 1236,
  C2S_Mute = 1237,
  S2C_MuteRs = 1238,
  MI_Mute = 1239,
  C2S_JoinGuild = 1240,
  S2C_JoinGuildRs = 1241,
  C2S_QuitGuild = 1242,
  S2C_QuitGuildRs = 1243,
  C2S_JoinTeam = 1244,
  S2C_JoinTeamRs = 1245,
  C2S_QuitTeam = 1246,
  S2C_QuitTeamRs = 1247,
  MI_ChatSync = 1250,
  MI_ChatBroadcast = 1251,
  MI_GetChatRecord = 1252,
  MI_GetChatRecordRs = 1253,
  MI_BroadcastLogin = 1254,
  MI_GetTargetInfo = 1255,
  MI_GetTargetInfoRs = 1256,
  C2S_RequestChangeTeam = 1300,
  S2C_ReseponseChangeTeam = 1301,
  C2S_RequestAddItem = 1400,
  S2C_PushItemChange = 1401,
  C2S_RequestUseItem = 1402,
  S2C_ResponseUseItem = 1403,
  C2S_RequestSortBag = 1404,
  S2C_ResponseSortBag = 1405,
  C2S_RequestSellItem = 1406,
  S2C_ResponseSellItem = 1407,
  C2S_RequestGachaPull = 1408,
  S2C_ResponseGachaPull = 1409,
  S2C_EnterWorld = 1501,
  S2G_SyncPlayer = 1502,
  S2C_RoleAppear = 1503,
  S2C_RoleDisAppear = 1504,
  C2S_MoveByRotation = 1505,
  S2C_MoveByRotation = 1506,
  S2C_SyncPlayerProperty = 1507,
  S2C_CardLevelUp = 1600,
  S2C_CardStar = 1601,
  S2C_CardQltUp = 1602,
  S2C_CardInten = 1603,
  S2C_CardSkillLvUp = 1604,
  C2S_CardLevelUp = 1620,
  C2S_CardStar = 1621,
  C2S_CardQltUp = 1622,
  C2S_CardSkillLvUp = 1624,
  C2S_BattleCreate = 1701,
  C2S_BattleJoin = 1702,
  C2S_BattleView = 1703,
  C2S_BattleActionList = 1704,
  C2S_BattleBegin = 1705,
  C2S_BattleEnd = 1706,
  S2C_BattleRs = 1720,
  S2C_BattleSyncTeam = 1721,
  S2C_BattleActionList = 1722,
  S2C_BattleBegin = 1723,
  S2C_BattleEnd = 1724,
  C2S_ReqeustSkillLvUp = 1801,
  S2C_ResponseSkillLvUp = 1802,
  C2S_ReqeustEquipmentLvUp = 1803,
  S2C_ResponseEquipmentLvUp = 1804,
  MI_BroadcastCreateWorld = 2001,
  MI_BroadcastCreateWorldProxy = 2002,
  MI_RequestCreateWorldProxy = 2003,
  MI_WorldSyncToGather = 3001,
  MI_WorldProxySyncToGather = 3002,
  MI_RobotSyncState = 5001,
  MI_RobotCreate = 5002,
  MI_HttpBegin = 10000,
  MI_HttpInnerResponse = 10001,
  MI_HttpRequestBad = 10002,
  MI_HttpRequestLogin = 10003,
  MI_HttpRequestFix = 10004,
  MI_HttpEnd = 10499,
  MI_HttpOuterRequest = 10500,
  MI_HttpOuterResponse = 10501,
  MI_CmdThread = 20001,
  MI_CmdApp = 20002,
  MI_CmdWorldProxy = 20003,
  MI_CmdWorld = 20004,
  MI_CmdCreate = 20005,
  MI_CmdEfficiency = 20006,
  MI_Efficiency = 20007,
  MI_CmdSyncPlayer = 20008,
  MsgId_INT_MIN_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::min(),
  MsgId_INT_MAX_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::max()
};
bool MsgId_IsValid(int value);
constexpr MsgId MsgId_MIN = MsgId_None;
constexpr MsgId MsgId_MAX = MI_CmdSyncPlayer;
constexpr int MsgId_ARRAYSIZE = MsgId_MAX + 1;

const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* MsgId_descriptor();
template<typename T>
inline const std::string& MsgId_Name(T enum_t_value) {
  static_assert(::std::is_same<T, MsgId>::value ||
    ::std::is_integral<T>::value,
    "Incorrect type passed to function MsgId_Name.");
  return ::PROTOBUF_NAMESPACE_ID::internal::NameOfEnum(
    MsgId_descriptor(), enum_t_value);
}
inline bool MsgId_Parse(
    const std::string& name, MsgId* value) {
  return ::PROTOBUF_NAMESPACE_ID::internal::ParseNamedEnum<MsgId>(
    MsgId_descriptor(), name, value);
}
// ===================================================================


// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace Proto

PROTOBUF_NAMESPACE_OPEN

template <> struct is_proto_enum< ::Proto::MsgTypeId> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::Proto::MsgTypeId>() {
  return ::Proto::MsgTypeId_descriptor();
}
template <> struct is_proto_enum< ::Proto::MsgId> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::Proto::MsgId>() {
  return ::Proto::MsgId_descriptor();
}

PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_proto_5fid_2eproto