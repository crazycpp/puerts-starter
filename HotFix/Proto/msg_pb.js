// source: msg.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var db_pb = require('./db_pb.js');
goog.object.extend(proto, db_pb);
goog.exportSymbol('proto.Proto.AccountCheck', null, global);
goog.exportSymbol('proto.Proto.AccountCheckReturnCode', null, global);
goog.exportSymbol('proto.Proto.AccountCheckRs', null, global);
goog.exportSymbol('proto.Proto.AddExp', null, global);
goog.exportSymbol('proto.Proto.AddExpRet', null, global);
goog.exportSymbol('proto.Proto.AddFriend', null, global);
goog.exportSymbol('proto.Proto.AddFriendRet', null, global);
goog.exportSymbol('proto.Proto.AddItem', null, global);
goog.exportSymbol('proto.Proto.AddItemRet', null, global);
goog.exportSymbol('proto.Proto.AppInfoListSync', null, global);
goog.exportSymbol('proto.Proto.AppInfoSync', null, global);
goog.exportSymbol('proto.Proto.AppRegister', null, global);
goog.exportSymbol('proto.Proto.BattleAction', null, global);
goog.exportSymbol('proto.Proto.BattleActionList', null, global);
goog.exportSymbol('proto.Proto.BattleActionType', null, global);
goog.exportSymbol('proto.Proto.BattleBegin', null, global);
goog.exportSymbol('proto.Proto.BattleCreate', null, global);
goog.exportSymbol('proto.Proto.BattleDamage', null, global);
goog.exportSymbol('proto.Proto.BattleEnd', null, global);
goog.exportSymbol('proto.Proto.BattleJoin', null, global);
goog.exportSymbol('proto.Proto.BattleRs', null, global);
goog.exportSymbol('proto.Proto.BattleSyncTeam', null, global);
goog.exportSymbol('proto.Proto.BattleTeam', null, global);
goog.exportSymbol('proto.Proto.BattleView', null, global);
goog.exportSymbol('proto.Proto.BoardcastLogin', null, global);
goog.exportSymbol('proto.Proto.BroadcastCreateWorld', null, global);
goog.exportSymbol('proto.Proto.BroadcastCreateWorldProxy', null, global);
goog.exportSymbol('proto.Proto.Chat', null, global);
goog.exportSymbol('proto.Proto.ChatRet', null, global);
goog.exportSymbol('proto.Proto.CmdApp', null, global);
goog.exportSymbol('proto.Proto.CmdApp.CmdType', null, global);
goog.exportSymbol('proto.Proto.CmdThread', null, global);
goog.exportSymbol('proto.Proto.CmdThread.CmdType', null, global);
goog.exportSymbol('proto.Proto.CreateComponent', null, global);
goog.exportSymbol('proto.Proto.CreateComponentParam', null, global);
goog.exportSymbol('proto.Proto.CreateComponentParam.ParamType', null, global);
goog.exportSymbol('proto.Proto.CreateRetCode', null, global);
goog.exportSymbol('proto.Proto.CreateSystem', null, global);
goog.exportSymbol('proto.Proto.CreateWorld', null, global);
goog.exportSymbol('proto.Proto.DBCreatePlayer', null, global);
goog.exportSymbol('proto.Proto.DBCreatePlayerRet', null, global);
goog.exportSymbol('proto.Proto.DBQueryPlayer', null, global);
goog.exportSymbol('proto.Proto.DBQueryPlayerRet', null, global);
goog.exportSymbol('proto.Proto.DBQueryWorld', null, global);
goog.exportSymbol('proto.Proto.DBQueryWorldRet', null, global);
goog.exportSymbol('proto.Proto.DBSaveList', null, global);
goog.exportSymbol('proto.Proto.DBSaveListRet', null, global);
goog.exportSymbol('proto.Proto.DBSavePlayer', null, global);
goog.exportSymbol('proto.Proto.DBSavePlayerRet', null, global);
goog.exportSymbol('proto.Proto.DBSaveWorld', null, global);
goog.exportSymbol('proto.Proto.DBSaveWorldRet', null, global);
goog.exportSymbol('proto.Proto.DelFriend', null, global);
goog.exportSymbol('proto.Proto.DelFriendRet', null, global);
goog.exportSymbol('proto.Proto.DestoryWorld', null, global);
goog.exportSymbol('proto.Proto.Dungeon', null, global);
goog.exportSymbol('proto.Proto.DungeonRs', null, global);
goog.exportSymbol('proto.Proto.ESaveMode', null, global);
goog.exportSymbol('proto.Proto.Efficiency', null, global);
goog.exportSymbol('proto.Proto.EnterHome', null, global);
goog.exportSymbol('proto.Proto.EnterWorld', null, global);
goog.exportSymbol('proto.Proto.GameToken', null, global);
goog.exportSymbol('proto.Proto.GameToken.ReturnCode', null, global);
goog.exportSymbol('proto.Proto.GetChatRecord', null, global);
goog.exportSymbol('proto.Proto.GetChatRecordRet', null, global);
goog.exportSymbol('proto.Proto.GetFriendList', null, global);
goog.exportSymbol('proto.Proto.GetFriendListRet', null, global);
goog.exportSymbol('proto.Proto.GetTargetInfo', null, global);
goog.exportSymbol('proto.Proto.GetTargetInfoRet', null, global);
goog.exportSymbol('proto.Proto.Http', null, global);
goog.exportSymbol('proto.Proto.ItemChange', null, global);
goog.exportSymbol('proto.Proto.JoinGuild', null, global);
goog.exportSymbol('proto.Proto.JoinGuildRet', null, global);
goog.exportSymbol('proto.Proto.JoinTeam', null, global);
goog.exportSymbol('proto.Proto.JoinTeamRet', null, global);
goog.exportSymbol('proto.Proto.LoadAllAccount', null, global);
goog.exportSymbol('proto.Proto.LoadAllAccountRet', null, global);
goog.exportSymbol('proto.Proto.LoadAllPlayer', null, global);
goog.exportSymbol('proto.Proto.LoadAllPlayerRet', null, global);
goog.exportSymbol('proto.Proto.LoadPlayer', null, global);
goog.exportSymbol('proto.Proto.LoadPlayerRet', null, global);
goog.exportSymbol('proto.Proto.LoginByToken', null, global);
goog.exportSymbol('proto.Proto.LoginByTokenRs', null, global);
goog.exportSymbol('proto.Proto.LoginByTokenRs.ReturnCode', null, global);
goog.exportSymbol('proto.Proto.LoginHttpReturnCode', null, global);
goog.exportSymbol('proto.Proto.LoginRetCode', null, global);
goog.exportSymbol('proto.Proto.MoveByRotation', null, global);
goog.exportSymbol('proto.Proto.Mute', null, global);
goog.exportSymbol('proto.Proto.MuteRet', null, global);
goog.exportSymbol('proto.Proto.NetworkConnect', null, global);
goog.exportSymbol('proto.Proto.NetworkDisconnect', null, global);
goog.exportSymbol('proto.Proto.NullMsg', null, global);
goog.exportSymbol('proto.Proto.PlayerCreate', null, global);
goog.exportSymbol('proto.Proto.PlayerCreateRet', null, global);
goog.exportSymbol('proto.Proto.PlayerList', null, global);
goog.exportSymbol('proto.Proto.PlayerLittle', null, global);
goog.exportSymbol('proto.Proto.PlayerLogin', null, global);
goog.exportSymbol('proto.Proto.PlayerLoginRet', null, global);
goog.exportSymbol('proto.Proto.PushItemChange', null, global);
goog.exportSymbol('proto.Proto.PushItemChange.ChangeShow', null, global);
goog.exportSymbol('proto.Proto.QueryAllPlayerName', null, global);
goog.exportSymbol('proto.Proto.QueryAllPlayerNameRet', null, global);
goog.exportSymbol('proto.Proto.QueryDungeonBySn', null, global);
goog.exportSymbol('proto.Proto.QueryDungeonBySnRs', null, global);
goog.exportSymbol('proto.Proto.QueryDungeonBySnRs.ReturnCode', null, global);
goog.exportSymbol('proto.Proto.QueryPlayer', null, global);
goog.exportSymbol('proto.Proto.QueryPlayerList', null, global);
goog.exportSymbol('proto.Proto.QueryPlayerRs', null, global);
goog.exportSymbol('proto.Proto.QueryWorldData', null, global);
goog.exportSymbol('proto.Proto.QueryWorldDataRet', null, global);
goog.exportSymbol('proto.Proto.QuitGuild', null, global);
goog.exportSymbol('proto.Proto.QuitGuildRet', null, global);
goog.exportSymbol('proto.Proto.QuitTeam', null, global);
goog.exportSymbol('proto.Proto.QuitTeamRet', null, global);
goog.exportSymbol('proto.Proto.RefreshFriend', null, global);
goog.exportSymbol('proto.Proto.RefreshFriendRet', null, global);
goog.exportSymbol('proto.Proto.RemoveComponent', null, global);
goog.exportSymbol('proto.Proto.RemovePlayer', null, global);
goog.exportSymbol('proto.Proto.ReqCardLevelUp', null, global);
goog.exportSymbol('proto.Proto.ReqCardQlt', null, global);
goog.exportSymbol('proto.Proto.ReqCardSkillLvUp', null, global);
goog.exportSymbol('proto.Proto.ReqCardStar', null, global);
goog.exportSymbol('proto.Proto.ReqeustEquipmentLvUp', null, global);
goog.exportSymbol('proto.Proto.ReqeustSkillLvUp', null, global);
goog.exportSymbol('proto.Proto.RequestChangeTeam', null, global);
goog.exportSymbol('proto.Proto.RequestCreateWorldProxy', null, global);
goog.exportSymbol('proto.Proto.RequestGachaPull', null, global);
goog.exportSymbol('proto.Proto.RequestSellItem', null, global);
goog.exportSymbol('proto.Proto.RequestSortBag', null, global);
goog.exportSymbol('proto.Proto.RequestSyncPlayer', null, global);
goog.exportSymbol('proto.Proto.RequestUseItem', null, global);
goog.exportSymbol('proto.Proto.RequestWorld', null, global);
goog.exportSymbol('proto.Proto.ResCardLevel', null, global);
goog.exportSymbol('proto.Proto.ResCardLevel.ResCode', null, global);
goog.exportSymbol('proto.Proto.ResCardQlt', null, global);
goog.exportSymbol('proto.Proto.ResCardQlt.ResQltCode', null, global);
goog.exportSymbol('proto.Proto.ResCardSkillLvUp', null, global);
goog.exportSymbol('proto.Proto.ResCardStar', null, global);
goog.exportSymbol('proto.Proto.ResCardStar.StarResCode', null, global);
goog.exportSymbol('proto.Proto.ResInten', null, global);
goog.exportSymbol('proto.Proto.ResInten.ResIntenCode', null, global);
goog.exportSymbol('proto.Proto.ReseponseChangeTeam', null, global);
goog.exportSymbol('proto.Proto.ResponseEquipmentLvUp', null, global);
goog.exportSymbol('proto.Proto.ResponseGachaPull', null, global);
goog.exportSymbol('proto.Proto.ResponseSellItem', null, global);
goog.exportSymbol('proto.Proto.ResponseSkillLvUp', null, global);
goog.exportSymbol('proto.Proto.ResponseSortBag', null, global);
goog.exportSymbol('proto.Proto.ResponseUseItem', null, global);
goog.exportSymbol('proto.Proto.ReuqestGMAddItem', null, global);
goog.exportSymbol('proto.Proto.RobotCreate', null, global);
goog.exportSymbol('proto.Proto.RobotState', null, global);
goog.exportSymbol('proto.Proto.RobotSyncState', null, global);
goog.exportSymbol('proto.Proto.Role', null, global);
goog.exportSymbol('proto.Proto.RoleAppear', null, global);
goog.exportSymbol('proto.Proto.RoleDisAppear', null, global);
goog.exportSymbol('proto.Proto.RsCode', null, global);
goog.exportSymbol('proto.Proto.STChatInfo', null, global);
goog.exportSymbol('proto.Proto.STFriendInfo', null, global);
goog.exportSymbol('proto.Proto.STPlayerSnName', null, global);
goog.exportSymbol('proto.Proto.SavePlayer', null, global);
goog.exportSymbol('proto.Proto.SelectPlayer', null, global);
goog.exportSymbol('proto.Proto.SelectPlayerRs', null, global);
goog.exportSymbol('proto.Proto.SelectPlayerRs.SelectPlayerReturnCode', null, global);
goog.exportSymbol('proto.Proto.SyncChat', null, global);
goog.exportSymbol('proto.Proto.SyncPlayer', null, global);
goog.exportSymbol('proto.Proto.SyncPlayerProperty', null, global);
goog.exportSymbol('proto.Proto.SyncPlayerProperty.PlayerPropertyType', null, global);
goog.exportSymbol('proto.Proto.SyncPlayerPropertyList', null, global);
goog.exportSymbol('proto.Proto.SyncWorldAction', null, global);
goog.exportSymbol('proto.Proto.SyncWorldData', null, global);
goog.exportSymbol('proto.Proto.Tag', null, global);
goog.exportSymbol('proto.Proto.TagValue', null, global);
goog.exportSymbol('proto.Proto.Teleport', null, global);
goog.exportSymbol('proto.Proto.TeleportAfter', null, global);
goog.exportSymbol('proto.Proto.TokenInfo', null, global);
goog.exportSymbol('proto.Proto.WorldAction', null, global);
goog.exportSymbol('proto.Proto.WorldActionRet', null, global);
goog.exportSymbol('proto.Proto.WorldProxySyncToGather', null, global);
goog.exportSymbol('proto.Proto.WorldSyncToGather', null, global);
goog.exportSymbol('proto.Proto.eChatChannel', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.NullMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.NullMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.NullMsg.displayName = 'proto.Proto.NullMsg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.CmdThread = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.CmdThread, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.CmdThread.displayName = 'proto.Proto.CmdThread';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.CmdApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.CmdApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.CmdApp.displayName = 'proto.Proto.CmdApp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.Efficiency = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.Efficiency, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.Efficiency.displayName = 'proto.Proto.Efficiency';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.AppRegister = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.AppRegister, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.AppRegister.displayName = 'proto.Proto.AppRegister';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.AppInfoSync = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.AppInfoSync, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.AppInfoSync.displayName = 'proto.Proto.AppInfoSync';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.AppInfoListSync = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.AppInfoListSync.repeatedFields_, null);
};
goog.inherits(proto.Proto.AppInfoListSync, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.AppInfoListSync.displayName = 'proto.Proto.AppInfoListSync';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.NetworkDisconnect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.NetworkDisconnect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.NetworkDisconnect.displayName = 'proto.Proto.NetworkDisconnect';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.TagValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.TagValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.TagValue.displayName = 'proto.Proto.TagValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.Tag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.Tag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.Tag.displayName = 'proto.Proto.Tag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.NetworkConnect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.NetworkConnect.repeatedFields_, null);
};
goog.inherits(proto.Proto.NetworkConnect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.NetworkConnect.displayName = 'proto.Proto.NetworkConnect';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.Http = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.Http, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.Http.displayName = 'proto.Proto.Http';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.CreateComponentParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.CreateComponentParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.CreateComponentParam.displayName = 'proto.Proto.CreateComponentParam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.CreateComponent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.CreateComponent.repeatedFields_, null);
};
goog.inherits(proto.Proto.CreateComponent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.CreateComponent.displayName = 'proto.Proto.CreateComponent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RemoveComponent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RemoveComponent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RemoveComponent.displayName = 'proto.Proto.RemoveComponent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.CreateSystem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.CreateSystem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.CreateSystem.displayName = 'proto.Proto.CreateSystem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.AccountCheck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.AccountCheck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.AccountCheck.displayName = 'proto.Proto.AccountCheck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.AccountCheckRs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.AccountCheckRs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.AccountCheckRs.displayName = 'proto.Proto.AccountCheckRs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RobotState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RobotState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RobotState.displayName = 'proto.Proto.RobotState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RobotSyncState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.RobotSyncState.repeatedFields_, null);
};
goog.inherits(proto.Proto.RobotSyncState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RobotSyncState.displayName = 'proto.Proto.RobotSyncState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RobotCreate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RobotCreate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RobotCreate.displayName = 'proto.Proto.RobotCreate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.PlayerLittle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.PlayerLittle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.PlayerLittle.displayName = 'proto.Proto.PlayerLittle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.PlayerList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.PlayerList.repeatedFields_, null);
};
goog.inherits(proto.Proto.PlayerList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.PlayerList.displayName = 'proto.Proto.PlayerList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QueryPlayerList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QueryPlayerList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QueryPlayerList.displayName = 'proto.Proto.QueryPlayerList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QueryPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QueryPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QueryPlayer.displayName = 'proto.Proto.QueryPlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QueryPlayerRs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QueryPlayerRs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QueryPlayerRs.displayName = 'proto.Proto.QueryPlayerRs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.LoadAllAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.LoadAllAccount.repeatedFields_, null);
};
goog.inherits(proto.Proto.LoadAllAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.LoadAllAccount.displayName = 'proto.Proto.LoadAllAccount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.LoadAllAccountRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.LoadAllAccountRet.repeatedFields_, null);
};
goog.inherits(proto.Proto.LoadAllAccountRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.LoadAllAccountRet.displayName = 'proto.Proto.LoadAllAccountRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.LoadAllPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.LoadAllPlayer.repeatedFields_, null);
};
goog.inherits(proto.Proto.LoadAllPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.LoadAllPlayer.displayName = 'proto.Proto.LoadAllPlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.LoadAllPlayerRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.LoadAllPlayerRet.repeatedFields_, null);
};
goog.inherits(proto.Proto.LoadAllPlayerRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.LoadAllPlayerRet.displayName = 'proto.Proto.LoadAllPlayerRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.LoadPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.LoadPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.LoadPlayer.displayName = 'proto.Proto.LoadPlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.LoadPlayerRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.LoadPlayerRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.LoadPlayerRet.displayName = 'proto.Proto.LoadPlayerRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.PlayerLogin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.PlayerLogin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.PlayerLogin.displayName = 'proto.Proto.PlayerLogin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.PlayerLoginRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.PlayerLoginRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.PlayerLoginRet.displayName = 'proto.Proto.PlayerLoginRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.PlayerCreate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.PlayerCreate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.PlayerCreate.displayName = 'proto.Proto.PlayerCreate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.PlayerCreateRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.PlayerCreateRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.PlayerCreateRet.displayName = 'proto.Proto.PlayerCreateRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.SelectPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.SelectPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.SelectPlayer.displayName = 'proto.Proto.SelectPlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.SelectPlayerRs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.SelectPlayerRs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.SelectPlayerRs.displayName = 'proto.Proto.SelectPlayerRs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.SavePlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.SavePlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.SavePlayer.displayName = 'proto.Proto.SavePlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.WorldSyncToGather = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.WorldSyncToGather, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.WorldSyncToGather.displayName = 'proto.Proto.WorldSyncToGather';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.WorldProxySyncToGather = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.WorldProxySyncToGather, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.WorldProxySyncToGather.displayName = 'proto.Proto.WorldProxySyncToGather';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.GameToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.GameToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.GameToken.displayName = 'proto.Proto.GameToken';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.LoginByToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.LoginByToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.LoginByToken.displayName = 'proto.Proto.LoginByToken';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.LoginByTokenRs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.LoginByTokenRs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.LoginByTokenRs.displayName = 'proto.Proto.LoginByTokenRs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.TokenInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.TokenInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.TokenInfo.displayName = 'proto.Proto.TokenInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.SyncPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.SyncPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.SyncPlayer.displayName = 'proto.Proto.SyncPlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.EnterWorld = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.EnterWorld, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.EnterWorld.displayName = 'proto.Proto.EnterWorld';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.EnterHome = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.EnterHome, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.EnterHome.displayName = 'proto.Proto.EnterHome';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QueryDungeonBySn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QueryDungeonBySn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QueryDungeonBySn.displayName = 'proto.Proto.QueryDungeonBySn';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QueryDungeonBySnRs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QueryDungeonBySnRs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QueryDungeonBySnRs.displayName = 'proto.Proto.QueryDungeonBySnRs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RequestWorld = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RequestWorld, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RequestWorld.displayName = 'proto.Proto.RequestWorld';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.CreateWorld = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.CreateWorld, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.CreateWorld.displayName = 'proto.Proto.CreateWorld';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DestoryWorld = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DestoryWorld, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DestoryWorld.displayName = 'proto.Proto.DestoryWorld';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BroadcastCreateWorld = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.BroadcastCreateWorld, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BroadcastCreateWorld.displayName = 'proto.Proto.BroadcastCreateWorld';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RequestCreateWorldProxy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RequestCreateWorldProxy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RequestCreateWorldProxy.displayName = 'proto.Proto.RequestCreateWorldProxy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BroadcastCreateWorldProxy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.BroadcastCreateWorldProxy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BroadcastCreateWorldProxy.displayName = 'proto.Proto.BroadcastCreateWorldProxy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QueryWorldData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QueryWorldData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QueryWorldData.displayName = 'proto.Proto.QueryWorldData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QueryWorldDataRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QueryWorldDataRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QueryWorldDataRet.displayName = 'proto.Proto.QueryWorldDataRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.SyncWorldData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.SyncWorldData.repeatedFields_, null);
};
goog.inherits(proto.Proto.SyncWorldData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.SyncWorldData.displayName = 'proto.Proto.SyncWorldData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.WorldAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.WorldAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.WorldAction.displayName = 'proto.Proto.WorldAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.WorldActionRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.WorldActionRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.WorldActionRet.displayName = 'proto.Proto.WorldActionRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.SyncWorldAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.SyncWorldAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.SyncWorldAction.displayName = 'proto.Proto.SyncWorldAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RemovePlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RemovePlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RemovePlayer.displayName = 'proto.Proto.RemovePlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RequestSyncPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RequestSyncPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RequestSyncPlayer.displayName = 'proto.Proto.RequestSyncPlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.Role = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.Role, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.Role.displayName = 'proto.Proto.Role';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RoleAppear = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.RoleAppear.repeatedFields_, null);
};
goog.inherits(proto.Proto.RoleAppear, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RoleAppear.displayName = 'proto.Proto.RoleAppear';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RoleDisAppear = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RoleDisAppear, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RoleDisAppear.displayName = 'proto.Proto.RoleDisAppear';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.Teleport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.Teleport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.Teleport.displayName = 'proto.Proto.Teleport';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.TeleportAfter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.TeleportAfter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.TeleportAfter.displayName = 'proto.Proto.TeleportAfter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.MoveByRotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.MoveByRotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.MoveByRotation.displayName = 'proto.Proto.MoveByRotation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.AddItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.AddItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.AddItem.displayName = 'proto.Proto.AddItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.AddItemRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.AddItemRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.AddItemRet.displayName = 'proto.Proto.AddItemRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.AddExp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.AddExp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.AddExp.displayName = 'proto.Proto.AddExp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.AddExpRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.AddExpRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.AddExpRet.displayName = 'proto.Proto.AddExpRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.Dungeon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.Dungeon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.Dungeon.displayName = 'proto.Proto.Dungeon';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DungeonRs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.DungeonRs.repeatedFields_, null);
};
goog.inherits(proto.Proto.DungeonRs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DungeonRs.displayName = 'proto.Proto.DungeonRs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.Chat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.Chat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.Chat.displayName = 'proto.Proto.Chat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ChatRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ChatRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ChatRet.displayName = 'proto.Proto.ChatRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.SyncChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.SyncChat.repeatedFields_, null);
};
goog.inherits(proto.Proto.SyncChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.SyncChat.displayName = 'proto.Proto.SyncChat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.GetChatRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.GetChatRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.GetChatRecord.displayName = 'proto.Proto.GetChatRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.STChatInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.STChatInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.STChatInfo.displayName = 'proto.Proto.STChatInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.GetChatRecordRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.GetChatRecordRet.repeatedFields_, null);
};
goog.inherits(proto.Proto.GetChatRecordRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.GetChatRecordRet.displayName = 'proto.Proto.GetChatRecordRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QueryAllPlayerName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QueryAllPlayerName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QueryAllPlayerName.displayName = 'proto.Proto.QueryAllPlayerName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.STPlayerSnName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.STPlayerSnName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.STPlayerSnName.displayName = 'proto.Proto.STPlayerSnName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QueryAllPlayerNameRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.QueryAllPlayerNameRet.repeatedFields_, null);
};
goog.inherits(proto.Proto.QueryAllPlayerNameRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QueryAllPlayerNameRet.displayName = 'proto.Proto.QueryAllPlayerNameRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.Mute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.Mute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.Mute.displayName = 'proto.Proto.Mute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.MuteRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.MuteRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.MuteRet.displayName = 'proto.Proto.MuteRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.GetTargetInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.GetTargetInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.GetTargetInfo.displayName = 'proto.Proto.GetTargetInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.GetTargetInfoRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.GetTargetInfoRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.GetTargetInfoRet.displayName = 'proto.Proto.GetTargetInfoRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BoardcastLogin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.BoardcastLogin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BoardcastLogin.displayName = 'proto.Proto.BoardcastLogin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.STFriendInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.STFriendInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.STFriendInfo.displayName = 'proto.Proto.STFriendInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.GetFriendList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.GetFriendList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.GetFriendList.displayName = 'proto.Proto.GetFriendList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.GetFriendListRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.GetFriendListRet.repeatedFields_, null);
};
goog.inherits(proto.Proto.GetFriendListRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.GetFriendListRet.displayName = 'proto.Proto.GetFriendListRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.AddFriend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.AddFriend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.AddFriend.displayName = 'proto.Proto.AddFriend';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.AddFriendRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.AddFriendRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.AddFriendRet.displayName = 'proto.Proto.AddFriendRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DelFriend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DelFriend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DelFriend.displayName = 'proto.Proto.DelFriend';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DelFriendRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DelFriendRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DelFriendRet.displayName = 'proto.Proto.DelFriendRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RefreshFriend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RefreshFriend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RefreshFriend.displayName = 'proto.Proto.RefreshFriend';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RefreshFriendRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.RefreshFriendRet.repeatedFields_, null);
};
goog.inherits(proto.Proto.RefreshFriendRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RefreshFriendRet.displayName = 'proto.Proto.RefreshFriendRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.JoinGuild = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.JoinGuild, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.JoinGuild.displayName = 'proto.Proto.JoinGuild';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.JoinGuildRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.JoinGuildRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.JoinGuildRet.displayName = 'proto.Proto.JoinGuildRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QuitGuild = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QuitGuild, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QuitGuild.displayName = 'proto.Proto.QuitGuild';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QuitGuildRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QuitGuildRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QuitGuildRet.displayName = 'proto.Proto.QuitGuildRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.JoinTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.JoinTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.JoinTeam.displayName = 'proto.Proto.JoinTeam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.JoinTeamRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.JoinTeamRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.JoinTeamRet.displayName = 'proto.Proto.JoinTeamRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QuitTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QuitTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QuitTeam.displayName = 'proto.Proto.QuitTeam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.QuitTeamRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.QuitTeamRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.QuitTeamRet.displayName = 'proto.Proto.QuitTeamRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.SyncPlayerProperty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.SyncPlayerProperty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.SyncPlayerProperty.displayName = 'proto.Proto.SyncPlayerProperty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.SyncPlayerPropertyList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.SyncPlayerPropertyList.repeatedFields_, null);
};
goog.inherits(proto.Proto.SyncPlayerPropertyList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.SyncPlayerPropertyList.displayName = 'proto.Proto.SyncPlayerPropertyList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RequestChangeTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.RequestChangeTeam.repeatedFields_, null);
};
goog.inherits(proto.Proto.RequestChangeTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RequestChangeTeam.displayName = 'proto.Proto.RequestChangeTeam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ReseponseChangeTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.ReseponseChangeTeam.repeatedFields_, null);
};
goog.inherits(proto.Proto.ReseponseChangeTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ReseponseChangeTeam.displayName = 'proto.Proto.ReseponseChangeTeam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ReqCardLevelUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.ReqCardLevelUp.repeatedFields_, null);
};
goog.inherits(proto.Proto.ReqCardLevelUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ReqCardLevelUp.displayName = 'proto.Proto.ReqCardLevelUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ReqCardStar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.ReqCardStar.repeatedFields_, null);
};
goog.inherits(proto.Proto.ReqCardStar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ReqCardStar.displayName = 'proto.Proto.ReqCardStar';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ReqCardQlt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.ReqCardQlt.repeatedFields_, null);
};
goog.inherits(proto.Proto.ReqCardQlt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ReqCardQlt.displayName = 'proto.Proto.ReqCardQlt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ResCardLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ResCardLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ResCardLevel.displayName = 'proto.Proto.ResCardLevel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ResCardStar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ResCardStar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ResCardStar.displayName = 'proto.Proto.ResCardStar';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ResCardQlt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ResCardQlt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ResCardQlt.displayName = 'proto.Proto.ResCardQlt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ResInten = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ResInten, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ResInten.displayName = 'proto.Proto.ResInten';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ReuqestGMAddItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ReuqestGMAddItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ReuqestGMAddItem.displayName = 'proto.Proto.ReuqestGMAddItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ItemChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ItemChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ItemChange.displayName = 'proto.Proto.ItemChange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.PushItemChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.PushItemChange.repeatedFields_, null);
};
goog.inherits(proto.Proto.PushItemChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.PushItemChange.displayName = 'proto.Proto.PushItemChange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.PushItemChange.ChangeShow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.PushItemChange.ChangeShow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.PushItemChange.ChangeShow.displayName = 'proto.Proto.PushItemChange.ChangeShow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RequestUseItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RequestUseItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RequestUseItem.displayName = 'proto.Proto.RequestUseItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ResponseUseItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ResponseUseItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ResponseUseItem.displayName = 'proto.Proto.ResponseUseItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RequestSortBag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RequestSortBag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RequestSortBag.displayName = 'proto.Proto.RequestSortBag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ResponseSortBag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.ResponseSortBag.repeatedFields_, null);
};
goog.inherits(proto.Proto.ResponseSortBag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ResponseSortBag.displayName = 'proto.Proto.ResponseSortBag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RequestSellItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RequestSellItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RequestSellItem.displayName = 'proto.Proto.RequestSellItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ResponseSellItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ResponseSellItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ResponseSellItem.displayName = 'proto.Proto.ResponseSellItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.RequestGachaPull = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.RequestGachaPull, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.RequestGachaPull.displayName = 'proto.Proto.RequestGachaPull';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ResponseGachaPull = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.ResponseGachaPull.repeatedFields_, null);
};
goog.inherits(proto.Proto.ResponseGachaPull, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ResponseGachaPull.displayName = 'proto.Proto.ResponseGachaPull';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBQueryPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DBQueryPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBQueryPlayer.displayName = 'proto.Proto.DBQueryPlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBQueryPlayerRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DBQueryPlayerRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBQueryPlayerRet.displayName = 'proto.Proto.DBQueryPlayerRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBCreatePlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DBCreatePlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBCreatePlayer.displayName = 'proto.Proto.DBCreatePlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBCreatePlayerRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DBCreatePlayerRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBCreatePlayerRet.displayName = 'proto.Proto.DBCreatePlayerRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBSavePlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DBSavePlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBSavePlayer.displayName = 'proto.Proto.DBSavePlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBSavePlayerRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DBSavePlayerRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBSavePlayerRet.displayName = 'proto.Proto.DBSavePlayerRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBSaveList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DBSaveList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBSaveList.displayName = 'proto.Proto.DBSaveList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBSaveListRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.DBSaveListRet.repeatedFields_, null);
};
goog.inherits(proto.Proto.DBSaveListRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBSaveListRet.displayName = 'proto.Proto.DBSaveListRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBSaveWorld = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DBSaveWorld, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBSaveWorld.displayName = 'proto.Proto.DBSaveWorld';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBSaveWorldRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DBSaveWorldRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBSaveWorldRet.displayName = 'proto.Proto.DBSaveWorldRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBQueryWorld = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DBQueryWorld, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBQueryWorld.displayName = 'proto.Proto.DBQueryWorld';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.DBQueryWorldRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.DBQueryWorldRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.DBQueryWorldRet.displayName = 'proto.Proto.DBQueryWorldRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BattleDamage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.BattleDamage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BattleDamage.displayName = 'proto.Proto.BattleDamage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BattleAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.BattleAction.repeatedFields_, null);
};
goog.inherits(proto.Proto.BattleAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BattleAction.displayName = 'proto.Proto.BattleAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BattleActionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.BattleActionList.repeatedFields_, null);
};
goog.inherits(proto.Proto.BattleActionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BattleActionList.displayName = 'proto.Proto.BattleActionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BattleJoin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.BattleJoin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BattleJoin.displayName = 'proto.Proto.BattleJoin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BattleCreate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.BattleCreate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BattleCreate.displayName = 'proto.Proto.BattleCreate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BattleView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.BattleView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BattleView.displayName = 'proto.Proto.BattleView';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BattleRs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.BattleRs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BattleRs.displayName = 'proto.Proto.BattleRs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BattleTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.BattleTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BattleTeam.displayName = 'proto.Proto.BattleTeam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BattleSyncTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Proto.BattleSyncTeam.repeatedFields_, null);
};
goog.inherits(proto.Proto.BattleSyncTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BattleSyncTeam.displayName = 'proto.Proto.BattleSyncTeam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BattleBegin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.BattleBegin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BattleBegin.displayName = 'proto.Proto.BattleBegin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.BattleEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.BattleEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.BattleEnd.displayName = 'proto.Proto.BattleEnd';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ReqeustSkillLvUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ReqeustSkillLvUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ReqeustSkillLvUp.displayName = 'proto.Proto.ReqeustSkillLvUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ResponseSkillLvUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ResponseSkillLvUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ResponseSkillLvUp.displayName = 'proto.Proto.ResponseSkillLvUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ReqeustEquipmentLvUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ReqeustEquipmentLvUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ReqeustEquipmentLvUp.displayName = 'proto.Proto.ReqeustEquipmentLvUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ResponseEquipmentLvUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ResponseEquipmentLvUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ResponseEquipmentLvUp.displayName = 'proto.Proto.ResponseEquipmentLvUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ReqCardSkillLvUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ReqCardSkillLvUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ReqCardSkillLvUp.displayName = 'proto.Proto.ReqCardSkillLvUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Proto.ResCardSkillLvUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Proto.ResCardSkillLvUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Proto.ResCardSkillLvUp.displayName = 'proto.Proto.ResCardSkillLvUp';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.NullMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.NullMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.NullMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.NullMsg.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.NullMsg}
 */
proto.Proto.NullMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.NullMsg;
  return proto.Proto.NullMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.NullMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.NullMsg}
 */
proto.Proto.NullMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.NullMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.NullMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.NullMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.NullMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.CmdThread.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.CmdThread.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.CmdThread} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CmdThread.toObject = function(includeInstance, msg) {
  var f, obj = {
    cmdType: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.CmdThread}
 */
proto.Proto.CmdThread.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.CmdThread;
  return proto.Proto.CmdThread.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.CmdThread} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.CmdThread}
 */
proto.Proto.CmdThread.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.CmdThread.CmdType} */ (reader.readEnum());
      msg.setCmdType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.CmdThread.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.CmdThread.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.CmdThread} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CmdThread.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCmdType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.CmdThread.CmdType = {
  ENTITY: 0,
  POOL: 1,
  CONNECT: 2
};

/**
 * optional CmdType cmd_type = 1;
 * @return {!proto.Proto.CmdThread.CmdType}
 */
proto.Proto.CmdThread.prototype.getCmdType = function() {
  return /** @type {!proto.Proto.CmdThread.CmdType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.CmdThread.CmdType} value
 * @return {!proto.Proto.CmdThread} returns this
 */
proto.Proto.CmdThread.prototype.setCmdType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.CmdApp.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.CmdApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.CmdApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CmdApp.toObject = function(includeInstance, msg) {
  var f, obj = {
    cmdType: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.CmdApp}
 */
proto.Proto.CmdApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.CmdApp;
  return proto.Proto.CmdApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.CmdApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.CmdApp}
 */
proto.Proto.CmdApp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.CmdApp.CmdType} */ (reader.readEnum());
      msg.setCmdType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.CmdApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.CmdApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.CmdApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CmdApp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCmdType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.CmdApp.CmdType = {
  INFO: 0
};

/**
 * optional CmdType cmd_type = 1;
 * @return {!proto.Proto.CmdApp.CmdType}
 */
proto.Proto.CmdApp.prototype.getCmdType = function() {
  return /** @type {!proto.Proto.CmdApp.CmdType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.CmdApp.CmdType} value
 * @return {!proto.Proto.CmdApp} returns this
 */
proto.Proto.CmdApp.prototype.setCmdType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.Efficiency.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.Efficiency.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.Efficiency} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Efficiency.toObject = function(includeInstance, msg) {
  var f, obj = {
    threadType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    threadId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.Efficiency}
 */
proto.Proto.Efficiency.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.Efficiency;
  return proto.Proto.Efficiency.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.Efficiency} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.Efficiency}
 */
proto.Proto.Efficiency.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setThreadType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setThreadId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.Efficiency.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.Efficiency.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.Efficiency} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Efficiency.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThreadType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getThreadId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int32 thread_type = 1;
 * @return {number}
 */
proto.Proto.Efficiency.prototype.getThreadType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Efficiency} returns this
 */
proto.Proto.Efficiency.prototype.setThreadType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string thread_id = 2;
 * @return {string}
 */
proto.Proto.Efficiency.prototype.getThreadId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.Efficiency} returns this
 */
proto.Proto.Efficiency.prototype.setThreadId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 time = 3;
 * @return {number}
 */
proto.Proto.Efficiency.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Efficiency} returns this
 */
proto.Proto.Efficiency.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.AppRegister.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.AppRegister.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.AppRegister} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AppRegister.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.AppRegister}
 */
proto.Proto.AppRegister.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.AppRegister;
  return proto.Proto.AppRegister.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.AppRegister} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.AppRegister}
 */
proto.Proto.AppRegister.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.AppRegister.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.AppRegister.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.AppRegister} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AppRegister.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.Proto.AppRegister.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AppRegister} returns this
 */
proto.Proto.AppRegister.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.Proto.AppRegister.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AppRegister} returns this
 */
proto.Proto.AppRegister.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.AppInfoSync.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.AppInfoSync.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.AppInfoSync} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AppInfoSync.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    appType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    online: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.AppInfoSync}
 */
proto.Proto.AppInfoSync.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.AppInfoSync;
  return proto.Proto.AppInfoSync.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.AppInfoSync} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.AppInfoSync}
 */
proto.Proto.AppInfoSync.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAppType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOnline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.AppInfoSync.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.AppInfoSync.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.AppInfoSync} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AppInfoSync.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAppType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOnline();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 app_id = 1;
 * @return {number}
 */
proto.Proto.AppInfoSync.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AppInfoSync} returns this
 */
proto.Proto.AppInfoSync.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 app_type = 2;
 * @return {number}
 */
proto.Proto.AppInfoSync.prototype.getAppType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AppInfoSync} returns this
 */
proto.Proto.AppInfoSync.prototype.setAppType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 online = 3;
 * @return {number}
 */
proto.Proto.AppInfoSync.prototype.getOnline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AppInfoSync} returns this
 */
proto.Proto.AppInfoSync.prototype.setOnline = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.AppInfoListSync.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.AppInfoListSync.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.AppInfoListSync.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.AppInfoListSync} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AppInfoListSync.toObject = function(includeInstance, msg) {
  var f, obj = {
    appsList: jspb.Message.toObjectList(msg.getAppsList(),
    proto.Proto.AppInfoSync.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.AppInfoListSync}
 */
proto.Proto.AppInfoListSync.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.AppInfoListSync;
  return proto.Proto.AppInfoListSync.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.AppInfoListSync} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.AppInfoListSync}
 */
proto.Proto.AppInfoListSync.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Proto.AppInfoSync;
      reader.readMessage(value,proto.Proto.AppInfoSync.deserializeBinaryFromReader);
      msg.addApps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.AppInfoListSync.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.AppInfoListSync.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.AppInfoListSync} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AppInfoListSync.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Proto.AppInfoSync.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AppInfoSync apps = 1;
 * @return {!Array<!proto.Proto.AppInfoSync>}
 */
proto.Proto.AppInfoListSync.prototype.getAppsList = function() {
  return /** @type{!Array<!proto.Proto.AppInfoSync>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.AppInfoSync, 1));
};


/**
 * @param {!Array<!proto.Proto.AppInfoSync>} value
 * @return {!proto.Proto.AppInfoListSync} returns this
*/
proto.Proto.AppInfoListSync.prototype.setAppsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.AppInfoSync=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.AppInfoSync}
 */
proto.Proto.AppInfoListSync.prototype.addApps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.AppInfoSync, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.AppInfoListSync} returns this
 */
proto.Proto.AppInfoListSync.prototype.clearAppsList = function() {
  return this.setAppsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.NetworkDisconnect.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.NetworkDisconnect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.NetworkDisconnect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.NetworkDisconnect.toObject = function(includeInstance, msg) {
  var f, obj = {
    networkType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    socket: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.NetworkDisconnect}
 */
proto.Proto.NetworkDisconnect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.NetworkDisconnect;
  return proto.Proto.NetworkDisconnect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.NetworkDisconnect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.NetworkDisconnect}
 */
proto.Proto.NetworkDisconnect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNetworkType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSocket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.NetworkDisconnect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.NetworkDisconnect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.NetworkDisconnect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.NetworkDisconnect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetworkType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSocket();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 network_type = 1;
 * @return {number}
 */
proto.Proto.NetworkDisconnect.prototype.getNetworkType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.NetworkDisconnect} returns this
 */
proto.Proto.NetworkDisconnect.prototype.setNetworkType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 socket = 2;
 * @return {number}
 */
proto.Proto.NetworkDisconnect.prototype.getSocket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.NetworkDisconnect} returns this
 */
proto.Proto.NetworkDisconnect.prototype.setSocket = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.TagValue.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.TagValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.TagValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.TagValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueInt64: jspb.Message.getFieldWithDefault(msg, 1, 0),
    valueStr: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.TagValue}
 */
proto.Proto.TagValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.TagValue;
  return proto.Proto.TagValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.TagValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.TagValue}
 */
proto.Proto.TagValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValueInt64(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValueStr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.TagValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.TagValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.TagValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.TagValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueInt64();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getValueStr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 value_int64 = 1;
 * @return {number}
 */
proto.Proto.TagValue.prototype.getValueInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.TagValue} returns this
 */
proto.Proto.TagValue.prototype.setValueInt64 = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string value_str = 2;
 * @return {string}
 */
proto.Proto.TagValue.prototype.getValueStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.TagValue} returns this
 */
proto.Proto.TagValue.prototype.setValueStr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.Tag.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.Tag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.Tag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Tag.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tagValue: (f = msg.getTagValue()) && proto.Proto.TagValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.Tag}
 */
proto.Proto.Tag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.Tag;
  return proto.Proto.Tag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.Tag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.Tag}
 */
proto.Proto.Tag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTagType(value);
      break;
    case 2:
      var value = new proto.Proto.TagValue;
      reader.readMessage(value,proto.Proto.TagValue.deserializeBinaryFromReader);
      msg.setTagValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.Tag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.Tag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.Tag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Tag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTagValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Proto.TagValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 tag_type = 1;
 * @return {number}
 */
proto.Proto.Tag.prototype.getTagType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Tag} returns this
 */
proto.Proto.Tag.prototype.setTagType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TagValue tag_value = 2;
 * @return {?proto.Proto.TagValue}
 */
proto.Proto.Tag.prototype.getTagValue = function() {
  return /** @type{?proto.Proto.TagValue} */ (
    jspb.Message.getWrapperField(this, proto.Proto.TagValue, 2));
};


/**
 * @param {?proto.Proto.TagValue|undefined} value
 * @return {!proto.Proto.Tag} returns this
*/
proto.Proto.Tag.prototype.setTagValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.Tag} returns this
 */
proto.Proto.Tag.prototype.clearTagValue = function() {
  return this.setTagValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.Tag.prototype.hasTagValue = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.NetworkConnect.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.NetworkConnect.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.NetworkConnect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.NetworkConnect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.NetworkConnect.toObject = function(includeInstance, msg) {
  var f, obj = {
    networkType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tagList: jspb.Message.toObjectList(msg.getTagList(),
    proto.Proto.Tag.toObject, includeInstance),
    ip: jspb.Message.getFieldWithDefault(msg, 3, ""),
    port: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.NetworkConnect}
 */
proto.Proto.NetworkConnect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.NetworkConnect;
  return proto.Proto.NetworkConnect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.NetworkConnect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.NetworkConnect}
 */
proto.Proto.NetworkConnect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNetworkType(value);
      break;
    case 2:
      var value = new proto.Proto.Tag;
      reader.readMessage(value,proto.Proto.Tag.deserializeBinaryFromReader);
      msg.addTag(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.NetworkConnect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.NetworkConnect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.NetworkConnect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.NetworkConnect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetworkType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTagList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Proto.Tag.serializeBinaryToWriter
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 network_type = 1;
 * @return {number}
 */
proto.Proto.NetworkConnect.prototype.getNetworkType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.NetworkConnect} returns this
 */
proto.Proto.NetworkConnect.prototype.setNetworkType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Tag tag = 2;
 * @return {!Array<!proto.Proto.Tag>}
 */
proto.Proto.NetworkConnect.prototype.getTagList = function() {
  return /** @type{!Array<!proto.Proto.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.Tag, 2));
};


/**
 * @param {!Array<!proto.Proto.Tag>} value
 * @return {!proto.Proto.NetworkConnect} returns this
*/
proto.Proto.NetworkConnect.prototype.setTagList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.Tag}
 */
proto.Proto.NetworkConnect.prototype.addTag = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.Tag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.NetworkConnect} returns this
 */
proto.Proto.NetworkConnect.prototype.clearTagList = function() {
  return this.setTagList([]);
};


/**
 * optional string ip = 3;
 * @return {string}
 */
proto.Proto.NetworkConnect.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.NetworkConnect} returns this
 */
proto.Proto.NetworkConnect.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 port = 4;
 * @return {number}
 */
proto.Proto.NetworkConnect.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.NetworkConnect} returns this
 */
proto.Proto.NetworkConnect.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.Http.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.Http.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.Http} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Http.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: jspb.Message.getFieldWithDefault(msg, 1, ""),
    statusCode: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.Http}
 */
proto.Proto.Http.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.Http;
  return proto.Proto.Http.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.Http} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.Http}
 */
proto.Proto.Http.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatusCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.Http.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.Http.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.Http} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Http.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatusCode();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string body = 1;
 * @return {string}
 */
proto.Proto.Http.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.Http} returns this
 */
proto.Proto.Http.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 status_code = 2;
 * @return {number}
 */
proto.Proto.Http.prototype.getStatusCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Http} returns this
 */
proto.Proto.Http.prototype.setStatusCode = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.CreateComponentParam.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.CreateComponentParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.CreateComponentParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CreateComponentParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    intParam: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stringParam: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uint64Param: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.CreateComponentParam}
 */
proto.Proto.CreateComponentParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.CreateComponentParam;
  return proto.Proto.CreateComponentParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.CreateComponentParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.CreateComponentParam}
 */
proto.Proto.CreateComponentParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.CreateComponentParam.ParamType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntParam(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringParam(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUint64Param(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.CreateComponentParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.CreateComponentParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.CreateComponentParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CreateComponentParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIntParam();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStringParam();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUint64Param();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.CreateComponentParam.ParamType = {
  INT: 0,
  STRING: 1,
  UINT64: 2
};

/**
 * optional ParamType type = 1;
 * @return {!proto.Proto.CreateComponentParam.ParamType}
 */
proto.Proto.CreateComponentParam.prototype.getType = function() {
  return /** @type {!proto.Proto.CreateComponentParam.ParamType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.CreateComponentParam.ParamType} value
 * @return {!proto.Proto.CreateComponentParam} returns this
 */
proto.Proto.CreateComponentParam.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 int_param = 2;
 * @return {number}
 */
proto.Proto.CreateComponentParam.prototype.getIntParam = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.CreateComponentParam} returns this
 */
proto.Proto.CreateComponentParam.prototype.setIntParam = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string string_param = 3;
 * @return {string}
 */
proto.Proto.CreateComponentParam.prototype.getStringParam = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.CreateComponentParam} returns this
 */
proto.Proto.CreateComponentParam.prototype.setStringParam = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 uint64_param = 4;
 * @return {number}
 */
proto.Proto.CreateComponentParam.prototype.getUint64Param = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.CreateComponentParam} returns this
 */
proto.Proto.CreateComponentParam.prototype.setUint64Param = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.CreateComponent.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.CreateComponent.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.CreateComponent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.CreateComponent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CreateComponent.toObject = function(includeInstance, msg) {
  var f, obj = {
    threadType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    className: jspb.Message.getFieldWithDefault(msg, 2, ""),
    paramsList: jspb.Message.toObjectList(msg.getParamsList(),
    proto.Proto.CreateComponentParam.toObject, includeInstance),
    sn: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isToAll: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.CreateComponent}
 */
proto.Proto.CreateComponent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.CreateComponent;
  return proto.Proto.CreateComponent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.CreateComponent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.CreateComponent}
 */
proto.Proto.CreateComponent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setThreadType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassName(value);
      break;
    case 3:
      var value = new proto.Proto.CreateComponentParam;
      reader.readMessage(value,proto.Proto.CreateComponentParam.deserializeBinaryFromReader);
      msg.addParams(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSn(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsToAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.CreateComponent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.CreateComponent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.CreateComponent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CreateComponent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThreadType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getClassName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.Proto.CreateComponentParam.serializeBinaryToWriter
    );
  }
  f = message.getSn();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getIsToAll();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int32 thread_type = 1;
 * @return {number}
 */
proto.Proto.CreateComponent.prototype.getThreadType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.CreateComponent} returns this
 */
proto.Proto.CreateComponent.prototype.setThreadType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string class_name = 2;
 * @return {string}
 */
proto.Proto.CreateComponent.prototype.getClassName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.CreateComponent} returns this
 */
proto.Proto.CreateComponent.prototype.setClassName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated CreateComponentParam params = 3;
 * @return {!Array<!proto.Proto.CreateComponentParam>}
 */
proto.Proto.CreateComponent.prototype.getParamsList = function() {
  return /** @type{!Array<!proto.Proto.CreateComponentParam>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.CreateComponentParam, 3));
};


/**
 * @param {!Array<!proto.Proto.CreateComponentParam>} value
 * @return {!proto.Proto.CreateComponent} returns this
*/
proto.Proto.CreateComponent.prototype.setParamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Proto.CreateComponentParam=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.CreateComponentParam}
 */
proto.Proto.CreateComponent.prototype.addParams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Proto.CreateComponentParam, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.CreateComponent} returns this
 */
proto.Proto.CreateComponent.prototype.clearParamsList = function() {
  return this.setParamsList([]);
};


/**
 * optional uint64 sn = 4;
 * @return {number}
 */
proto.Proto.CreateComponent.prototype.getSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.CreateComponent} returns this
 */
proto.Proto.CreateComponent.prototype.setSn = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool is_to_all = 5;
 * @return {boolean}
 */
proto.Proto.CreateComponent.prototype.getIsToAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.CreateComponent} returns this
 */
proto.Proto.CreateComponent.prototype.setIsToAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RemoveComponent.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RemoveComponent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RemoveComponent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RemoveComponent.toObject = function(includeInstance, msg) {
  var f, obj = {
    sn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RemoveComponent}
 */
proto.Proto.RemoveComponent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RemoveComponent;
  return proto.Proto.RemoveComponent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RemoveComponent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RemoveComponent}
 */
proto.Proto.RemoveComponent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RemoveComponent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RemoveComponent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RemoveComponent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RemoveComponent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 sn = 1;
 * @return {number}
 */
proto.Proto.RemoveComponent.prototype.getSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RemoveComponent} returns this
 */
proto.Proto.RemoveComponent.prototype.setSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.CreateSystem.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.CreateSystem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.CreateSystem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CreateSystem.toObject = function(includeInstance, msg) {
  var f, obj = {
    threadType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    systemName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.CreateSystem}
 */
proto.Proto.CreateSystem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.CreateSystem;
  return proto.Proto.CreateSystem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.CreateSystem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.CreateSystem}
 */
proto.Proto.CreateSystem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setThreadType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSystemName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.CreateSystem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.CreateSystem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.CreateSystem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CreateSystem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThreadType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSystemName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 thread_type = 1;
 * @return {number}
 */
proto.Proto.CreateSystem.prototype.getThreadType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.CreateSystem} returns this
 */
proto.Proto.CreateSystem.prototype.setThreadType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string system_name = 2;
 * @return {string}
 */
proto.Proto.CreateSystem.prototype.getSystemName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.CreateSystem} returns this
 */
proto.Proto.CreateSystem.prototype.setSystemName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.AccountCheck.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.AccountCheck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.AccountCheck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AccountCheck.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    channel: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.AccountCheck}
 */
proto.Proto.AccountCheck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.AccountCheck;
  return proto.Proto.AccountCheck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.AccountCheck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.AccountCheck}
 */
proto.Proto.AccountCheck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.AccountCheck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.AccountCheck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.AccountCheck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AccountCheck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 server_id = 1;
 * @return {number}
 */
proto.Proto.AccountCheck.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AccountCheck} returns this
 */
proto.Proto.AccountCheck.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string channel = 2;
 * @return {string}
 */
proto.Proto.AccountCheck.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.AccountCheck} returns this
 */
proto.Proto.AccountCheck.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.Proto.AccountCheck.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.AccountCheck} returns this
 */
proto.Proto.AccountCheck.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.AccountCheckRs.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.AccountCheckRs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.AccountCheckRs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AccountCheckRs.toObject = function(includeInstance, msg) {
  var f, obj = {
    returnCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.AccountCheckRs}
 */
proto.Proto.AccountCheckRs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.AccountCheckRs;
  return proto.Proto.AccountCheckRs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.AccountCheckRs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.AccountCheckRs}
 */
proto.Proto.AccountCheckRs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.AccountCheckReturnCode} */ (reader.readEnum());
      msg.setReturnCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.AccountCheckRs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.AccountCheckRs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.AccountCheckRs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AccountCheckRs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReturnCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional AccountCheckReturnCode return_code = 1;
 * @return {!proto.Proto.AccountCheckReturnCode}
 */
proto.Proto.AccountCheckRs.prototype.getReturnCode = function() {
  return /** @type {!proto.Proto.AccountCheckReturnCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.AccountCheckReturnCode} value
 * @return {!proto.Proto.AccountCheckRs} returns this
 */
proto.Proto.AccountCheckRs.prototype.setReturnCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RobotState.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RobotState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RobotState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RobotState.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RobotState}
 */
proto.Proto.RobotState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RobotState;
  return proto.Proto.RobotState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RobotState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RobotState}
 */
proto.Proto.RobotState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RobotState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RobotState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RobotState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RobotState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.Proto.RobotState.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.RobotState} returns this
 */
proto.Proto.RobotState.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 state = 2;
 * @return {number}
 */
proto.Proto.RobotState.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RobotState} returns this
 */
proto.Proto.RobotState.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.RobotSyncState.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RobotSyncState.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RobotSyncState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RobotSyncState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RobotSyncState.toObject = function(includeInstance, msg) {
  var f, obj = {
    statesList: jspb.Message.toObjectList(msg.getStatesList(),
    proto.Proto.RobotState.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RobotSyncState}
 */
proto.Proto.RobotSyncState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RobotSyncState;
  return proto.Proto.RobotSyncState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RobotSyncState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RobotSyncState}
 */
proto.Proto.RobotSyncState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Proto.RobotState;
      reader.readMessage(value,proto.Proto.RobotState.deserializeBinaryFromReader);
      msg.addStates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RobotSyncState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RobotSyncState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RobotSyncState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RobotSyncState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Proto.RobotState.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RobotState states = 1;
 * @return {!Array<!proto.Proto.RobotState>}
 */
proto.Proto.RobotSyncState.prototype.getStatesList = function() {
  return /** @type{!Array<!proto.Proto.RobotState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.RobotState, 1));
};


/**
 * @param {!Array<!proto.Proto.RobotState>} value
 * @return {!proto.Proto.RobotSyncState} returns this
*/
proto.Proto.RobotSyncState.prototype.setStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.RobotState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.RobotState}
 */
proto.Proto.RobotSyncState.prototype.addStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.RobotState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.RobotSyncState} returns this
 */
proto.Proto.RobotSyncState.prototype.clearStatesList = function() {
  return this.setStatesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RobotCreate.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RobotCreate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RobotCreate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RobotCreate.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RobotCreate}
 */
proto.Proto.RobotCreate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RobotCreate;
  return proto.Proto.RobotCreate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RobotCreate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RobotCreate}
 */
proto.Proto.RobotCreate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RobotCreate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RobotCreate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RobotCreate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RobotCreate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.Proto.RobotCreate.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.RobotCreate} returns this
 */
proto.Proto.RobotCreate.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.PlayerLittle.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.PlayerLittle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.PlayerLittle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerLittle.toObject = function(includeInstance, msg) {
  var f, obj = {
    sn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    level: jspb.Message.getFieldWithDefault(msg, 4, 0),
    templateId: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.PlayerLittle}
 */
proto.Proto.PlayerLittle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.PlayerLittle;
  return proto.Proto.PlayerLittle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.PlayerLittle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.PlayerLittle}
 */
proto.Proto.PlayerLittle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTemplateId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.PlayerLittle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.PlayerLittle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.PlayerLittle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerLittle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTemplateId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional uint64 sn = 1;
 * @return {number}
 */
proto.Proto.PlayerLittle.prototype.getSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.PlayerLittle} returns this
 */
proto.Proto.PlayerLittle.prototype.setSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.Proto.PlayerLittle.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.PlayerLittle} returns this
 */
proto.Proto.PlayerLittle.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 level = 4;
 * @return {number}
 */
proto.Proto.PlayerLittle.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.PlayerLittle} returns this
 */
proto.Proto.PlayerLittle.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 template_id = 5;
 * @return {number}
 */
proto.Proto.PlayerLittle.prototype.getTemplateId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.PlayerLittle} returns this
 */
proto.Proto.PlayerLittle.prototype.setTemplateId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.PlayerList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.PlayerList.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.PlayerList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.PlayerList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerList.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerList: jspb.Message.toObjectList(msg.getPlayerList(),
    proto.Proto.PlayerLittle.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.PlayerList}
 */
proto.Proto.PlayerList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.PlayerList;
  return proto.Proto.PlayerList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.PlayerList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.PlayerList}
 */
proto.Proto.PlayerList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = new proto.Proto.PlayerLittle;
      reader.readMessage(value,proto.Proto.PlayerLittle.deserializeBinaryFromReader);
      msg.addPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.PlayerList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.PlayerList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.PlayerList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Proto.PlayerLittle.serializeBinaryToWriter
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.Proto.PlayerList.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.PlayerList} returns this
 */
proto.Proto.PlayerList.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated PlayerLittle player = 2;
 * @return {!Array<!proto.Proto.PlayerLittle>}
 */
proto.Proto.PlayerList.prototype.getPlayerList = function() {
  return /** @type{!Array<!proto.Proto.PlayerLittle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.PlayerLittle, 2));
};


/**
 * @param {!Array<!proto.Proto.PlayerLittle>} value
 * @return {!proto.Proto.PlayerList} returns this
*/
proto.Proto.PlayerList.prototype.setPlayerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.PlayerLittle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.PlayerLittle}
 */
proto.Proto.PlayerList.prototype.addPlayer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.PlayerLittle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.PlayerList} returns this
 */
proto.Proto.PlayerList.prototype.clearPlayerList = function() {
  return this.setPlayerList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QueryPlayerList.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QueryPlayerList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QueryPlayerList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryPlayerList.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QueryPlayerList}
 */
proto.Proto.QueryPlayerList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QueryPlayerList;
  return proto.Proto.QueryPlayerList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QueryPlayerList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QueryPlayerList}
 */
proto.Proto.QueryPlayerList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QueryPlayerList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QueryPlayerList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QueryPlayerList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryPlayerList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.Proto.QueryPlayerList.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.QueryPlayerList} returns this
 */
proto.Proto.QueryPlayerList.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QueryPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QueryPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QueryPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerSn: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QueryPlayer}
 */
proto.Proto.QueryPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QueryPlayer;
  return proto.Proto.QueryPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QueryPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QueryPlayer}
 */
proto.Proto.QueryPlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QueryPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QueryPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QueryPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.Proto.QueryPlayer.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.QueryPlayer} returns this
 */
proto.Proto.QueryPlayer.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 player_sn = 2;
 * @return {number}
 */
proto.Proto.QueryPlayer.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QueryPlayer} returns this
 */
proto.Proto.QueryPlayer.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QueryPlayerRs.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QueryPlayerRs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QueryPlayerRs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryPlayerRs.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    player: (f = msg.getPlayer()) && db_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QueryPlayerRs}
 */
proto.Proto.QueryPlayerRs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QueryPlayerRs;
  return proto.Proto.QueryPlayerRs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QueryPlayerRs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QueryPlayerRs}
 */
proto.Proto.QueryPlayerRs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QueryPlayerRs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QueryPlayerRs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QueryPlayerRs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryPlayerRs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.Proto.QueryPlayerRs.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.QueryPlayerRs} returns this
 */
proto.Proto.QueryPlayerRs.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Player player = 2;
 * @return {?proto.Proto.Player}
 */
proto.Proto.QueryPlayerRs.prototype.getPlayer = function() {
  return /** @type{?proto.Proto.Player} */ (
    jspb.Message.getWrapperField(this, db_pb.Player, 2));
};


/**
 * @param {?proto.Proto.Player|undefined} value
 * @return {!proto.Proto.QueryPlayerRs} returns this
*/
proto.Proto.QueryPlayerRs.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.QueryPlayerRs} returns this
 */
proto.Proto.QueryPlayerRs.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.QueryPlayerRs.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.LoadAllAccount.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.LoadAllAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.LoadAllAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.LoadAllAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadAllAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverIdList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.LoadAllAccount}
 */
proto.Proto.LoadAllAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.LoadAllAccount;
  return proto.Proto.LoadAllAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.LoadAllAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.LoadAllAccount}
 */
proto.Proto.LoadAllAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setServerIdList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.LoadAllAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.LoadAllAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.LoadAllAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadAllAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerIdList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
};


/**
 * repeated int32 server_id = 1;
 * @return {!Array<number>}
 */
proto.Proto.LoadAllAccount.prototype.getServerIdList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.Proto.LoadAllAccount} returns this
 */
proto.Proto.LoadAllAccount.prototype.setServerIdList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.Proto.LoadAllAccount} returns this
 */
proto.Proto.LoadAllAccount.prototype.addServerId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.LoadAllAccount} returns this
 */
proto.Proto.LoadAllAccount.prototype.clearServerIdList = function() {
  return this.setServerIdList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.LoadAllAccountRet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.LoadAllAccountRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.LoadAllAccountRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.LoadAllAccountRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadAllAccountRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountListList: jspb.Message.toObjectList(msg.getAccountListList(),
    db_pb.DBAccount.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.LoadAllAccountRet}
 */
proto.Proto.LoadAllAccountRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.LoadAllAccountRet;
  return proto.Proto.LoadAllAccountRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.LoadAllAccountRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.LoadAllAccountRet}
 */
proto.Proto.LoadAllAccountRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new db_pb.DBAccount;
      reader.readMessage(value,db_pb.DBAccount.deserializeBinaryFromReader);
      msg.addAccountList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.LoadAllAccountRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.LoadAllAccountRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.LoadAllAccountRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadAllAccountRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      db_pb.DBAccount.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DBAccount account_list = 1;
 * @return {!Array<!proto.Proto.DBAccount>}
 */
proto.Proto.LoadAllAccountRet.prototype.getAccountListList = function() {
  return /** @type{!Array<!proto.Proto.DBAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, db_pb.DBAccount, 1));
};


/**
 * @param {!Array<!proto.Proto.DBAccount>} value
 * @return {!proto.Proto.LoadAllAccountRet} returns this
*/
proto.Proto.LoadAllAccountRet.prototype.setAccountListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.DBAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.DBAccount}
 */
proto.Proto.LoadAllAccountRet.prototype.addAccountList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.DBAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.LoadAllAccountRet} returns this
 */
proto.Proto.LoadAllAccountRet.prototype.clearAccountListList = function() {
  return this.setAccountListList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.LoadAllPlayer.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.LoadAllPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.LoadAllPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.LoadAllPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadAllPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverIdList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.LoadAllPlayer}
 */
proto.Proto.LoadAllPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.LoadAllPlayer;
  return proto.Proto.LoadAllPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.LoadAllPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.LoadAllPlayer}
 */
proto.Proto.LoadAllPlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setServerIdList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.LoadAllPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.LoadAllPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.LoadAllPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadAllPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerIdList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
};


/**
 * repeated int32 server_id = 1;
 * @return {!Array<number>}
 */
proto.Proto.LoadAllPlayer.prototype.getServerIdList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.Proto.LoadAllPlayer} returns this
 */
proto.Proto.LoadAllPlayer.prototype.setServerIdList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.Proto.LoadAllPlayer} returns this
 */
proto.Proto.LoadAllPlayer.prototype.addServerId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.LoadAllPlayer} returns this
 */
proto.Proto.LoadAllPlayer.prototype.clearServerIdList = function() {
  return this.setServerIdList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.LoadAllPlayerRet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.LoadAllPlayerRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.LoadAllPlayerRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.LoadAllPlayerRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadAllPlayerRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerListList: jspb.Message.toObjectList(msg.getPlayerListList(),
    db_pb.Player.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.LoadAllPlayerRet}
 */
proto.Proto.LoadAllPlayerRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.LoadAllPlayerRet;
  return proto.Proto.LoadAllPlayerRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.LoadAllPlayerRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.LoadAllPlayerRet}
 */
proto.Proto.LoadAllPlayerRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.addPlayerList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.LoadAllPlayerRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.LoadAllPlayerRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.LoadAllPlayerRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadAllPlayerRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Player player_list = 1;
 * @return {!Array<!proto.Proto.Player>}
 */
proto.Proto.LoadAllPlayerRet.prototype.getPlayerListList = function() {
  return /** @type{!Array<!proto.Proto.Player>} */ (
    jspb.Message.getRepeatedWrapperField(this, db_pb.Player, 1));
};


/**
 * @param {!Array<!proto.Proto.Player>} value
 * @return {!proto.Proto.LoadAllPlayerRet} returns this
*/
proto.Proto.LoadAllPlayerRet.prototype.setPlayerListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.Player=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.Player}
 */
proto.Proto.LoadAllPlayerRet.prototype.addPlayerList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.Player, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.LoadAllPlayerRet} returns this
 */
proto.Proto.LoadAllPlayerRet.prototype.clearPlayerListList = function() {
  return this.setPlayerListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.LoadPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.LoadPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.LoadPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    account: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.LoadPlayer}
 */
proto.Proto.LoadPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.LoadPlayer;
  return proto.Proto.LoadPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.LoadPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.LoadPlayer}
 */
proto.Proto.LoadPlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlayerSn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.LoadPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.LoadPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.LoadPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 player_sn = 1;
 * @return {number}
 */
proto.Proto.LoadPlayer.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.LoadPlayer} returns this
 */
proto.Proto.LoadPlayer.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string account = 2;
 * @return {string}
 */
proto.Proto.LoadPlayer.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.LoadPlayer} returns this
 */
proto.Proto.LoadPlayer.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.LoadPlayerRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.LoadPlayerRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.LoadPlayerRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadPlayerRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerInfo: (f = msg.getPlayerInfo()) && db_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.LoadPlayerRet}
 */
proto.Proto.LoadPlayerRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.LoadPlayerRet;
  return proto.Proto.LoadPlayerRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.LoadPlayerRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.LoadPlayerRet}
 */
proto.Proto.LoadPlayerRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.setPlayerInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.LoadPlayerRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.LoadPlayerRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.LoadPlayerRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoadPlayerRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional Player player_info = 1;
 * @return {?proto.Proto.Player}
 */
proto.Proto.LoadPlayerRet.prototype.getPlayerInfo = function() {
  return /** @type{?proto.Proto.Player} */ (
    jspb.Message.getWrapperField(this, db_pb.Player, 1));
};


/**
 * @param {?proto.Proto.Player|undefined} value
 * @return {!proto.Proto.LoadPlayerRet} returns this
*/
proto.Proto.LoadPlayerRet.prototype.setPlayerInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.LoadPlayerRet} returns this
 */
proto.Proto.LoadPlayerRet.prototype.clearPlayerInfo = function() {
  return this.setPlayerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.LoadPlayerRet.prototype.hasPlayerInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.PlayerLogin.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.PlayerLogin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.PlayerLogin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerLogin.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    channel: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.PlayerLogin}
 */
proto.Proto.PlayerLogin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.PlayerLogin;
  return proto.Proto.PlayerLogin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.PlayerLogin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.PlayerLogin}
 */
proto.Proto.PlayerLogin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.PlayerLogin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.PlayerLogin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.PlayerLogin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerLogin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 server_id = 1;
 * @return {number}
 */
proto.Proto.PlayerLogin.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.PlayerLogin} returns this
 */
proto.Proto.PlayerLogin.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string channel = 2;
 * @return {string}
 */
proto.Proto.PlayerLogin.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.PlayerLogin} returns this
 */
proto.Proto.PlayerLogin.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.Proto.PlayerLogin.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.PlayerLogin} returns this
 */
proto.Proto.PlayerLogin.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.PlayerLoginRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.PlayerLoginRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.PlayerLoginRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerLoginRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: (f = msg.getPlayer()) && db_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.PlayerLoginRet}
 */
proto.Proto.PlayerLoginRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.PlayerLoginRet;
  return proto.Proto.PlayerLoginRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.PlayerLoginRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.PlayerLoginRet}
 */
proto.Proto.PlayerLoginRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.LoginRetCode} */ (reader.readEnum());
      msg.setRet(value);
      break;
    case 2:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.PlayerLoginRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.PlayerLoginRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.PlayerLoginRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerLoginRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional LoginRetCode ret = 1;
 * @return {!proto.Proto.LoginRetCode}
 */
proto.Proto.PlayerLoginRet.prototype.getRet = function() {
  return /** @type {!proto.Proto.LoginRetCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.LoginRetCode} value
 * @return {!proto.Proto.PlayerLoginRet} returns this
 */
proto.Proto.PlayerLoginRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Player player = 2;
 * @return {?proto.Proto.Player}
 */
proto.Proto.PlayerLoginRet.prototype.getPlayer = function() {
  return /** @type{?proto.Proto.Player} */ (
    jspb.Message.getWrapperField(this, db_pb.Player, 2));
};


/**
 * @param {?proto.Proto.Player|undefined} value
 * @return {!proto.Proto.PlayerLoginRet} returns this
*/
proto.Proto.PlayerLoginRet.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.PlayerLoginRet} returns this
 */
proto.Proto.PlayerLoginRet.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.PlayerLoginRet.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.PlayerCreate.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.PlayerCreate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.PlayerCreate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerCreate.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    templateId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.PlayerCreate}
 */
proto.Proto.PlayerCreate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.PlayerCreate;
  return proto.Proto.PlayerCreate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.PlayerCreate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.PlayerCreate}
 */
proto.Proto.PlayerCreate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTemplateId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.PlayerCreate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.PlayerCreate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.PlayerCreate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerCreate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTemplateId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.Proto.PlayerCreate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.PlayerCreate} returns this
 */
proto.Proto.PlayerCreate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 template_id = 3;
 * @return {number}
 */
proto.Proto.PlayerCreate.prototype.getTemplateId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.PlayerCreate} returns this
 */
proto.Proto.PlayerCreate.prototype.setTemplateId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.PlayerCreateRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.PlayerCreateRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.PlayerCreateRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerCreateRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: (f = msg.getPlayer()) && db_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.PlayerCreateRet}
 */
proto.Proto.PlayerCreateRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.PlayerCreateRet;
  return proto.Proto.PlayerCreateRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.PlayerCreateRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.PlayerCreateRet}
 */
proto.Proto.PlayerCreateRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.CreateRetCode} */ (reader.readEnum());
      msg.setRet(value);
      break;
    case 2:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.PlayerCreateRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.PlayerCreateRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.PlayerCreateRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PlayerCreateRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional CreateRetCode ret = 1;
 * @return {!proto.Proto.CreateRetCode}
 */
proto.Proto.PlayerCreateRet.prototype.getRet = function() {
  return /** @type {!proto.Proto.CreateRetCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.CreateRetCode} value
 * @return {!proto.Proto.PlayerCreateRet} returns this
 */
proto.Proto.PlayerCreateRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Player player = 2;
 * @return {?proto.Proto.Player}
 */
proto.Proto.PlayerCreateRet.prototype.getPlayer = function() {
  return /** @type{?proto.Proto.Player} */ (
    jspb.Message.getWrapperField(this, db_pb.Player, 2));
};


/**
 * @param {?proto.Proto.Player|undefined} value
 * @return {!proto.Proto.PlayerCreateRet} returns this
*/
proto.Proto.PlayerCreateRet.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.PlayerCreateRet} returns this
 */
proto.Proto.PlayerCreateRet.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.PlayerCreateRet.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.SelectPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.SelectPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.SelectPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SelectPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.SelectPlayer}
 */
proto.Proto.SelectPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.SelectPlayer;
  return proto.Proto.SelectPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.SelectPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.SelectPlayer}
 */
proto.Proto.SelectPlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.SelectPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.SelectPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.SelectPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SelectPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 player_sn = 1;
 * @return {number}
 */
proto.Proto.SelectPlayer.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.SelectPlayer} returns this
 */
proto.Proto.SelectPlayer.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.SelectPlayerRs.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.SelectPlayerRs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.SelectPlayerRs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SelectPlayerRs.toObject = function(includeInstance, msg) {
  var f, obj = {
    returnCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.SelectPlayerRs}
 */
proto.Proto.SelectPlayerRs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.SelectPlayerRs;
  return proto.Proto.SelectPlayerRs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.SelectPlayerRs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.SelectPlayerRs}
 */
proto.Proto.SelectPlayerRs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.SelectPlayerRs.SelectPlayerReturnCode} */ (reader.readEnum());
      msg.setReturnCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.SelectPlayerRs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.SelectPlayerRs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.SelectPlayerRs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SelectPlayerRs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReturnCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.SelectPlayerRs.SelectPlayerReturnCode = {
  SPRC_OK: 0,
  SPRC_NOTFOUND: 1
};

/**
 * optional SelectPlayerReturnCode return_code = 1;
 * @return {!proto.Proto.SelectPlayerRs.SelectPlayerReturnCode}
 */
proto.Proto.SelectPlayerRs.prototype.getReturnCode = function() {
  return /** @type {!proto.Proto.SelectPlayerRs.SelectPlayerReturnCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.SelectPlayerRs.SelectPlayerReturnCode} value
 * @return {!proto.Proto.SelectPlayerRs} returns this
 */
proto.Proto.SelectPlayerRs.prototype.setReturnCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.SavePlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.SavePlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.SavePlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SavePlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    saveMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: (f = msg.getPlayer()) && db_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.SavePlayer}
 */
proto.Proto.SavePlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.SavePlayer;
  return proto.Proto.SavePlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.SavePlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.SavePlayer}
 */
proto.Proto.SavePlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.ESaveMode} */ (reader.readEnum());
      msg.setSaveMode(value);
      break;
    case 2:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.SavePlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.SavePlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.SavePlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SavePlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSaveMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional ESaveMode save_mode = 1;
 * @return {!proto.Proto.ESaveMode}
 */
proto.Proto.SavePlayer.prototype.getSaveMode = function() {
  return /** @type {!proto.Proto.ESaveMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.ESaveMode} value
 * @return {!proto.Proto.SavePlayer} returns this
 */
proto.Proto.SavePlayer.prototype.setSaveMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Player player = 2;
 * @return {?proto.Proto.Player}
 */
proto.Proto.SavePlayer.prototype.getPlayer = function() {
  return /** @type{?proto.Proto.Player} */ (
    jspb.Message.getWrapperField(this, db_pb.Player, 2));
};


/**
 * @param {?proto.Proto.Player|undefined} value
 * @return {!proto.Proto.SavePlayer} returns this
*/
proto.Proto.SavePlayer.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.SavePlayer} returns this
 */
proto.Proto.SavePlayer.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.SavePlayer.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.WorldSyncToGather.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.WorldSyncToGather.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.WorldSyncToGather} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.WorldSyncToGather.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    worldId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    online: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isRemove: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.WorldSyncToGather}
 */
proto.Proto.WorldSyncToGather.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.WorldSyncToGather;
  return proto.Proto.WorldSyncToGather.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.WorldSyncToGather} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.WorldSyncToGather}
 */
proto.Proto.WorldSyncToGather.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWorldSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorldId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOnline(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRemove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.WorldSyncToGather.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.WorldSyncToGather.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.WorldSyncToGather} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.WorldSyncToGather.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getWorldId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOnline();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getIsRemove();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional uint64 world_sn = 1;
 * @return {number}
 */
proto.Proto.WorldSyncToGather.prototype.getWorldSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.WorldSyncToGather} returns this
 */
proto.Proto.WorldSyncToGather.prototype.setWorldSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 world_id = 2;
 * @return {number}
 */
proto.Proto.WorldSyncToGather.prototype.getWorldId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.WorldSyncToGather} returns this
 */
proto.Proto.WorldSyncToGather.prototype.setWorldId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 online = 3;
 * @return {number}
 */
proto.Proto.WorldSyncToGather.prototype.getOnline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.WorldSyncToGather} returns this
 */
proto.Proto.WorldSyncToGather.prototype.setOnline = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool is_remove = 4;
 * @return {boolean}
 */
proto.Proto.WorldSyncToGather.prototype.getIsRemove = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.WorldSyncToGather} returns this
 */
proto.Proto.WorldSyncToGather.prototype.setIsRemove = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.WorldProxySyncToGather.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.WorldProxySyncToGather.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.WorldProxySyncToGather} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.WorldProxySyncToGather.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isRemove: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    worldId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    online: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.WorldProxySyncToGather}
 */
proto.Proto.WorldProxySyncToGather.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.WorldProxySyncToGather;
  return proto.Proto.WorldProxySyncToGather.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.WorldProxySyncToGather} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.WorldProxySyncToGather}
 */
proto.Proto.WorldProxySyncToGather.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWorldSn(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRemove(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorldId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOnline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.WorldProxySyncToGather.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.WorldProxySyncToGather.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.WorldProxySyncToGather} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.WorldProxySyncToGather.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIsRemove();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getWorldId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getOnline();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint64 world_sn = 1;
 * @return {number}
 */
proto.Proto.WorldProxySyncToGather.prototype.getWorldSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.WorldProxySyncToGather} returns this
 */
proto.Proto.WorldProxySyncToGather.prototype.setWorldSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_remove = 2;
 * @return {boolean}
 */
proto.Proto.WorldProxySyncToGather.prototype.getIsRemove = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.WorldProxySyncToGather} returns this
 */
proto.Proto.WorldProxySyncToGather.prototype.setIsRemove = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 world_id = 3;
 * @return {number}
 */
proto.Proto.WorldProxySyncToGather.prototype.getWorldId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.WorldProxySyncToGather} returns this
 */
proto.Proto.WorldProxySyncToGather.prototype.setWorldId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 online = 4;
 * @return {number}
 */
proto.Proto.WorldProxySyncToGather.prototype.getOnline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.WorldProxySyncToGather} returns this
 */
proto.Proto.WorldProxySyncToGather.prototype.setOnline = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.GameToken.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.GameToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.GameToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GameToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    returnCode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ip: jspb.Message.getFieldWithDefault(msg, 3, ""),
    port: jspb.Message.getFieldWithDefault(msg, 4, 0),
    serverId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    channel: jspb.Message.getFieldWithDefault(msg, 6, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.GameToken}
 */
proto.Proto.GameToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.GameToken;
  return proto.Proto.GameToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.GameToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.GameToken}
 */
proto.Proto.GameToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.GameToken.ReturnCode} */ (reader.readEnum());
      msg.setReturnCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.GameToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.GameToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.GameToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GameToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReturnCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.GameToken.ReturnCode = {
  GAMETOKEN_OK: 0,
  GAMETOKEN_NO_GAME: 1
};

/**
 * optional ReturnCode return_code = 1;
 * @return {!proto.Proto.GameToken.ReturnCode}
 */
proto.Proto.GameToken.prototype.getReturnCode = function() {
  return /** @type {!proto.Proto.GameToken.ReturnCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.GameToken.ReturnCode} value
 * @return {!proto.Proto.GameToken} returns this
 */
proto.Proto.GameToken.prototype.setReturnCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.Proto.GameToken.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.GameToken} returns this
 */
proto.Proto.GameToken.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ip = 3;
 * @return {string}
 */
proto.Proto.GameToken.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.GameToken} returns this
 */
proto.Proto.GameToken.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 port = 4;
 * @return {number}
 */
proto.Proto.GameToken.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GameToken} returns this
 */
proto.Proto.GameToken.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 server_id = 5;
 * @return {number}
 */
proto.Proto.GameToken.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GameToken} returns this
 */
proto.Proto.GameToken.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string channel = 6;
 * @return {string}
 */
proto.Proto.GameToken.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.GameToken} returns this
 */
proto.Proto.GameToken.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string uuid = 7;
 * @return {string}
 */
proto.Proto.GameToken.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.GameToken} returns this
 */
proto.Proto.GameToken.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.LoginByToken.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.LoginByToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.LoginByToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoginByToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    channel: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    account: jspb.Message.getFieldWithDefault(msg, 4, ""),
    token: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.LoginByToken}
 */
proto.Proto.LoginByToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.LoginByToken;
  return proto.Proto.LoginByToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.LoginByToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.LoginByToken}
 */
proto.Proto.LoginByToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.LoginByToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.LoginByToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.LoginByToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoginByToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 server_id = 1;
 * @return {number}
 */
proto.Proto.LoginByToken.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.LoginByToken} returns this
 */
proto.Proto.LoginByToken.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string channel = 2;
 * @return {string}
 */
proto.Proto.LoginByToken.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.LoginByToken} returns this
 */
proto.Proto.LoginByToken.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.Proto.LoginByToken.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.LoginByToken} returns this
 */
proto.Proto.LoginByToken.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string account = 4;
 * @return {string}
 */
proto.Proto.LoginByToken.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.LoginByToken} returns this
 */
proto.Proto.LoginByToken.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string token = 5;
 * @return {string}
 */
proto.Proto.LoginByToken.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.LoginByToken} returns this
 */
proto.Proto.LoginByToken.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.LoginByTokenRs.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.LoginByTokenRs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.LoginByTokenRs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoginByTokenRs.toObject = function(includeInstance, msg) {
  var f, obj = {
    returnCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.LoginByTokenRs}
 */
proto.Proto.LoginByTokenRs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.LoginByTokenRs;
  return proto.Proto.LoginByTokenRs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.LoginByTokenRs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.LoginByTokenRs}
 */
proto.Proto.LoginByTokenRs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.LoginByTokenRs.ReturnCode} */ (reader.readEnum());
      msg.setReturnCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.LoginByTokenRs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.LoginByTokenRs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.LoginByTokenRs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.LoginByTokenRs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReturnCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.LoginByTokenRs.ReturnCode = {
  LGRC_OK: 0,
  LGRC_UNKONWN: 1,
  LGRC_NOT_FOUND_ACCOUNT: 2,
  LGRC_TOKEN_WRONG: 3
};

/**
 * optional ReturnCode return_code = 1;
 * @return {!proto.Proto.LoginByTokenRs.ReturnCode}
 */
proto.Proto.LoginByTokenRs.prototype.getReturnCode = function() {
  return /** @type {!proto.Proto.LoginByTokenRs.ReturnCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.LoginByTokenRs.ReturnCode} value
 * @return {!proto.Proto.LoginByTokenRs} returns this
 */
proto.Proto.LoginByTokenRs.prototype.setReturnCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.TokenInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.TokenInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.TokenInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.TokenInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playerSn: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.TokenInfo}
 */
proto.Proto.TokenInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.TokenInfo;
  return proto.Proto.TokenInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.TokenInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.TokenInfo}
 */
proto.Proto.TokenInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.TokenInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.TokenInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.TokenInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.TokenInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.Proto.TokenInfo.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.TokenInfo} returns this
 */
proto.Proto.TokenInfo.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 player_sn = 2;
 * @return {number}
 */
proto.Proto.TokenInfo.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.TokenInfo} returns this
 */
proto.Proto.TokenInfo.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.SyncPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.SyncPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.SyncPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    account: jspb.Message.getFieldWithDefault(msg, 2, ""),
    player: (f = msg.getPlayer()) && db_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.SyncPlayer}
 */
proto.Proto.SyncPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.SyncPlayer;
  return proto.Proto.SyncPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.SyncPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.SyncPlayer}
 */
proto.Proto.SyncPlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 3:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.SyncPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.SyncPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.SyncPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 app_id = 1;
 * @return {number}
 */
proto.Proto.SyncPlayer.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.SyncPlayer} returns this
 */
proto.Proto.SyncPlayer.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string account = 2;
 * @return {string}
 */
proto.Proto.SyncPlayer.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.SyncPlayer} returns this
 */
proto.Proto.SyncPlayer.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.Proto.Player}
 */
proto.Proto.SyncPlayer.prototype.getPlayer = function() {
  return /** @type{?proto.Proto.Player} */ (
    jspb.Message.getWrapperField(this, db_pb.Player, 3));
};


/**
 * @param {?proto.Proto.Player|undefined} value
 * @return {!proto.Proto.SyncPlayer} returns this
*/
proto.Proto.SyncPlayer.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.SyncPlayer} returns this
 */
proto.Proto.SyncPlayer.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.SyncPlayer.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.EnterWorld.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.EnterWorld.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.EnterWorld} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.EnterWorld.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    worldSn: jspb.Message.getFieldWithDefault(msg, 2, 0),
    position: (f = msg.getPosition()) && db_pb.Vector3.toObject(includeInstance, f),
    rotation: (f = msg.getRotation()) && db_pb.Vector3.toObject(includeInstance, f),
    worldData: (f = msg.getWorldData()) && db_pb.DBWorldData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.EnterWorld}
 */
proto.Proto.EnterWorld.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.EnterWorld;
  return proto.Proto.EnterWorld.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.EnterWorld} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.EnterWorld}
 */
proto.Proto.EnterWorld.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorldId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWorldSn(value);
      break;
    case 3:
      var value = new db_pb.Vector3;
      reader.readMessage(value,db_pb.Vector3.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 4:
      var value = new db_pb.Vector3;
      reader.readMessage(value,db_pb.Vector3.deserializeBinaryFromReader);
      msg.setRotation(value);
      break;
    case 5:
      var value = new db_pb.DBWorldData;
      reader.readMessage(value,db_pb.DBWorldData.deserializeBinaryFromReader);
      msg.setWorldData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.EnterWorld.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.EnterWorld.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.EnterWorld} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.EnterWorld.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWorldSn();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      db_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getRotation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      db_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getWorldData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      db_pb.DBWorldData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 world_id = 1;
 * @return {number}
 */
proto.Proto.EnterWorld.prototype.getWorldId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.EnterWorld} returns this
 */
proto.Proto.EnterWorld.prototype.setWorldId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 world_sn = 2;
 * @return {number}
 */
proto.Proto.EnterWorld.prototype.getWorldSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.EnterWorld} returns this
 */
proto.Proto.EnterWorld.prototype.setWorldSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Vector3 position = 3;
 * @return {?proto.Proto.Vector3}
 */
proto.Proto.EnterWorld.prototype.getPosition = function() {
  return /** @type{?proto.Proto.Vector3} */ (
    jspb.Message.getWrapperField(this, db_pb.Vector3, 3));
};


/**
 * @param {?proto.Proto.Vector3|undefined} value
 * @return {!proto.Proto.EnterWorld} returns this
*/
proto.Proto.EnterWorld.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.EnterWorld} returns this
 */
proto.Proto.EnterWorld.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.EnterWorld.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Vector3 rotation = 4;
 * @return {?proto.Proto.Vector3}
 */
proto.Proto.EnterWorld.prototype.getRotation = function() {
  return /** @type{?proto.Proto.Vector3} */ (
    jspb.Message.getWrapperField(this, db_pb.Vector3, 4));
};


/**
 * @param {?proto.Proto.Vector3|undefined} value
 * @return {!proto.Proto.EnterWorld} returns this
*/
proto.Proto.EnterWorld.prototype.setRotation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.EnterWorld} returns this
 */
proto.Proto.EnterWorld.prototype.clearRotation = function() {
  return this.setRotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.EnterWorld.prototype.hasRotation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DBWorldData world_data = 5;
 * @return {?proto.Proto.DBWorldData}
 */
proto.Proto.EnterWorld.prototype.getWorldData = function() {
  return /** @type{?proto.Proto.DBWorldData} */ (
    jspb.Message.getWrapperField(this, db_pb.DBWorldData, 5));
};


/**
 * @param {?proto.Proto.DBWorldData|undefined} value
 * @return {!proto.Proto.EnterWorld} returns this
*/
proto.Proto.EnterWorld.prototype.setWorldData = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.EnterWorld} returns this
 */
proto.Proto.EnterWorld.prototype.clearWorldData = function() {
  return this.setWorldData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.EnterWorld.prototype.hasWorldData = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.EnterHome.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.EnterHome.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.EnterHome} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.EnterHome.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.EnterHome}
 */
proto.Proto.EnterHome.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.EnterHome;
  return proto.Proto.EnterHome.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.EnterHome} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.EnterHome}
 */
proto.Proto.EnterHome.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.EnterHome.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.EnterHome.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.EnterHome} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.EnterHome.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 player_sn = 1;
 * @return {number}
 */
proto.Proto.EnterHome.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.EnterHome} returns this
 */
proto.Proto.EnterHome.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QueryDungeonBySn.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QueryDungeonBySn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QueryDungeonBySn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryDungeonBySn.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QueryDungeonBySn}
 */
proto.Proto.QueryDungeonBySn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QueryDungeonBySn;
  return proto.Proto.QueryDungeonBySn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QueryDungeonBySn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QueryDungeonBySn}
 */
proto.Proto.QueryDungeonBySn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWorldSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QueryDungeonBySn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QueryDungeonBySn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QueryDungeonBySn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryDungeonBySn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 world_sn = 1;
 * @return {number}
 */
proto.Proto.QueryDungeonBySn.prototype.getWorldSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QueryDungeonBySn} returns this
 */
proto.Proto.QueryDungeonBySn.prototype.setWorldSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QueryDungeonBySnRs.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QueryDungeonBySnRs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QueryDungeonBySnRs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryDungeonBySnRs.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    returnCode: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QueryDungeonBySnRs}
 */
proto.Proto.QueryDungeonBySnRs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QueryDungeonBySnRs;
  return proto.Proto.QueryDungeonBySnRs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QueryDungeonBySnRs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QueryDungeonBySnRs}
 */
proto.Proto.QueryDungeonBySnRs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWorldSn(value);
      break;
    case 3:
      var value = /** @type {!proto.Proto.QueryDungeonBySnRs.ReturnCode} */ (reader.readEnum());
      msg.setReturnCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QueryDungeonBySnRs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QueryDungeonBySnRs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QueryDungeonBySnRs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryDungeonBySnRs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getReturnCode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.QueryDungeonBySnRs.ReturnCode = {
  QUERYWORLD_OK: 0,
  QUERYWORLD_FAILED: 1
};

/**
 * optional uint64 world_sn = 1;
 * @return {number}
 */
proto.Proto.QueryDungeonBySnRs.prototype.getWorldSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QueryDungeonBySnRs} returns this
 */
proto.Proto.QueryDungeonBySnRs.prototype.setWorldSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ReturnCode return_code = 3;
 * @return {!proto.Proto.QueryDungeonBySnRs.ReturnCode}
 */
proto.Proto.QueryDungeonBySnRs.prototype.getReturnCode = function() {
  return /** @type {!proto.Proto.QueryDungeonBySnRs.ReturnCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.Proto.QueryDungeonBySnRs.ReturnCode} value
 * @return {!proto.Proto.QueryDungeonBySnRs} returns this
 */
proto.Proto.QueryDungeonBySnRs.prototype.setReturnCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RequestWorld.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RequestWorld.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RequestWorld} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestWorld.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    forPlayer: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RequestWorld}
 */
proto.Proto.RequestWorld.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RequestWorld;
  return proto.Proto.RequestWorld.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RequestWorld} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RequestWorld}
 */
proto.Proto.RequestWorld.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorldId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setForPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RequestWorld.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RequestWorld.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RequestWorld} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestWorld.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getForPlayer();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional int32 world_id = 1;
 * @return {number}
 */
proto.Proto.RequestWorld.prototype.getWorldId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RequestWorld} returns this
 */
proto.Proto.RequestWorld.prototype.setWorldId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 for_player = 2;
 * @return {number}
 */
proto.Proto.RequestWorld.prototype.getForPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RequestWorld} returns this
 */
proto.Proto.RequestWorld.prototype.setForPlayer = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.CreateWorld.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.CreateWorld.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.CreateWorld} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CreateWorld.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alive: jspb.Message.getFieldWithDefault(msg, 2, 0),
    forPlayer: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.CreateWorld}
 */
proto.Proto.CreateWorld.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.CreateWorld;
  return proto.Proto.CreateWorld.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.CreateWorld} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.CreateWorld}
 */
proto.Proto.CreateWorld.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorldId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAlive(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setForPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.CreateWorld.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.CreateWorld.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.CreateWorld} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.CreateWorld.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAlive();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getForPlayer();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional int32 world_id = 1;
 * @return {number}
 */
proto.Proto.CreateWorld.prototype.getWorldId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.CreateWorld} returns this
 */
proto.Proto.CreateWorld.prototype.setWorldId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 alive = 2;
 * @return {number}
 */
proto.Proto.CreateWorld.prototype.getAlive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.CreateWorld} returns this
 */
proto.Proto.CreateWorld.prototype.setAlive = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 for_player = 3;
 * @return {number}
 */
proto.Proto.CreateWorld.prototype.getForPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.CreateWorld} returns this
 */
proto.Proto.CreateWorld.prototype.setForPlayer = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DestoryWorld.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DestoryWorld.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DestoryWorld} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DestoryWorld.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    forPlayer: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DestoryWorld}
 */
proto.Proto.DestoryWorld.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DestoryWorld;
  return proto.Proto.DestoryWorld.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DestoryWorld} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DestoryWorld}
 */
proto.Proto.DestoryWorld.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWorldSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setForPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DestoryWorld.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DestoryWorld.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DestoryWorld} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DestoryWorld.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getForPlayer();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 world_sn = 1;
 * @return {number}
 */
proto.Proto.DestoryWorld.prototype.getWorldSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DestoryWorld} returns this
 */
proto.Proto.DestoryWorld.prototype.setWorldSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 for_player = 2;
 * @return {number}
 */
proto.Proto.DestoryWorld.prototype.getForPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DestoryWorld} returns this
 */
proto.Proto.DestoryWorld.prototype.setForPlayer = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BroadcastCreateWorld.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BroadcastCreateWorld.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BroadcastCreateWorld} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BroadcastCreateWorld.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    worldSn: jspb.Message.getFieldWithDefault(msg, 2, 0),
    forPlayer: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BroadcastCreateWorld}
 */
proto.Proto.BroadcastCreateWorld.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BroadcastCreateWorld;
  return proto.Proto.BroadcastCreateWorld.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BroadcastCreateWorld} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BroadcastCreateWorld}
 */
proto.Proto.BroadcastCreateWorld.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorldId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWorldSn(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setForPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BroadcastCreateWorld.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BroadcastCreateWorld.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BroadcastCreateWorld} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BroadcastCreateWorld.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWorldSn();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getForPlayer();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional int32 world_id = 1;
 * @return {number}
 */
proto.Proto.BroadcastCreateWorld.prototype.getWorldId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BroadcastCreateWorld} returns this
 */
proto.Proto.BroadcastCreateWorld.prototype.setWorldId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 world_sn = 2;
 * @return {number}
 */
proto.Proto.BroadcastCreateWorld.prototype.getWorldSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BroadcastCreateWorld} returns this
 */
proto.Proto.BroadcastCreateWorld.prototype.setWorldSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 for_player = 4;
 * @return {number}
 */
proto.Proto.BroadcastCreateWorld.prototype.getForPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BroadcastCreateWorld} returns this
 */
proto.Proto.BroadcastCreateWorld.prototype.setForPlayer = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RequestCreateWorldProxy.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RequestCreateWorldProxy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RequestCreateWorldProxy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestCreateWorldProxy.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    worldSn: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RequestCreateWorldProxy}
 */
proto.Proto.RequestCreateWorldProxy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RequestCreateWorldProxy;
  return proto.Proto.RequestCreateWorldProxy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RequestCreateWorldProxy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RequestCreateWorldProxy}
 */
proto.Proto.RequestCreateWorldProxy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorldId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWorldSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RequestCreateWorldProxy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RequestCreateWorldProxy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RequestCreateWorldProxy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestCreateWorldProxy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWorldSn();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional int32 world_id = 1;
 * @return {number}
 */
proto.Proto.RequestCreateWorldProxy.prototype.getWorldId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RequestCreateWorldProxy} returns this
 */
proto.Proto.RequestCreateWorldProxy.prototype.setWorldId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 world_sn = 2;
 * @return {number}
 */
proto.Proto.RequestCreateWorldProxy.prototype.getWorldSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RequestCreateWorldProxy} returns this
 */
proto.Proto.RequestCreateWorldProxy.prototype.setWorldSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BroadcastCreateWorldProxy.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BroadcastCreateWorldProxy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BroadcastCreateWorldProxy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BroadcastCreateWorldProxy.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    worldSn: jspb.Message.getFieldWithDefault(msg, 2, 0),
    forPlayer: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BroadcastCreateWorldProxy}
 */
proto.Proto.BroadcastCreateWorldProxy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BroadcastCreateWorldProxy;
  return proto.Proto.BroadcastCreateWorldProxy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BroadcastCreateWorldProxy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BroadcastCreateWorldProxy}
 */
proto.Proto.BroadcastCreateWorldProxy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorldId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWorldSn(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setForPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BroadcastCreateWorldProxy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BroadcastCreateWorldProxy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BroadcastCreateWorldProxy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BroadcastCreateWorldProxy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWorldSn();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getForPlayer();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional int32 world_id = 1;
 * @return {number}
 */
proto.Proto.BroadcastCreateWorldProxy.prototype.getWorldId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BroadcastCreateWorldProxy} returns this
 */
proto.Proto.BroadcastCreateWorldProxy.prototype.setWorldId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 world_sn = 2;
 * @return {number}
 */
proto.Proto.BroadcastCreateWorldProxy.prototype.getWorldSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BroadcastCreateWorldProxy} returns this
 */
proto.Proto.BroadcastCreateWorldProxy.prototype.setWorldSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 for_player = 3;
 * @return {number}
 */
proto.Proto.BroadcastCreateWorldProxy.prototype.getForPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BroadcastCreateWorldProxy} returns this
 */
proto.Proto.BroadcastCreateWorldProxy.prototype.setForPlayer = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QueryWorldData.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QueryWorldData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QueryWorldData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryWorldData.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    worldSn: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QueryWorldData}
 */
proto.Proto.QueryWorldData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QueryWorldData;
  return proto.Proto.QueryWorldData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QueryWorldData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QueryWorldData}
 */
proto.Proto.QueryWorldData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorldId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWorldSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QueryWorldData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QueryWorldData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QueryWorldData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryWorldData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWorldSn();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional int32 world_id = 1;
 * @return {number}
 */
proto.Proto.QueryWorldData.prototype.getWorldId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QueryWorldData} returns this
 */
proto.Proto.QueryWorldData.prototype.setWorldId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 world_sn = 2;
 * @return {number}
 */
proto.Proto.QueryWorldData.prototype.getWorldSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QueryWorldData} returns this
 */
proto.Proto.QueryWorldData.prototype.setWorldSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QueryWorldDataRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QueryWorldDataRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QueryWorldDataRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryWorldDataRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    worldData: (f = msg.getWorldData()) && db_pb.DBWorldData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QueryWorldDataRet}
 */
proto.Proto.QueryWorldDataRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QueryWorldDataRet;
  return proto.Proto.QueryWorldDataRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QueryWorldDataRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QueryWorldDataRet}
 */
proto.Proto.QueryWorldDataRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = new db_pb.DBWorldData;
      reader.readMessage(value,db_pb.DBWorldData.deserializeBinaryFromReader);
      msg.setWorldData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QueryWorldDataRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QueryWorldDataRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QueryWorldDataRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryWorldDataRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWorldData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.DBWorldData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.QueryWorldDataRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QueryWorldDataRet} returns this
 */
proto.Proto.QueryWorldDataRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DBWorldData world_data = 2;
 * @return {?proto.Proto.DBWorldData}
 */
proto.Proto.QueryWorldDataRet.prototype.getWorldData = function() {
  return /** @type{?proto.Proto.DBWorldData} */ (
    jspb.Message.getWrapperField(this, db_pb.DBWorldData, 2));
};


/**
 * @param {?proto.Proto.DBWorldData|undefined} value
 * @return {!proto.Proto.QueryWorldDataRet} returns this
*/
proto.Proto.QueryWorldDataRet.prototype.setWorldData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.QueryWorldDataRet} returns this
 */
proto.Proto.QueryWorldDataRet.prototype.clearWorldData = function() {
  return this.setWorldData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.QueryWorldDataRet.prototype.hasWorldData = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.SyncWorldData.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.SyncWorldData.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.SyncWorldData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.SyncWorldData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncWorldData.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldData: (f = msg.getWorldData()) && db_pb.DBWorldData.toObject(includeInstance, f),
    dieSnListList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.SyncWorldData}
 */
proto.Proto.SyncWorldData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.SyncWorldData;
  return proto.Proto.SyncWorldData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.SyncWorldData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.SyncWorldData}
 */
proto.Proto.SyncWorldData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new db_pb.DBWorldData;
      reader.readMessage(value,db_pb.DBWorldData.deserializeBinaryFromReader);
      msg.setWorldData(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setDieSnListList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.SyncWorldData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.SyncWorldData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.SyncWorldData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncWorldData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      db_pb.DBWorldData.serializeBinaryToWriter
    );
  }
  f = message.getDieSnListList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional DBWorldData world_data = 1;
 * @return {?proto.Proto.DBWorldData}
 */
proto.Proto.SyncWorldData.prototype.getWorldData = function() {
  return /** @type{?proto.Proto.DBWorldData} */ (
    jspb.Message.getWrapperField(this, db_pb.DBWorldData, 1));
};


/**
 * @param {?proto.Proto.DBWorldData|undefined} value
 * @return {!proto.Proto.SyncWorldData} returns this
*/
proto.Proto.SyncWorldData.prototype.setWorldData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.SyncWorldData} returns this
 */
proto.Proto.SyncWorldData.prototype.clearWorldData = function() {
  return this.setWorldData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.SyncWorldData.prototype.hasWorldData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int64 die_sn_list = 2;
 * @return {!Array<number>}
 */
proto.Proto.SyncWorldData.prototype.getDieSnListList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.Proto.SyncWorldData} returns this
 */
proto.Proto.SyncWorldData.prototype.setDieSnListList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.Proto.SyncWorldData} returns this
 */
proto.Proto.SyncWorldData.prototype.addDieSnList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.SyncWorldData} returns this
 */
proto.Proto.SyncWorldData.prototype.clearDieSnListList = function() {
  return this.setDieSnListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.WorldAction.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.WorldAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.WorldAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.WorldAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    targetSn: jspb.Message.getFieldWithDefault(msg, 2, 0),
    actionType: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.WorldAction}
 */
proto.Proto.WorldAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.WorldAction;
  return proto.Proto.WorldAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.WorldAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.WorldAction}
 */
proto.Proto.WorldAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetSn(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActionType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.WorldAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.WorldAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.WorldAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.WorldAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTargetSn();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getActionType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 target_type = 1;
 * @return {number}
 */
proto.Proto.WorldAction.prototype.getTargetType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.WorldAction} returns this
 */
proto.Proto.WorldAction.prototype.setTargetType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 target_sn = 2;
 * @return {number}
 */
proto.Proto.WorldAction.prototype.getTargetSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.WorldAction} returns this
 */
proto.Proto.WorldAction.prototype.setTargetSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 action_type = 3;
 * @return {number}
 */
proto.Proto.WorldAction.prototype.getActionType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.WorldAction} returns this
 */
proto.Proto.WorldAction.prototype.setActionType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.WorldActionRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.WorldActionRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.WorldActionRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.WorldActionRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.WorldActionRet}
 */
proto.Proto.WorldActionRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.WorldActionRet;
  return proto.Proto.WorldActionRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.WorldActionRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.WorldActionRet}
 */
proto.Proto.WorldActionRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.WorldActionRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.WorldActionRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.WorldActionRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.WorldActionRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.WorldActionRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.WorldActionRet} returns this
 */
proto.Proto.WorldActionRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.SyncWorldAction.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.SyncWorldAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.SyncWorldAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncWorldAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    targetSn: jspb.Message.getFieldWithDefault(msg, 2, 0),
    targetType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    actionType: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.SyncWorldAction}
 */
proto.Proto.SyncWorldAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.SyncWorldAction;
  return proto.Proto.SyncWorldAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.SyncWorldAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.SyncWorldAction}
 */
proto.Proto.SyncWorldAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlayerSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetSn(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActionType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.SyncWorldAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.SyncWorldAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.SyncWorldAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncWorldAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTargetSn();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTargetType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getActionType();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int64 player_sn = 1;
 * @return {number}
 */
proto.Proto.SyncWorldAction.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.SyncWorldAction} returns this
 */
proto.Proto.SyncWorldAction.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 target_sn = 2;
 * @return {number}
 */
proto.Proto.SyncWorldAction.prototype.getTargetSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.SyncWorldAction} returns this
 */
proto.Proto.SyncWorldAction.prototype.setTargetSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 target_type = 3;
 * @return {number}
 */
proto.Proto.SyncWorldAction.prototype.getTargetType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.SyncWorldAction} returns this
 */
proto.Proto.SyncWorldAction.prototype.setTargetType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 action_type = 4;
 * @return {number}
 */
proto.Proto.SyncWorldAction.prototype.getActionType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.SyncWorldAction} returns this
 */
proto.Proto.SyncWorldAction.prototype.setActionType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RemovePlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RemovePlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RemovePlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RemovePlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RemovePlayer}
 */
proto.Proto.RemovePlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RemovePlayer;
  return proto.Proto.RemovePlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RemovePlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RemovePlayer}
 */
proto.Proto.RemovePlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RemovePlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RemovePlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RemovePlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RemovePlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 player_sn = 1;
 * @return {number}
 */
proto.Proto.RemovePlayer.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RemovePlayer} returns this
 */
proto.Proto.RemovePlayer.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RequestSyncPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RequestSyncPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RequestSyncPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestSyncPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RequestSyncPlayer}
 */
proto.Proto.RequestSyncPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RequestSyncPlayer;
  return proto.Proto.RequestSyncPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RequestSyncPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RequestSyncPlayer}
 */
proto.Proto.RequestSyncPlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RequestSyncPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RequestSyncPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RequestSyncPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestSyncPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 player_sn = 1;
 * @return {number}
 */
proto.Proto.RequestSyncPlayer.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RequestSyncPlayer} returns this
 */
proto.Proto.RequestSyncPlayer.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.Role.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.Role.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.Role} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Role.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sn: jspb.Message.getFieldWithDefault(msg, 2, 0),
    templateId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    level: jspb.Message.getFieldWithDefault(msg, 4, 0),
    position: (f = msg.getPosition()) && db_pb.Vector3.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.Role}
 */
proto.Proto.Role.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.Role;
  return proto.Proto.Role.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.Role} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.Role}
 */
proto.Proto.Role.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSn(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTemplateId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 5:
      var value = new db_pb.Vector3;
      reader.readMessage(value,db_pb.Vector3.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.Role.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.Role.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.Role} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Role.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSn();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTemplateId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      db_pb.Vector3.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.Proto.Role.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.Role} returns this
 */
proto.Proto.Role.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 sn = 2;
 * @return {number}
 */
proto.Proto.Role.prototype.getSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Role} returns this
 */
proto.Proto.Role.prototype.setSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 template_id = 3;
 * @return {number}
 */
proto.Proto.Role.prototype.getTemplateId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Role} returns this
 */
proto.Proto.Role.prototype.setTemplateId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 level = 4;
 * @return {number}
 */
proto.Proto.Role.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Role} returns this
 */
proto.Proto.Role.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Vector3 position = 5;
 * @return {?proto.Proto.Vector3}
 */
proto.Proto.Role.prototype.getPosition = function() {
  return /** @type{?proto.Proto.Vector3} */ (
    jspb.Message.getWrapperField(this, db_pb.Vector3, 5));
};


/**
 * @param {?proto.Proto.Vector3|undefined} value
 * @return {!proto.Proto.Role} returns this
*/
proto.Proto.Role.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.Role} returns this
 */
proto.Proto.Role.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.Role.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.RoleAppear.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RoleAppear.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RoleAppear.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RoleAppear} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RoleAppear.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleList: jspb.Message.toObjectList(msg.getRoleList(),
    proto.Proto.Role.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RoleAppear}
 */
proto.Proto.RoleAppear.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RoleAppear;
  return proto.Proto.RoleAppear.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RoleAppear} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RoleAppear}
 */
proto.Proto.RoleAppear.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Proto.Role;
      reader.readMessage(value,proto.Proto.Role.deserializeBinaryFromReader);
      msg.addRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RoleAppear.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RoleAppear.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RoleAppear} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RoleAppear.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Proto.Role.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Role role = 1;
 * @return {!Array<!proto.Proto.Role>}
 */
proto.Proto.RoleAppear.prototype.getRoleList = function() {
  return /** @type{!Array<!proto.Proto.Role>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.Role, 1));
};


/**
 * @param {!Array<!proto.Proto.Role>} value
 * @return {!proto.Proto.RoleAppear} returns this
*/
proto.Proto.RoleAppear.prototype.setRoleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.Role=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.Role}
 */
proto.Proto.RoleAppear.prototype.addRole = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.Role, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.RoleAppear} returns this
 */
proto.Proto.RoleAppear.prototype.clearRoleList = function() {
  return this.setRoleList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RoleDisAppear.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RoleDisAppear.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RoleDisAppear} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RoleDisAppear.toObject = function(includeInstance, msg) {
  var f, obj = {
    sn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RoleDisAppear}
 */
proto.Proto.RoleDisAppear.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RoleDisAppear;
  return proto.Proto.RoleDisAppear.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RoleDisAppear} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RoleDisAppear}
 */
proto.Proto.RoleDisAppear.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RoleDisAppear.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RoleDisAppear.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RoleDisAppear} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RoleDisAppear.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 sn = 1;
 * @return {number}
 */
proto.Proto.RoleDisAppear.prototype.getSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RoleDisAppear} returns this
 */
proto.Proto.RoleDisAppear.prototype.setSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.Teleport.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.Teleport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.Teleport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Teleport.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastWorldSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerSn: jspb.Message.getFieldWithDefault(msg, 2, 0),
    account: jspb.Message.getFieldWithDefault(msg, 3, ""),
    player: (f = msg.getPlayer()) && db_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.Teleport}
 */
proto.Proto.Teleport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.Teleport;
  return proto.Proto.Teleport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.Teleport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.Teleport}
 */
proto.Proto.Teleport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastWorldSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerSn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 4:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.Teleport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.Teleport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.Teleport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Teleport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastWorldSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 last_world_sn = 1;
 * @return {number}
 */
proto.Proto.Teleport.prototype.getLastWorldSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Teleport} returns this
 */
proto.Proto.Teleport.prototype.setLastWorldSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 player_sn = 2;
 * @return {number}
 */
proto.Proto.Teleport.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Teleport} returns this
 */
proto.Proto.Teleport.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string account = 3;
 * @return {string}
 */
proto.Proto.Teleport.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.Teleport} returns this
 */
proto.Proto.Teleport.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Player player = 4;
 * @return {?proto.Proto.Player}
 */
proto.Proto.Teleport.prototype.getPlayer = function() {
  return /** @type{?proto.Proto.Player} */ (
    jspb.Message.getWrapperField(this, db_pb.Player, 4));
};


/**
 * @param {?proto.Proto.Player|undefined} value
 * @return {!proto.Proto.Teleport} returns this
*/
proto.Proto.Teleport.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.Teleport} returns this
 */
proto.Proto.Teleport.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.Teleport.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.TeleportAfter.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.TeleportAfter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.TeleportAfter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.TeleportAfter.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.TeleportAfter}
 */
proto.Proto.TeleportAfter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.TeleportAfter;
  return proto.Proto.TeleportAfter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.TeleportAfter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.TeleportAfter}
 */
proto.Proto.TeleportAfter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.TeleportAfter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.TeleportAfter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.TeleportAfter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.TeleportAfter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 player_sn = 1;
 * @return {number}
 */
proto.Proto.TeleportAfter.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.TeleportAfter} returns this
 */
proto.Proto.TeleportAfter.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.MoveByRotation.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.MoveByRotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.MoveByRotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.MoveByRotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    position: (f = msg.getPosition()) && db_pb.Vector3.toObject(includeInstance, f),
    rotation: (f = msg.getRotation()) && db_pb.Vector3.toObject(includeInstance, f),
    direction: (f = msg.getDirection()) && db_pb.Vector3.toObject(includeInstance, f),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.MoveByRotation}
 */
proto.Proto.MoveByRotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.MoveByRotation;
  return proto.Proto.MoveByRotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.MoveByRotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.MoveByRotation}
 */
proto.Proto.MoveByRotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerSn(value);
      break;
    case 2:
      var value = new db_pb.Vector3;
      reader.readMessage(value,db_pb.Vector3.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 3:
      var value = new db_pb.Vector3;
      reader.readMessage(value,db_pb.Vector3.deserializeBinaryFromReader);
      msg.setRotation(value);
      break;
    case 4:
      var value = new db_pb.Vector3;
      reader.readMessage(value,db_pb.Vector3.deserializeBinaryFromReader);
      msg.setDirection(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.MoveByRotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.MoveByRotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.MoveByRotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.MoveByRotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getRotation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      db_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getDirection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      db_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
};


/**
 * optional uint64 player_sn = 1;
 * @return {number}
 */
proto.Proto.MoveByRotation.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.MoveByRotation} returns this
 */
proto.Proto.MoveByRotation.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Vector3 position = 2;
 * @return {?proto.Proto.Vector3}
 */
proto.Proto.MoveByRotation.prototype.getPosition = function() {
  return /** @type{?proto.Proto.Vector3} */ (
    jspb.Message.getWrapperField(this, db_pb.Vector3, 2));
};


/**
 * @param {?proto.Proto.Vector3|undefined} value
 * @return {!proto.Proto.MoveByRotation} returns this
*/
proto.Proto.MoveByRotation.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.MoveByRotation} returns this
 */
proto.Proto.MoveByRotation.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.MoveByRotation.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Vector3 rotation = 3;
 * @return {?proto.Proto.Vector3}
 */
proto.Proto.MoveByRotation.prototype.getRotation = function() {
  return /** @type{?proto.Proto.Vector3} */ (
    jspb.Message.getWrapperField(this, db_pb.Vector3, 3));
};


/**
 * @param {?proto.Proto.Vector3|undefined} value
 * @return {!proto.Proto.MoveByRotation} returns this
*/
proto.Proto.MoveByRotation.prototype.setRotation = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.MoveByRotation} returns this
 */
proto.Proto.MoveByRotation.prototype.clearRotation = function() {
  return this.setRotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.MoveByRotation.prototype.hasRotation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Vector3 direction = 4;
 * @return {?proto.Proto.Vector3}
 */
proto.Proto.MoveByRotation.prototype.getDirection = function() {
  return /** @type{?proto.Proto.Vector3} */ (
    jspb.Message.getWrapperField(this, db_pb.Vector3, 4));
};


/**
 * @param {?proto.Proto.Vector3|undefined} value
 * @return {!proto.Proto.MoveByRotation} returns this
*/
proto.Proto.MoveByRotation.prototype.setDirection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.MoveByRotation} returns this
 */
proto.Proto.MoveByRotation.prototype.clearDirection = function() {
  return this.setDirection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.MoveByRotation.prototype.hasDirection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional float value = 5;
 * @return {number}
 */
proto.Proto.MoveByRotation.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.MoveByRotation} returns this
 */
proto.Proto.MoveByRotation.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.AddItem.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.AddItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.AddItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    num: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.AddItem}
 */
proto.Proto.AddItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.AddItem;
  return proto.Proto.AddItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.AddItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.AddItem}
 */
proto.Proto.AddItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.AddItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.AddItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.AddItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Proto.AddItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AddItem} returns this
 */
proto.Proto.AddItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 num = 2;
 * @return {number}
 */
proto.Proto.AddItem.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AddItem} returns this
 */
proto.Proto.AddItem.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.AddItemRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.AddItemRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.AddItemRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddItemRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    num: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.AddItemRet}
 */
proto.Proto.AddItemRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.AddItemRet;
  return proto.Proto.AddItemRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.AddItemRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.AddItemRet}
 */
proto.Proto.AddItemRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.AddItemRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.AddItemRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.AddItemRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddItemRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.AddItemRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AddItemRet} returns this
 */
proto.Proto.AddItemRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.Proto.AddItemRet.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AddItemRet} returns this
 */
proto.Proto.AddItemRet.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 num = 3;
 * @return {number}
 */
proto.Proto.AddItemRet.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AddItemRet} returns this
 */
proto.Proto.AddItemRet.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.AddExp.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.AddExp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.AddExp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddExp.toObject = function(includeInstance, msg) {
  var f, obj = {
    exp: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.AddExp}
 */
proto.Proto.AddExp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.AddExp;
  return proto.Proto.AddExp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.AddExp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.AddExp}
 */
proto.Proto.AddExp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.AddExp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.AddExp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.AddExp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddExp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExp();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 exp = 1;
 * @return {number}
 */
proto.Proto.AddExp.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AddExp} returns this
 */
proto.Proto.AddExp.prototype.setExp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.AddExpRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.AddExpRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.AddExpRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddExpRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    exp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.AddExpRet}
 */
proto.Proto.AddExpRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.AddExpRet;
  return proto.Proto.AddExpRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.AddExpRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.AddExpRet}
 */
proto.Proto.AddExpRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.AddExpRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.AddExpRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.AddExpRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddExpRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getExp();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.AddExpRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AddExpRet} returns this
 */
proto.Proto.AddExpRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 exp = 2;
 * @return {number}
 */
proto.Proto.AddExpRet.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AddExpRet} returns this
 */
proto.Proto.AddExpRet.prototype.setExp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.Dungeon.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.Dungeon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.Dungeon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Dungeon.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    star: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.Dungeon}
 */
proto.Proto.Dungeon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.Dungeon;
  return proto.Proto.Dungeon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.Dungeon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.Dungeon}
 */
proto.Proto.Dungeon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.Dungeon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.Dungeon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.Dungeon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Dungeon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStar();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Proto.Dungeon.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Dungeon} returns this
 */
proto.Proto.Dungeon.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 star = 2;
 * @return {number}
 */
proto.Proto.Dungeon.prototype.getStar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Dungeon} returns this
 */
proto.Proto.Dungeon.prototype.setStar = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.DungeonRs.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DungeonRs.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DungeonRs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DungeonRs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DungeonRs.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    itemListList: jspb.Message.toObjectList(msg.getItemListList(),
    db_pb.ItemBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DungeonRs}
 */
proto.Proto.DungeonRs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DungeonRs;
  return proto.Proto.DungeonRs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DungeonRs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DungeonRs}
 */
proto.Proto.DungeonRs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = new db_pb.ItemBase;
      reader.readMessage(value,db_pb.ItemBase.deserializeBinaryFromReader);
      msg.addItemList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DungeonRs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DungeonRs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DungeonRs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DungeonRs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getItemListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      db_pb.ItemBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.DungeonRs.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DungeonRs} returns this
 */
proto.Proto.DungeonRs.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ItemBase item_list = 2;
 * @return {!Array<!proto.Proto.ItemBase>}
 */
proto.Proto.DungeonRs.prototype.getItemListList = function() {
  return /** @type{!Array<!proto.Proto.ItemBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, db_pb.ItemBase, 2));
};


/**
 * @param {!Array<!proto.Proto.ItemBase>} value
 * @return {!proto.Proto.DungeonRs} returns this
*/
proto.Proto.DungeonRs.prototype.setItemListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.ItemBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.ItemBase}
 */
proto.Proto.DungeonRs.prototype.addItemList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.ItemBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.DungeonRs} returns this
 */
proto.Proto.DungeonRs.prototype.clearItemListList = function() {
  return this.setItemListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.Chat.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.Chat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.Chat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Chat.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    targetSn: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cross: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    serverId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    chatMsg: msg.getChatMsg_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.Chat}
 */
proto.Proto.Chat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.Chat;
  return proto.Proto.Chat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.Chat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.Chat}
 */
proto.Proto.Chat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.eChatChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetSn(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCross(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChatMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.Chat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.Chat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.Chat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Chat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTargetSn();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCross();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getChatMsg_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional eChatChannel channel = 1;
 * @return {!proto.Proto.eChatChannel}
 */
proto.Proto.Chat.prototype.getChannel = function() {
  return /** @type {!proto.Proto.eChatChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.eChatChannel} value
 * @return {!proto.Proto.Chat} returns this
 */
proto.Proto.Chat.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 target_sn = 2;
 * @return {number}
 */
proto.Proto.Chat.prototype.getTargetSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Chat} returns this
 */
proto.Proto.Chat.prototype.setTargetSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool cross = 3;
 * @return {boolean}
 */
proto.Proto.Chat.prototype.getCross = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.Chat} returns this
 */
proto.Proto.Chat.prototype.setCross = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 server_id = 4;
 * @return {number}
 */
proto.Proto.Chat.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Chat} returns this
 */
proto.Proto.Chat.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes chat_msg = 5;
 * @return {!(string|Uint8Array)}
 */
proto.Proto.Chat.prototype.getChatMsg = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes chat_msg = 5;
 * This is a type-conversion wrapper around `getChatMsg()`
 * @return {string}
 */
proto.Proto.Chat.prototype.getChatMsg_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChatMsg()));
};


/**
 * optional bytes chat_msg = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChatMsg()`
 * @return {!Uint8Array}
 */
proto.Proto.Chat.prototype.getChatMsg_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChatMsg()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Proto.Chat} returns this
 */
proto.Proto.Chat.prototype.setChatMsg = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ChatRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ChatRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ChatRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ChatRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ChatRet}
 */
proto.Proto.ChatRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ChatRet;
  return proto.Proto.ChatRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ChatRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ChatRet}
 */
proto.Proto.ChatRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ChatRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ChatRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ChatRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ChatRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.ChatRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ChatRet} returns this
 */
proto.Proto.ChatRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.SyncChat.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.SyncChat.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.SyncChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.SyncChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncChat.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chatsList: jspb.Message.toObjectList(msg.getChatsList(),
    proto.Proto.STChatInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.SyncChat}
 */
proto.Proto.SyncChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.SyncChat;
  return proto.Proto.SyncChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.SyncChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.SyncChat}
 */
proto.Proto.SyncChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.eChatChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = new proto.Proto.STChatInfo;
      reader.readMessage(value,proto.Proto.STChatInfo.deserializeBinaryFromReader);
      msg.addChats(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.SyncChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.SyncChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.SyncChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getChatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Proto.STChatInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional eChatChannel channel = 1;
 * @return {!proto.Proto.eChatChannel}
 */
proto.Proto.SyncChat.prototype.getChannel = function() {
  return /** @type {!proto.Proto.eChatChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.eChatChannel} value
 * @return {!proto.Proto.SyncChat} returns this
 */
proto.Proto.SyncChat.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated STChatInfo chats = 2;
 * @return {!Array<!proto.Proto.STChatInfo>}
 */
proto.Proto.SyncChat.prototype.getChatsList = function() {
  return /** @type{!Array<!proto.Proto.STChatInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.STChatInfo, 2));
};


/**
 * @param {!Array<!proto.Proto.STChatInfo>} value
 * @return {!proto.Proto.SyncChat} returns this
*/
proto.Proto.SyncChat.prototype.setChatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.STChatInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.STChatInfo}
 */
proto.Proto.SyncChat.prototype.addChats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.STChatInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.SyncChat} returns this
 */
proto.Proto.SyncChat.prototype.clearChatsList = function() {
  return this.setChatsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.GetChatRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.GetChatRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.GetChatRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetChatRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chatId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    targetSn: jspb.Message.getFieldWithDefault(msg, 3, 0),
    mySn: jspb.Message.getFieldWithDefault(msg, 4, 0),
    serverId: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.GetChatRecord}
 */
proto.Proto.GetChatRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.GetChatRecord;
  return proto.Proto.GetChatRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.GetChatRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.GetChatRecord}
 */
proto.Proto.GetChatRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.eChatChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChatId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetSn(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMySn(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.GetChatRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.GetChatRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.GetChatRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetChatRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getChatId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTargetSn();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMySn();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional eChatChannel channel = 1;
 * @return {!proto.Proto.eChatChannel}
 */
proto.Proto.GetChatRecord.prototype.getChannel = function() {
  return /** @type {!proto.Proto.eChatChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.eChatChannel} value
 * @return {!proto.Proto.GetChatRecord} returns this
 */
proto.Proto.GetChatRecord.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 chat_id = 2;
 * @return {number}
 */
proto.Proto.GetChatRecord.prototype.getChatId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GetChatRecord} returns this
 */
proto.Proto.GetChatRecord.prototype.setChatId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 target_sn = 3;
 * @return {number}
 */
proto.Proto.GetChatRecord.prototype.getTargetSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GetChatRecord} returns this
 */
proto.Proto.GetChatRecord.prototype.setTargetSn = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 my_sn = 4;
 * @return {number}
 */
proto.Proto.GetChatRecord.prototype.getMySn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GetChatRecord} returns this
 */
proto.Proto.GetChatRecord.prototype.setMySn = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 server_id = 5;
 * @return {number}
 */
proto.Proto.GetChatRecord.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GetChatRecord} returns this
 */
proto.Proto.GetChatRecord.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.STChatInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.STChatInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.STChatInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.STChatInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chatTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    chatId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cross: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    serverId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    chatMsg: msg.getChatMsg_asB64(),
    senderSn: jspb.Message.getFieldWithDefault(msg, 7, 0),
    senderName: msg.getSenderName_asB64(),
    recverSn: jspb.Message.getFieldWithDefault(msg, 9, 0),
    recverName: msg.getRecverName_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.STChatInfo}
 */
proto.Proto.STChatInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.STChatInfo;
  return proto.Proto.STChatInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.STChatInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.STChatInfo}
 */
proto.Proto.STChatInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.eChatChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChatTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChatId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCross(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChatMsg(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSenderSn(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSenderName(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecverSn(value);
      break;
    case 10:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRecverName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.STChatInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.STChatInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.STChatInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.STChatInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getChatTime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getChatId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCross();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getChatMsg_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getSenderSn();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getSenderName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getRecverSn();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getRecverName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
};


/**
 * optional eChatChannel channel = 1;
 * @return {!proto.Proto.eChatChannel}
 */
proto.Proto.STChatInfo.prototype.getChannel = function() {
  return /** @type {!proto.Proto.eChatChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.eChatChannel} value
 * @return {!proto.Proto.STChatInfo} returns this
 */
proto.Proto.STChatInfo.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 chat_time = 2;
 * @return {number}
 */
proto.Proto.STChatInfo.prototype.getChatTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.STChatInfo} returns this
 */
proto.Proto.STChatInfo.prototype.setChatTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 chat_id = 3;
 * @return {number}
 */
proto.Proto.STChatInfo.prototype.getChatId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.STChatInfo} returns this
 */
proto.Proto.STChatInfo.prototype.setChatId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool cross = 4;
 * @return {boolean}
 */
proto.Proto.STChatInfo.prototype.getCross = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.STChatInfo} returns this
 */
proto.Proto.STChatInfo.prototype.setCross = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 server_id = 5;
 * @return {number}
 */
proto.Proto.STChatInfo.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.STChatInfo} returns this
 */
proto.Proto.STChatInfo.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bytes chat_msg = 6;
 * @return {!(string|Uint8Array)}
 */
proto.Proto.STChatInfo.prototype.getChatMsg = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes chat_msg = 6;
 * This is a type-conversion wrapper around `getChatMsg()`
 * @return {string}
 */
proto.Proto.STChatInfo.prototype.getChatMsg_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChatMsg()));
};


/**
 * optional bytes chat_msg = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChatMsg()`
 * @return {!Uint8Array}
 */
proto.Proto.STChatInfo.prototype.getChatMsg_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChatMsg()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Proto.STChatInfo} returns this
 */
proto.Proto.STChatInfo.prototype.setChatMsg = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional int64 sender_sn = 7;
 * @return {number}
 */
proto.Proto.STChatInfo.prototype.getSenderSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.STChatInfo} returns this
 */
proto.Proto.STChatInfo.prototype.setSenderSn = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bytes sender_name = 8;
 * @return {!(string|Uint8Array)}
 */
proto.Proto.STChatInfo.prototype.getSenderName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes sender_name = 8;
 * This is a type-conversion wrapper around `getSenderName()`
 * @return {string}
 */
proto.Proto.STChatInfo.prototype.getSenderName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSenderName()));
};


/**
 * optional bytes sender_name = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSenderName()`
 * @return {!Uint8Array}
 */
proto.Proto.STChatInfo.prototype.getSenderName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSenderName()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Proto.STChatInfo} returns this
 */
proto.Proto.STChatInfo.prototype.setSenderName = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional int64 recver_sn = 9;
 * @return {number}
 */
proto.Proto.STChatInfo.prototype.getRecverSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.STChatInfo} returns this
 */
proto.Proto.STChatInfo.prototype.setRecverSn = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bytes recver_name = 10;
 * @return {!(string|Uint8Array)}
 */
proto.Proto.STChatInfo.prototype.getRecverName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes recver_name = 10;
 * This is a type-conversion wrapper around `getRecverName()`
 * @return {string}
 */
proto.Proto.STChatInfo.prototype.getRecverName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRecverName()));
};


/**
 * optional bytes recver_name = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRecverName()`
 * @return {!Uint8Array}
 */
proto.Proto.STChatInfo.prototype.getRecverName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRecverName()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Proto.STChatInfo} returns this
 */
proto.Proto.STChatInfo.prototype.setRecverName = function(value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.GetChatRecordRet.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.GetChatRecordRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.GetChatRecordRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.GetChatRecordRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetChatRecordRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chatsList: jspb.Message.toObjectList(msg.getChatsList(),
    proto.Proto.STChatInfo.toObject, includeInstance),
    mySn: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.GetChatRecordRet}
 */
proto.Proto.GetChatRecordRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.GetChatRecordRet;
  return proto.Proto.GetChatRecordRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.GetChatRecordRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.GetChatRecordRet}
 */
proto.Proto.GetChatRecordRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.eChatChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = new proto.Proto.STChatInfo;
      reader.readMessage(value,proto.Proto.STChatInfo.deserializeBinaryFromReader);
      msg.addChats(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMySn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.GetChatRecordRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.GetChatRecordRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.GetChatRecordRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetChatRecordRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getChatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Proto.STChatInfo.serializeBinaryToWriter
    );
  }
  f = message.getMySn();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional eChatChannel channel = 1;
 * @return {!proto.Proto.eChatChannel}
 */
proto.Proto.GetChatRecordRet.prototype.getChannel = function() {
  return /** @type {!proto.Proto.eChatChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.eChatChannel} value
 * @return {!proto.Proto.GetChatRecordRet} returns this
 */
proto.Proto.GetChatRecordRet.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated STChatInfo chats = 2;
 * @return {!Array<!proto.Proto.STChatInfo>}
 */
proto.Proto.GetChatRecordRet.prototype.getChatsList = function() {
  return /** @type{!Array<!proto.Proto.STChatInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.STChatInfo, 2));
};


/**
 * @param {!Array<!proto.Proto.STChatInfo>} value
 * @return {!proto.Proto.GetChatRecordRet} returns this
*/
proto.Proto.GetChatRecordRet.prototype.setChatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.STChatInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.STChatInfo}
 */
proto.Proto.GetChatRecordRet.prototype.addChats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.STChatInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.GetChatRecordRet} returns this
 */
proto.Proto.GetChatRecordRet.prototype.clearChatsList = function() {
  return this.setChatsList([]);
};


/**
 * optional int64 my_sn = 3;
 * @return {number}
 */
proto.Proto.GetChatRecordRet.prototype.getMySn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GetChatRecordRet} returns this
 */
proto.Proto.GetChatRecordRet.prototype.setMySn = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QueryAllPlayerName.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QueryAllPlayerName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QueryAllPlayerName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryAllPlayerName.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QueryAllPlayerName}
 */
proto.Proto.QueryAllPlayerName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QueryAllPlayerName;
  return proto.Proto.QueryAllPlayerName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QueryAllPlayerName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QueryAllPlayerName}
 */
proto.Proto.QueryAllPlayerName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QueryAllPlayerName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QueryAllPlayerName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QueryAllPlayerName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryAllPlayerName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.STPlayerSnName.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.STPlayerSnName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.STPlayerSnName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.STPlayerSnName.toObject = function(includeInstance, msg) {
  var f, obj = {
    sn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: msg.getName_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.STPlayerSnName}
 */
proto.Proto.STPlayerSnName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.STPlayerSnName;
  return proto.Proto.STPlayerSnName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.STPlayerSnName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.STPlayerSnName}
 */
proto.Proto.STPlayerSnName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSn(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.STPlayerSnName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.STPlayerSnName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.STPlayerSnName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.STPlayerSnName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional int64 sn = 1;
 * @return {number}
 */
proto.Proto.STPlayerSnName.prototype.getSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.STPlayerSnName} returns this
 */
proto.Proto.STPlayerSnName.prototype.setSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes name = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Proto.STPlayerSnName.prototype.getName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes name = 2;
 * This is a type-conversion wrapper around `getName()`
 * @return {string}
 */
proto.Proto.STPlayerSnName.prototype.getName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getName()));
};


/**
 * optional bytes name = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getName()`
 * @return {!Uint8Array}
 */
proto.Proto.STPlayerSnName.prototype.getName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getName()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Proto.STPlayerSnName} returns this
 */
proto.Proto.STPlayerSnName.prototype.setName = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.QueryAllPlayerNameRet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QueryAllPlayerNameRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QueryAllPlayerNameRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QueryAllPlayerNameRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryAllPlayerNameRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.Proto.STPlayerSnName.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QueryAllPlayerNameRet}
 */
proto.Proto.QueryAllPlayerNameRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QueryAllPlayerNameRet;
  return proto.Proto.QueryAllPlayerNameRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QueryAllPlayerNameRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QueryAllPlayerNameRet}
 */
proto.Proto.QueryAllPlayerNameRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Proto.STPlayerSnName;
      reader.readMessage(value,proto.Proto.STPlayerSnName.deserializeBinaryFromReader);
      msg.addInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QueryAllPlayerNameRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QueryAllPlayerNameRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QueryAllPlayerNameRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QueryAllPlayerNameRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Proto.STPlayerSnName.serializeBinaryToWriter
    );
  }
};


/**
 * repeated STPlayerSnName infos = 1;
 * @return {!Array<!proto.Proto.STPlayerSnName>}
 */
proto.Proto.QueryAllPlayerNameRet.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.Proto.STPlayerSnName>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.STPlayerSnName, 1));
};


/**
 * @param {!Array<!proto.Proto.STPlayerSnName>} value
 * @return {!proto.Proto.QueryAllPlayerNameRet} returns this
*/
proto.Proto.QueryAllPlayerNameRet.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.STPlayerSnName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.STPlayerSnName}
 */
proto.Proto.QueryAllPlayerNameRet.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.STPlayerSnName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.QueryAllPlayerNameRet} returns this
 */
proto.Proto.QueryAllPlayerNameRet.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.Mute.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.Mute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.Mute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Mute.toObject = function(includeInstance, msg) {
  var f, obj = {
    cross: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    serverId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    targetSn: jspb.Message.getFieldWithDefault(msg, 3, 0),
    mute: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.Mute}
 */
proto.Proto.Mute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.Mute;
  return proto.Proto.Mute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.Mute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.Mute}
 */
proto.Proto.Mute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCross(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetSn(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.Mute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.Mute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.Mute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.Mute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCross();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTargetSn();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMute();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool cross = 1;
 * @return {boolean}
 */
proto.Proto.Mute.prototype.getCross = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.Mute} returns this
 */
proto.Proto.Mute.prototype.setCross = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 server_id = 2;
 * @return {number}
 */
proto.Proto.Mute.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Mute} returns this
 */
proto.Proto.Mute.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 target_sn = 3;
 * @return {number}
 */
proto.Proto.Mute.prototype.getTargetSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.Mute} returns this
 */
proto.Proto.Mute.prototype.setTargetSn = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool mute = 4;
 * @return {boolean}
 */
proto.Proto.Mute.prototype.getMute = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.Mute} returns this
 */
proto.Proto.Mute.prototype.setMute = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.MuteRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.MuteRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.MuteRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.MuteRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    operatorSn: jspb.Message.getFieldWithDefault(msg, 2, 0),
    targetSn: jspb.Message.getFieldWithDefault(msg, 3, 0),
    mute: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.MuteRet}
 */
proto.Proto.MuteRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.MuteRet;
  return proto.Proto.MuteRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.MuteRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.MuteRet}
 */
proto.Proto.MuteRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperatorSn(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetSn(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.MuteRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.MuteRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.MuteRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.MuteRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOperatorSn();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTargetSn();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMute();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.MuteRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.MuteRet} returns this
 */
proto.Proto.MuteRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 operator_sn = 2;
 * @return {number}
 */
proto.Proto.MuteRet.prototype.getOperatorSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.MuteRet} returns this
 */
proto.Proto.MuteRet.prototype.setOperatorSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 target_sn = 3;
 * @return {number}
 */
proto.Proto.MuteRet.prototype.getTargetSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.MuteRet} returns this
 */
proto.Proto.MuteRet.prototype.setTargetSn = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool mute = 4;
 * @return {boolean}
 */
proto.Proto.MuteRet.prototype.getMute = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.MuteRet} returns this
 */
proto.Proto.MuteRet.prototype.setMute = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.GetTargetInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.GetTargetInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.GetTargetInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetTargetInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    cross: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    serverId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    targetSn: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.GetTargetInfo}
 */
proto.Proto.GetTargetInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.GetTargetInfo;
  return proto.Proto.GetTargetInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.GetTargetInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.GetTargetInfo}
 */
proto.Proto.GetTargetInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCross(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.GetTargetInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.GetTargetInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.GetTargetInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetTargetInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCross();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTargetSn();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bool cross = 1;
 * @return {boolean}
 */
proto.Proto.GetTargetInfo.prototype.getCross = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.GetTargetInfo} returns this
 */
proto.Proto.GetTargetInfo.prototype.setCross = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 server_id = 2;
 * @return {number}
 */
proto.Proto.GetTargetInfo.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GetTargetInfo} returns this
 */
proto.Proto.GetTargetInfo.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 target_sn = 3;
 * @return {number}
 */
proto.Proto.GetTargetInfo.prototype.getTargetSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GetTargetInfo} returns this
 */
proto.Proto.GetTargetInfo.prototype.setTargetSn = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.GetTargetInfoRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.GetTargetInfoRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.GetTargetInfoRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetTargetInfoRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cross: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    serverId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    targetSn: jspb.Message.getFieldWithDefault(msg, 4, 0),
    targetName: msg.getTargetName_asB64(),
    inBlacklist: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    inMute: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    resPic: msg.getResPic_asB64(),
    online: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.GetTargetInfoRet}
 */
proto.Proto.GetTargetInfoRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.GetTargetInfoRet;
  return proto.Proto.GetTargetInfoRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.GetTargetInfoRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.GetTargetInfoRet}
 */
proto.Proto.GetTargetInfoRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCross(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetSn(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTargetName(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInBlacklist(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInMute(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResPic(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.GetTargetInfoRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.GetTargetInfoRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.GetTargetInfoRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetTargetInfoRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCross();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTargetSn();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTargetName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getInBlacklist();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getInMute();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getResPic_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getOnline();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.GetTargetInfoRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GetTargetInfoRet} returns this
 */
proto.Proto.GetTargetInfoRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool cross = 2;
 * @return {boolean}
 */
proto.Proto.GetTargetInfoRet.prototype.getCross = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.GetTargetInfoRet} returns this
 */
proto.Proto.GetTargetInfoRet.prototype.setCross = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 server_id = 3;
 * @return {number}
 */
proto.Proto.GetTargetInfoRet.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GetTargetInfoRet} returns this
 */
proto.Proto.GetTargetInfoRet.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 target_sn = 4;
 * @return {number}
 */
proto.Proto.GetTargetInfoRet.prototype.getTargetSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.GetTargetInfoRet} returns this
 */
proto.Proto.GetTargetInfoRet.prototype.setTargetSn = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes target_name = 5;
 * @return {!(string|Uint8Array)}
 */
proto.Proto.GetTargetInfoRet.prototype.getTargetName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes target_name = 5;
 * This is a type-conversion wrapper around `getTargetName()`
 * @return {string}
 */
proto.Proto.GetTargetInfoRet.prototype.getTargetName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTargetName()));
};


/**
 * optional bytes target_name = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTargetName()`
 * @return {!Uint8Array}
 */
proto.Proto.GetTargetInfoRet.prototype.getTargetName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTargetName()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Proto.GetTargetInfoRet} returns this
 */
proto.Proto.GetTargetInfoRet.prototype.setTargetName = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bool in_blacklist = 6;
 * @return {boolean}
 */
proto.Proto.GetTargetInfoRet.prototype.getInBlacklist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.GetTargetInfoRet} returns this
 */
proto.Proto.GetTargetInfoRet.prototype.setInBlacklist = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool in_mute = 7;
 * @return {boolean}
 */
proto.Proto.GetTargetInfoRet.prototype.getInMute = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.GetTargetInfoRet} returns this
 */
proto.Proto.GetTargetInfoRet.prototype.setInMute = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bytes res_pic = 8;
 * @return {!(string|Uint8Array)}
 */
proto.Proto.GetTargetInfoRet.prototype.getResPic = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes res_pic = 8;
 * This is a type-conversion wrapper around `getResPic()`
 * @return {string}
 */
proto.Proto.GetTargetInfoRet.prototype.getResPic_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResPic()));
};


/**
 * optional bytes res_pic = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResPic()`
 * @return {!Uint8Array}
 */
proto.Proto.GetTargetInfoRet.prototype.getResPic_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResPic()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Proto.GetTargetInfoRet} returns this
 */
proto.Proto.GetTargetInfoRet.prototype.setResPic = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional bool online = 9;
 * @return {boolean}
 */
proto.Proto.GetTargetInfoRet.prototype.getOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.GetTargetInfoRet} returns this
 */
proto.Proto.GetTargetInfoRet.prototype.setOnline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BoardcastLogin.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BoardcastLogin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BoardcastLogin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BoardcastLogin.toObject = function(includeInstance, msg) {
  var f, obj = {
    sn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: msg.getName_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BoardcastLogin}
 */
proto.Proto.BoardcastLogin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BoardcastLogin;
  return proto.Proto.BoardcastLogin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BoardcastLogin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BoardcastLogin}
 */
proto.Proto.BoardcastLogin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSn(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BoardcastLogin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BoardcastLogin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BoardcastLogin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BoardcastLogin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional int64 sn = 1;
 * @return {number}
 */
proto.Proto.BoardcastLogin.prototype.getSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BoardcastLogin} returns this
 */
proto.Proto.BoardcastLogin.prototype.setSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes name = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Proto.BoardcastLogin.prototype.getName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes name = 2;
 * This is a type-conversion wrapper around `getName()`
 * @return {string}
 */
proto.Proto.BoardcastLogin.prototype.getName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getName()));
};


/**
 * optional bytes name = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getName()`
 * @return {!Uint8Array}
 */
proto.Proto.BoardcastLogin.prototype.getName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getName()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Proto.BoardcastLogin} returns this
 */
proto.Proto.BoardcastLogin.prototype.setName = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.STFriendInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.STFriendInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.STFriendInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.STFriendInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    level: jspb.Message.getFieldWithDefault(msg, 2, 0),
    vip: jspb.Message.getFieldWithDefault(msg, 3, 0),
    online: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.STFriendInfo}
 */
proto.Proto.STFriendInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.STFriendInfo;
  return proto.Proto.STFriendInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.STFriendInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.STFriendInfo}
 */
proto.Proto.STFriendInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVip(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOnline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.STFriendInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.STFriendInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.STFriendInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.STFriendInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getVip();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getOnline();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 player_sn = 1;
 * @return {number}
 */
proto.Proto.STFriendInfo.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.STFriendInfo} returns this
 */
proto.Proto.STFriendInfo.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 level = 2;
 * @return {number}
 */
proto.Proto.STFriendInfo.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.STFriendInfo} returns this
 */
proto.Proto.STFriendInfo.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 vip = 3;
 * @return {number}
 */
proto.Proto.STFriendInfo.prototype.getVip = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.STFriendInfo} returns this
 */
proto.Proto.STFriendInfo.prototype.setVip = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 online = 4;
 * @return {number}
 */
proto.Proto.STFriendInfo.prototype.getOnline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.STFriendInfo} returns this
 */
proto.Proto.STFriendInfo.prototype.setOnline = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.GetFriendList.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.GetFriendList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.GetFriendList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetFriendList.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.GetFriendList}
 */
proto.Proto.GetFriendList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.GetFriendList;
  return proto.Proto.GetFriendList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.GetFriendList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.GetFriendList}
 */
proto.Proto.GetFriendList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.GetFriendList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.GetFriendList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.GetFriendList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetFriendList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.GetFriendListRet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.GetFriendListRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.GetFriendListRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.GetFriendListRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetFriendListRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    friendsList: jspb.Message.toObjectList(msg.getFriendsList(),
    proto.Proto.STFriendInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.GetFriendListRet}
 */
proto.Proto.GetFriendListRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.GetFriendListRet;
  return proto.Proto.GetFriendListRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.GetFriendListRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.GetFriendListRet}
 */
proto.Proto.GetFriendListRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Proto.STFriendInfo;
      reader.readMessage(value,proto.Proto.STFriendInfo.deserializeBinaryFromReader);
      msg.addFriends(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.GetFriendListRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.GetFriendListRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.GetFriendListRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.GetFriendListRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFriendsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Proto.STFriendInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated STFriendInfo friends = 1;
 * @return {!Array<!proto.Proto.STFriendInfo>}
 */
proto.Proto.GetFriendListRet.prototype.getFriendsList = function() {
  return /** @type{!Array<!proto.Proto.STFriendInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.STFriendInfo, 1));
};


/**
 * @param {!Array<!proto.Proto.STFriendInfo>} value
 * @return {!proto.Proto.GetFriendListRet} returns this
*/
proto.Proto.GetFriendListRet.prototype.setFriendsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.STFriendInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.STFriendInfo}
 */
proto.Proto.GetFriendListRet.prototype.addFriends = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.STFriendInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.GetFriendListRet} returns this
 */
proto.Proto.GetFriendListRet.prototype.clearFriendsList = function() {
  return this.setFriendsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.AddFriend.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.AddFriend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.AddFriend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddFriend.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerSn: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.AddFriend}
 */
proto.Proto.AddFriend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.AddFriend;
  return proto.Proto.AddFriend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.AddFriend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.AddFriend}
 */
proto.Proto.AddFriend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlayerSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.AddFriend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.AddFriend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.AddFriend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddFriend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int32 server_id = 1;
 * @return {number}
 */
proto.Proto.AddFriend.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AddFriend} returns this
 */
proto.Proto.AddFriend.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 player_sn = 2;
 * @return {number}
 */
proto.Proto.AddFriend.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AddFriend} returns this
 */
proto.Proto.AddFriend.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.AddFriendRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.AddFriendRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.AddFriendRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddFriendRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.AddFriendRet}
 */
proto.Proto.AddFriendRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.AddFriendRet;
  return proto.Proto.AddFriendRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.AddFriendRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.AddFriendRet}
 */
proto.Proto.AddFriendRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.AddFriendRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.AddFriendRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.AddFriendRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.AddFriendRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.AddFriendRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.AddFriendRet} returns this
 */
proto.Proto.AddFriendRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DelFriend.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DelFriend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DelFriend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DelFriend.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DelFriend}
 */
proto.Proto.DelFriend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DelFriend;
  return proto.Proto.DelFriend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DelFriend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DelFriend}
 */
proto.Proto.DelFriend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DelFriend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DelFriend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DelFriend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DelFriend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 player_sn = 1;
 * @return {number}
 */
proto.Proto.DelFriend.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DelFriend} returns this
 */
proto.Proto.DelFriend.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DelFriendRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DelFriendRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DelFriendRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DelFriendRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DelFriendRet}
 */
proto.Proto.DelFriendRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DelFriendRet;
  return proto.Proto.DelFriendRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DelFriendRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DelFriendRet}
 */
proto.Proto.DelFriendRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DelFriendRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DelFriendRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DelFriendRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DelFriendRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.DelFriendRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DelFriendRet} returns this
 */
proto.Proto.DelFriendRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RefreshFriend.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RefreshFriend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RefreshFriend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RefreshFriend.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RefreshFriend}
 */
proto.Proto.RefreshFriend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RefreshFriend;
  return proto.Proto.RefreshFriend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RefreshFriend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RefreshFriend}
 */
proto.Proto.RefreshFriend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RefreshFriend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RefreshFriend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RefreshFriend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RefreshFriend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.RefreshFriendRet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RefreshFriendRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RefreshFriendRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RefreshFriendRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RefreshFriendRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    friendsList: jspb.Message.toObjectList(msg.getFriendsList(),
    proto.Proto.STFriendInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RefreshFriendRet}
 */
proto.Proto.RefreshFriendRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RefreshFriendRet;
  return proto.Proto.RefreshFriendRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RefreshFriendRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RefreshFriendRet}
 */
proto.Proto.RefreshFriendRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Proto.STFriendInfo;
      reader.readMessage(value,proto.Proto.STFriendInfo.deserializeBinaryFromReader);
      msg.addFriends(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RefreshFriendRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RefreshFriendRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RefreshFriendRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RefreshFriendRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFriendsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Proto.STFriendInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated STFriendInfo friends = 1;
 * @return {!Array<!proto.Proto.STFriendInfo>}
 */
proto.Proto.RefreshFriendRet.prototype.getFriendsList = function() {
  return /** @type{!Array<!proto.Proto.STFriendInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.STFriendInfo, 1));
};


/**
 * @param {!Array<!proto.Proto.STFriendInfo>} value
 * @return {!proto.Proto.RefreshFriendRet} returns this
*/
proto.Proto.RefreshFriendRet.prototype.setFriendsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.STFriendInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.STFriendInfo}
 */
proto.Proto.RefreshFriendRet.prototype.addFriends = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.STFriendInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.RefreshFriendRet} returns this
 */
proto.Proto.RefreshFriendRet.prototype.clearFriendsList = function() {
  return this.setFriendsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.JoinGuild.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.JoinGuild.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.JoinGuild} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.JoinGuild.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.JoinGuild}
 */
proto.Proto.JoinGuild.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.JoinGuild;
  return proto.Proto.JoinGuild.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.JoinGuild} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.JoinGuild}
 */
proto.Proto.JoinGuild.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGuildSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.JoinGuild.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.JoinGuild.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.JoinGuild} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.JoinGuild.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildSn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 guild_sn = 1;
 * @return {number}
 */
proto.Proto.JoinGuild.prototype.getGuildSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.JoinGuild} returns this
 */
proto.Proto.JoinGuild.prototype.setGuildSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.JoinGuildRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.JoinGuildRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.JoinGuildRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.JoinGuildRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    guildSn: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.JoinGuildRet}
 */
proto.Proto.JoinGuildRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.JoinGuildRet;
  return proto.Proto.JoinGuildRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.JoinGuildRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.JoinGuildRet}
 */
proto.Proto.JoinGuildRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGuildSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.JoinGuildRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.JoinGuildRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.JoinGuildRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.JoinGuildRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getGuildSn();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.JoinGuildRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.JoinGuildRet} returns this
 */
proto.Proto.JoinGuildRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 guild_sn = 2;
 * @return {number}
 */
proto.Proto.JoinGuildRet.prototype.getGuildSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.JoinGuildRet} returns this
 */
proto.Proto.JoinGuildRet.prototype.setGuildSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QuitGuild.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QuitGuild.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QuitGuild} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QuitGuild.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QuitGuild}
 */
proto.Proto.QuitGuild.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QuitGuild;
  return proto.Proto.QuitGuild.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QuitGuild} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QuitGuild}
 */
proto.Proto.QuitGuild.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGuildSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QuitGuild.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QuitGuild.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QuitGuild} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QuitGuild.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildSn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 guild_sn = 1;
 * @return {number}
 */
proto.Proto.QuitGuild.prototype.getGuildSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QuitGuild} returns this
 */
proto.Proto.QuitGuild.prototype.setGuildSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QuitGuildRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QuitGuildRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QuitGuildRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QuitGuildRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    guildSn: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QuitGuildRet}
 */
proto.Proto.QuitGuildRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QuitGuildRet;
  return proto.Proto.QuitGuildRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QuitGuildRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QuitGuildRet}
 */
proto.Proto.QuitGuildRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGuildSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QuitGuildRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QuitGuildRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QuitGuildRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QuitGuildRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getGuildSn();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.QuitGuildRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QuitGuildRet} returns this
 */
proto.Proto.QuitGuildRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 guild_sn = 2;
 * @return {number}
 */
proto.Proto.QuitGuildRet.prototype.getGuildSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QuitGuildRet} returns this
 */
proto.Proto.QuitGuildRet.prototype.setGuildSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.JoinTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.JoinTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.JoinTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.JoinTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.JoinTeam}
 */
proto.Proto.JoinTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.JoinTeam;
  return proto.Proto.JoinTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.JoinTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.JoinTeam}
 */
proto.Proto.JoinTeam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTeamSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.JoinTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.JoinTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.JoinTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.JoinTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamSn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 team_sn = 1;
 * @return {number}
 */
proto.Proto.JoinTeam.prototype.getTeamSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.JoinTeam} returns this
 */
proto.Proto.JoinTeam.prototype.setTeamSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.JoinTeamRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.JoinTeamRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.JoinTeamRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.JoinTeamRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    teamSn: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.JoinTeamRet}
 */
proto.Proto.JoinTeamRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.JoinTeamRet;
  return proto.Proto.JoinTeamRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.JoinTeamRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.JoinTeamRet}
 */
proto.Proto.JoinTeamRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTeamSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.JoinTeamRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.JoinTeamRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.JoinTeamRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.JoinTeamRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTeamSn();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.JoinTeamRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.JoinTeamRet} returns this
 */
proto.Proto.JoinTeamRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 team_sn = 2;
 * @return {number}
 */
proto.Proto.JoinTeamRet.prototype.getTeamSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.JoinTeamRet} returns this
 */
proto.Proto.JoinTeamRet.prototype.setTeamSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QuitTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QuitTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QuitTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QuitTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QuitTeam}
 */
proto.Proto.QuitTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QuitTeam;
  return proto.Proto.QuitTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QuitTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QuitTeam}
 */
proto.Proto.QuitTeam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTeamSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QuitTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QuitTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QuitTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QuitTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamSn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 team_sn = 1;
 * @return {number}
 */
proto.Proto.QuitTeam.prototype.getTeamSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QuitTeam} returns this
 */
proto.Proto.QuitTeam.prototype.setTeamSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.QuitTeamRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.QuitTeamRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.QuitTeamRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QuitTeamRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    teamSn: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.QuitTeamRet}
 */
proto.Proto.QuitTeamRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.QuitTeamRet;
  return proto.Proto.QuitTeamRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.QuitTeamRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.QuitTeamRet}
 */
proto.Proto.QuitTeamRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTeamSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.QuitTeamRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.QuitTeamRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.QuitTeamRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.QuitTeamRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTeamSn();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.QuitTeamRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QuitTeamRet} returns this
 */
proto.Proto.QuitTeamRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 team_sn = 2;
 * @return {number}
 */
proto.Proto.QuitTeamRet.prototype.getTeamSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.QuitTeamRet} returns this
 */
proto.Proto.QuitTeamRet.prototype.setTeamSn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.SyncPlayerProperty.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.SyncPlayerProperty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.SyncPlayerProperty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncPlayerProperty.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertyType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0),
    valueChange: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.SyncPlayerProperty}
 */
proto.Proto.SyncPlayerProperty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.SyncPlayerProperty;
  return proto.Proto.SyncPlayerProperty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.SyncPlayerProperty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.SyncPlayerProperty}
 */
proto.Proto.SyncPlayerProperty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.SyncPlayerProperty.PlayerPropertyType} */ (reader.readEnum());
      msg.setPropertyType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValueChange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.SyncPlayerProperty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.SyncPlayerProperty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.SyncPlayerProperty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncPlayerProperty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getValueChange();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.SyncPlayerProperty.PlayerPropertyType = {
  LEVEL: 0,
  EXP: 1,
  GOLD: 2,
  DIAMOND: 3
};

/**
 * optional PlayerPropertyType property_type = 1;
 * @return {!proto.Proto.SyncPlayerProperty.PlayerPropertyType}
 */
proto.Proto.SyncPlayerProperty.prototype.getPropertyType = function() {
  return /** @type {!proto.Proto.SyncPlayerProperty.PlayerPropertyType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.SyncPlayerProperty.PlayerPropertyType} value
 * @return {!proto.Proto.SyncPlayerProperty} returns this
 */
proto.Proto.SyncPlayerProperty.prototype.setPropertyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 value = 2;
 * @return {number}
 */
proto.Proto.SyncPlayerProperty.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.SyncPlayerProperty} returns this
 */
proto.Proto.SyncPlayerProperty.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 value_change = 3;
 * @return {number}
 */
proto.Proto.SyncPlayerProperty.prototype.getValueChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.SyncPlayerProperty} returns this
 */
proto.Proto.SyncPlayerProperty.prototype.setValueChange = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.SyncPlayerPropertyList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.SyncPlayerPropertyList.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.SyncPlayerPropertyList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.SyncPlayerPropertyList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncPlayerPropertyList.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.Proto.SyncPlayerProperty.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.SyncPlayerPropertyList}
 */
proto.Proto.SyncPlayerPropertyList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.SyncPlayerPropertyList;
  return proto.Proto.SyncPlayerPropertyList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.SyncPlayerPropertyList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.SyncPlayerPropertyList}
 */
proto.Proto.SyncPlayerPropertyList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Proto.SyncPlayerProperty;
      reader.readMessage(value,proto.Proto.SyncPlayerProperty.deserializeBinaryFromReader);
      msg.addProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.SyncPlayerPropertyList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.SyncPlayerPropertyList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.SyncPlayerPropertyList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.SyncPlayerPropertyList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Proto.SyncPlayerProperty.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SyncPlayerProperty properties = 1;
 * @return {!Array<!proto.Proto.SyncPlayerProperty>}
 */
proto.Proto.SyncPlayerPropertyList.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.Proto.SyncPlayerProperty>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.SyncPlayerProperty, 1));
};


/**
 * @param {!Array<!proto.Proto.SyncPlayerProperty>} value
 * @return {!proto.Proto.SyncPlayerPropertyList} returns this
*/
proto.Proto.SyncPlayerPropertyList.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.SyncPlayerProperty=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.SyncPlayerProperty}
 */
proto.Proto.SyncPlayerPropertyList.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.SyncPlayerProperty, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.SyncPlayerPropertyList} returns this
 */
proto.Proto.SyncPlayerPropertyList.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.RequestChangeTeam.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RequestChangeTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RequestChangeTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RequestChangeTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestChangeTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cardsList: jspb.Message.toObjectList(msg.getCardsList(),
    db_pb.CardTeam.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RequestChangeTeam}
 */
proto.Proto.RequestChangeTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RequestChangeTeam;
  return proto.Proto.RequestChangeTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RequestChangeTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RequestChangeTeam}
 */
proto.Proto.RequestChangeTeam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.Team.TeamType} */ (reader.readEnum());
      msg.setTeamType(value);
      break;
    case 2:
      var value = new db_pb.CardTeam;
      reader.readMessage(value,db_pb.CardTeam.deserializeBinaryFromReader);
      msg.addCards(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RequestChangeTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RequestChangeTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RequestChangeTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestChangeTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      db_pb.CardTeam.serializeBinaryToWriter
    );
  }
};


/**
 * optional Team.TeamType team_type = 1;
 * @return {!proto.Proto.Team.TeamType}
 */
proto.Proto.RequestChangeTeam.prototype.getTeamType = function() {
  return /** @type {!proto.Proto.Team.TeamType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.Team.TeamType} value
 * @return {!proto.Proto.RequestChangeTeam} returns this
 */
proto.Proto.RequestChangeTeam.prototype.setTeamType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated CardTeam cards = 2;
 * @return {!Array<!proto.Proto.CardTeam>}
 */
proto.Proto.RequestChangeTeam.prototype.getCardsList = function() {
  return /** @type{!Array<!proto.Proto.CardTeam>} */ (
    jspb.Message.getRepeatedWrapperField(this, db_pb.CardTeam, 2));
};


/**
 * @param {!Array<!proto.Proto.CardTeam>} value
 * @return {!proto.Proto.RequestChangeTeam} returns this
*/
proto.Proto.RequestChangeTeam.prototype.setCardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.CardTeam=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.CardTeam}
 */
proto.Proto.RequestChangeTeam.prototype.addCards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.CardTeam, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.RequestChangeTeam} returns this
 */
proto.Proto.RequestChangeTeam.prototype.clearCardsList = function() {
  return this.setCardsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.ReseponseChangeTeam.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ReseponseChangeTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ReseponseChangeTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ReseponseChangeTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReseponseChangeTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cardsList: jspb.Message.toObjectList(msg.getCardsList(),
    db_pb.CardTeam.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ReseponseChangeTeam}
 */
proto.Proto.ReseponseChangeTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ReseponseChangeTeam;
  return proto.Proto.ReseponseChangeTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ReseponseChangeTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ReseponseChangeTeam}
 */
proto.Proto.ReseponseChangeTeam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.Team.TeamType} */ (reader.readEnum());
      msg.setTeamType(value);
      break;
    case 2:
      var value = new db_pb.CardTeam;
      reader.readMessage(value,db_pb.CardTeam.deserializeBinaryFromReader);
      msg.addCards(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ReseponseChangeTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ReseponseChangeTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ReseponseChangeTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReseponseChangeTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      db_pb.CardTeam.serializeBinaryToWriter
    );
  }
};


/**
 * optional Team.TeamType team_type = 1;
 * @return {!proto.Proto.Team.TeamType}
 */
proto.Proto.ReseponseChangeTeam.prototype.getTeamType = function() {
  return /** @type {!proto.Proto.Team.TeamType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.Team.TeamType} value
 * @return {!proto.Proto.ReseponseChangeTeam} returns this
 */
proto.Proto.ReseponseChangeTeam.prototype.setTeamType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated CardTeam cards = 2;
 * @return {!Array<!proto.Proto.CardTeam>}
 */
proto.Proto.ReseponseChangeTeam.prototype.getCardsList = function() {
  return /** @type{!Array<!proto.Proto.CardTeam>} */ (
    jspb.Message.getRepeatedWrapperField(this, db_pb.CardTeam, 2));
};


/**
 * @param {!Array<!proto.Proto.CardTeam>} value
 * @return {!proto.Proto.ReseponseChangeTeam} returns this
*/
proto.Proto.ReseponseChangeTeam.prototype.setCardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.CardTeam=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.CardTeam}
 */
proto.Proto.ReseponseChangeTeam.prototype.addCards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.CardTeam, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.ReseponseChangeTeam} returns this
 */
proto.Proto.ReseponseChangeTeam.prototype.clearCardsList = function() {
  return this.setCardsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.ReqCardLevelUp.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ReqCardLevelUp.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ReqCardLevelUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ReqCardLevelUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqCardLevelUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    cardid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isonekey: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    materialList: jspb.Message.toObjectList(msg.getMaterialList(),
    db_pb.Item.toObject, includeInstance),
    operatorType: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ReqCardLevelUp}
 */
proto.Proto.ReqCardLevelUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ReqCardLevelUp;
  return proto.Proto.ReqCardLevelUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ReqCardLevelUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ReqCardLevelUp}
 */
proto.Proto.ReqCardLevelUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCardid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsonekey(value);
      break;
    case 3:
      var value = new db_pb.Item;
      reader.readMessage(value,db_pb.Item.deserializeBinaryFromReader);
      msg.addMaterial(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOperatorType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ReqCardLevelUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ReqCardLevelUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ReqCardLevelUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqCardLevelUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCardid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIsonekey();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMaterialList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      db_pb.Item.serializeBinaryToWriter
    );
  }
  f = message.getOperatorType();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 cardID = 1;
 * @return {number}
 */
proto.Proto.ReqCardLevelUp.prototype.getCardid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ReqCardLevelUp} returns this
 */
proto.Proto.ReqCardLevelUp.prototype.setCardid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool isOneKey = 2;
 * @return {boolean}
 */
proto.Proto.ReqCardLevelUp.prototype.getIsonekey = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.ReqCardLevelUp} returns this
 */
proto.Proto.ReqCardLevelUp.prototype.setIsonekey = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated Item material = 3;
 * @return {!Array<!proto.Proto.Item>}
 */
proto.Proto.ReqCardLevelUp.prototype.getMaterialList = function() {
  return /** @type{!Array<!proto.Proto.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, db_pb.Item, 3));
};


/**
 * @param {!Array<!proto.Proto.Item>} value
 * @return {!proto.Proto.ReqCardLevelUp} returns this
*/
proto.Proto.ReqCardLevelUp.prototype.setMaterialList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Proto.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.Item}
 */
proto.Proto.ReqCardLevelUp.prototype.addMaterial = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Proto.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.ReqCardLevelUp} returns this
 */
proto.Proto.ReqCardLevelUp.prototype.clearMaterialList = function() {
  return this.setMaterialList([]);
};


/**
 * optional int32 operator_type = 4;
 * @return {number}
 */
proto.Proto.ReqCardLevelUp.prototype.getOperatorType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ReqCardLevelUp} returns this
 */
proto.Proto.ReqCardLevelUp.prototype.setOperatorType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.ReqCardStar.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ReqCardStar.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ReqCardStar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ReqCardStar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqCardStar.toObject = function(includeInstance, msg) {
  var f, obj = {
    cardid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    materialitemsList: jspb.Message.toObjectList(msg.getMaterialitemsList(),
    db_pb.ItemBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ReqCardStar}
 */
proto.Proto.ReqCardStar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ReqCardStar;
  return proto.Proto.ReqCardStar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ReqCardStar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ReqCardStar}
 */
proto.Proto.ReqCardStar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCardid(value);
      break;
    case 2:
      var value = new db_pb.ItemBase;
      reader.readMessage(value,db_pb.ItemBase.deserializeBinaryFromReader);
      msg.addMaterialitems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ReqCardStar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ReqCardStar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ReqCardStar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqCardStar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCardid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMaterialitemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      db_pb.ItemBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 cardID = 1;
 * @return {number}
 */
proto.Proto.ReqCardStar.prototype.getCardid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ReqCardStar} returns this
 */
proto.Proto.ReqCardStar.prototype.setCardid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ItemBase materialItems = 2;
 * @return {!Array<!proto.Proto.ItemBase>}
 */
proto.Proto.ReqCardStar.prototype.getMaterialitemsList = function() {
  return /** @type{!Array<!proto.Proto.ItemBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, db_pb.ItemBase, 2));
};


/**
 * @param {!Array<!proto.Proto.ItemBase>} value
 * @return {!proto.Proto.ReqCardStar} returns this
*/
proto.Proto.ReqCardStar.prototype.setMaterialitemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.ItemBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.ItemBase}
 */
proto.Proto.ReqCardStar.prototype.addMaterialitems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.ItemBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.ReqCardStar} returns this
 */
proto.Proto.ReqCardStar.prototype.clearMaterialitemsList = function() {
  return this.setMaterialitemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.ReqCardQlt.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ReqCardQlt.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ReqCardQlt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ReqCardQlt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqCardQlt.toObject = function(includeInstance, msg) {
  var f, obj = {
    qltcardid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    materialitemsList: jspb.Message.toObjectList(msg.getMaterialitemsList(),
    db_pb.ItemBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ReqCardQlt}
 */
proto.Proto.ReqCardQlt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ReqCardQlt;
  return proto.Proto.ReqCardQlt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ReqCardQlt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ReqCardQlt}
 */
proto.Proto.ReqCardQlt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQltcardid(value);
      break;
    case 2:
      var value = new db_pb.ItemBase;
      reader.readMessage(value,db_pb.ItemBase.deserializeBinaryFromReader);
      msg.addMaterialitems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ReqCardQlt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ReqCardQlt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ReqCardQlt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqCardQlt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQltcardid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMaterialitemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      db_pb.ItemBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 qltCardID = 1;
 * @return {number}
 */
proto.Proto.ReqCardQlt.prototype.getQltcardid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ReqCardQlt} returns this
 */
proto.Proto.ReqCardQlt.prototype.setQltcardid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ItemBase materialItems = 2;
 * @return {!Array<!proto.Proto.ItemBase>}
 */
proto.Proto.ReqCardQlt.prototype.getMaterialitemsList = function() {
  return /** @type{!Array<!proto.Proto.ItemBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, db_pb.ItemBase, 2));
};


/**
 * @param {!Array<!proto.Proto.ItemBase>} value
 * @return {!proto.Proto.ReqCardQlt} returns this
*/
proto.Proto.ReqCardQlt.prototype.setMaterialitemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.ItemBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.ItemBase}
 */
proto.Proto.ReqCardQlt.prototype.addMaterialitems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.ItemBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.ReqCardQlt} returns this
 */
proto.Proto.ReqCardQlt.prototype.clearMaterialitemsList = function() {
  return this.setMaterialitemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ResCardLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ResCardLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ResCardLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResCardLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    rescode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isonekey: jspb.Message.getFieldWithDefault(msg, 2, 0),
    newcard: (f = msg.getNewcard()) && db_pb.Card.toObject(includeInstance, f),
    detalfightpower: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ResCardLevel}
 */
proto.Proto.ResCardLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ResCardLevel;
  return proto.Proto.ResCardLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ResCardLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ResCardLevel}
 */
proto.Proto.ResCardLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.ResCardLevel.ResCode} */ (reader.readEnum());
      msg.setRescode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsonekey(value);
      break;
    case 3:
      var value = new db_pb.Card;
      reader.readMessage(value,db_pb.Card.deserializeBinaryFromReader);
      msg.setNewcard(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDetalfightpower(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ResCardLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ResCardLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ResCardLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResCardLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRescode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIsonekey();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNewcard();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      db_pb.Card.serializeBinaryToWriter
    );
  }
  f = message.getDetalfightpower();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.ResCardLevel.ResCode = {
  SUCCEED: 0,
  PLAYERLEVELLIMIT: 1,
  NOITEM: 2,
  CARDLEVELMAX: 3,
  NOTREACHQLT: 4,
  ERROR: 5
};

/**
 * optional ResCode rescode = 1;
 * @return {!proto.Proto.ResCardLevel.ResCode}
 */
proto.Proto.ResCardLevel.prototype.getRescode = function() {
  return /** @type {!proto.Proto.ResCardLevel.ResCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.ResCardLevel.ResCode} value
 * @return {!proto.Proto.ResCardLevel} returns this
 */
proto.Proto.ResCardLevel.prototype.setRescode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 isOneKey = 2;
 * @return {number}
 */
proto.Proto.ResCardLevel.prototype.getIsonekey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResCardLevel} returns this
 */
proto.Proto.ResCardLevel.prototype.setIsonekey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Card newcard = 3;
 * @return {?proto.Proto.Card}
 */
proto.Proto.ResCardLevel.prototype.getNewcard = function() {
  return /** @type{?proto.Proto.Card} */ (
    jspb.Message.getWrapperField(this, db_pb.Card, 3));
};


/**
 * @param {?proto.Proto.Card|undefined} value
 * @return {!proto.Proto.ResCardLevel} returns this
*/
proto.Proto.ResCardLevel.prototype.setNewcard = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.ResCardLevel} returns this
 */
proto.Proto.ResCardLevel.prototype.clearNewcard = function() {
  return this.setNewcard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.ResCardLevel.prototype.hasNewcard = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 detalfightpower = 4;
 * @return {number}
 */
proto.Proto.ResCardLevel.prototype.getDetalfightpower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResCardLevel} returns this
 */
proto.Proto.ResCardLevel.prototype.setDetalfightpower = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ResCardStar.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ResCardStar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ResCardStar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResCardStar.toObject = function(includeInstance, msg) {
  var f, obj = {
    starrescode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    newcard: (f = msg.getNewcard()) && db_pb.Card.toObject(includeInstance, f),
    detalfightpower: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ResCardStar}
 */
proto.Proto.ResCardStar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ResCardStar;
  return proto.Proto.ResCardStar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ResCardStar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ResCardStar}
 */
proto.Proto.ResCardStar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.ResCardStar.StarResCode} */ (reader.readEnum());
      msg.setStarrescode(value);
      break;
    case 2:
      var value = new db_pb.Card;
      reader.readMessage(value,db_pb.Card.deserializeBinaryFromReader);
      msg.setNewcard(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDetalfightpower(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ResCardStar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ResCardStar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ResCardStar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResCardStar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarrescode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNewcard();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.Card.serializeBinaryToWriter
    );
  }
  f = message.getDetalfightpower();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.ResCardStar.StarResCode = {
  SUCCED: 0,
  NOTREACHLV: 1,
  NOITEM: 2,
  STARMAX: 3,
  UNKNOWNERROR: 5
};

/**
 * optional StarResCode starResCode = 1;
 * @return {!proto.Proto.ResCardStar.StarResCode}
 */
proto.Proto.ResCardStar.prototype.getStarrescode = function() {
  return /** @type {!proto.Proto.ResCardStar.StarResCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.ResCardStar.StarResCode} value
 * @return {!proto.Proto.ResCardStar} returns this
 */
proto.Proto.ResCardStar.prototype.setStarrescode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Card newcard = 2;
 * @return {?proto.Proto.Card}
 */
proto.Proto.ResCardStar.prototype.getNewcard = function() {
  return /** @type{?proto.Proto.Card} */ (
    jspb.Message.getWrapperField(this, db_pb.Card, 2));
};


/**
 * @param {?proto.Proto.Card|undefined} value
 * @return {!proto.Proto.ResCardStar} returns this
*/
proto.Proto.ResCardStar.prototype.setNewcard = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.ResCardStar} returns this
 */
proto.Proto.ResCardStar.prototype.clearNewcard = function() {
  return this.setNewcard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.ResCardStar.prototype.hasNewcard = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 detalfightpower = 3;
 * @return {number}
 */
proto.Proto.ResCardStar.prototype.getDetalfightpower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResCardStar} returns this
 */
proto.Proto.ResCardStar.prototype.setDetalfightpower = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ResCardQlt.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ResCardQlt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ResCardQlt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResCardQlt.toObject = function(includeInstance, msg) {
  var f, obj = {
    qltrescode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    newcard: (f = msg.getNewcard()) && db_pb.Card.toObject(includeInstance, f),
    detalfightpower: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ResCardQlt}
 */
proto.Proto.ResCardQlt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ResCardQlt;
  return proto.Proto.ResCardQlt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ResCardQlt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ResCardQlt}
 */
proto.Proto.ResCardQlt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.ResCardQlt.ResQltCode} */ (reader.readEnum());
      msg.setQltrescode(value);
      break;
    case 2:
      var value = new db_pb.Card;
      reader.readMessage(value,db_pb.Card.deserializeBinaryFromReader);
      msg.setNewcard(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDetalfightpower(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ResCardQlt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ResCardQlt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ResCardQlt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResCardQlt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQltrescode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNewcard();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.Card.serializeBinaryToWriter
    );
  }
  f = message.getDetalfightpower();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.ResCardQlt.ResQltCode = {
  SUCCED: 0,
  NOTREACHSTAR: 1,
  NOITEM: 2,
  QLTMAX: 3,
  UNKNOWNERROR: 5
};

/**
 * optional ResQltCode QLtResCode = 1;
 * @return {!proto.Proto.ResCardQlt.ResQltCode}
 */
proto.Proto.ResCardQlt.prototype.getQltrescode = function() {
  return /** @type {!proto.Proto.ResCardQlt.ResQltCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.ResCardQlt.ResQltCode} value
 * @return {!proto.Proto.ResCardQlt} returns this
 */
proto.Proto.ResCardQlt.prototype.setQltrescode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Card newcard = 2;
 * @return {?proto.Proto.Card}
 */
proto.Proto.ResCardQlt.prototype.getNewcard = function() {
  return /** @type{?proto.Proto.Card} */ (
    jspb.Message.getWrapperField(this, db_pb.Card, 2));
};


/**
 * @param {?proto.Proto.Card|undefined} value
 * @return {!proto.Proto.ResCardQlt} returns this
*/
proto.Proto.ResCardQlt.prototype.setNewcard = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.ResCardQlt} returns this
 */
proto.Proto.ResCardQlt.prototype.clearNewcard = function() {
  return this.setNewcard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.ResCardQlt.prototype.hasNewcard = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 detalfightpower = 3;
 * @return {number}
 */
proto.Proto.ResCardQlt.prototype.getDetalfightpower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResCardQlt} returns this
 */
proto.Proto.ResCardQlt.prototype.setDetalfightpower = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ResInten.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ResInten.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ResInten} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResInten.toObject = function(includeInstance, msg) {
  var f, obj = {
    myintenrescode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    newcard: (f = msg.getNewcard()) && db_pb.Card.toObject(includeInstance, f),
    detalfightpower: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ResInten}
 */
proto.Proto.ResInten.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ResInten;
  return proto.Proto.ResInten.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ResInten} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ResInten}
 */
proto.Proto.ResInten.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.ResInten.ResIntenCode} */ (reader.readEnum());
      msg.setMyintenrescode(value);
      break;
    case 2:
      var value = new db_pb.Card;
      reader.readMessage(value,db_pb.Card.deserializeBinaryFromReader);
      msg.setNewcard(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDetalfightpower(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ResInten.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ResInten.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ResInten} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResInten.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMyintenrescode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNewcard();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.Card.serializeBinaryToWriter
    );
  }
  f = message.getDetalfightpower();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Proto.ResInten.ResIntenCode = {
  SUCCED: 0,
  NOTREACHCONDITION: 1,
  NOITEM: 2,
  INTENMAX: 3,
  UNKNOWNERROR: 5
};

/**
 * optional ResIntenCode MyIntenResCode = 1;
 * @return {!proto.Proto.ResInten.ResIntenCode}
 */
proto.Proto.ResInten.prototype.getMyintenrescode = function() {
  return /** @type {!proto.Proto.ResInten.ResIntenCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.ResInten.ResIntenCode} value
 * @return {!proto.Proto.ResInten} returns this
 */
proto.Proto.ResInten.prototype.setMyintenrescode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Card newcard = 2;
 * @return {?proto.Proto.Card}
 */
proto.Proto.ResInten.prototype.getNewcard = function() {
  return /** @type{?proto.Proto.Card} */ (
    jspb.Message.getWrapperField(this, db_pb.Card, 2));
};


/**
 * @param {?proto.Proto.Card|undefined} value
 * @return {!proto.Proto.ResInten} returns this
*/
proto.Proto.ResInten.prototype.setNewcard = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.ResInten} returns this
 */
proto.Proto.ResInten.prototype.clearNewcard = function() {
  return this.setNewcard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.ResInten.prototype.hasNewcard = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 detalfightpower = 3;
 * @return {number}
 */
proto.Proto.ResInten.prototype.getDetalfightpower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResInten} returns this
 */
proto.Proto.ResInten.prototype.setDetalfightpower = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ReuqestGMAddItem.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ReuqestGMAddItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ReuqestGMAddItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReuqestGMAddItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    num: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ReuqestGMAddItem}
 */
proto.Proto.ReuqestGMAddItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ReuqestGMAddItem;
  return proto.Proto.ReuqestGMAddItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ReuqestGMAddItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ReuqestGMAddItem}
 */
proto.Proto.ReuqestGMAddItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ReuqestGMAddItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ReuqestGMAddItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ReuqestGMAddItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReuqestGMAddItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.Proto.ReuqestGMAddItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ReuqestGMAddItem} returns this
 */
proto.Proto.ReuqestGMAddItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 num = 3;
 * @return {number}
 */
proto.Proto.ReuqestGMAddItem.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ReuqestGMAddItem} returns this
 */
proto.Proto.ReuqestGMAddItem.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ItemChange.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ItemChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ItemChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ItemChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    sn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    num: jspb.Message.getFieldWithDefault(msg, 3, 0),
    delta: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bagindex: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ItemChange}
 */
proto.Proto.ItemChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ItemChange;
  return proto.Proto.ItemChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ItemChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ItemChange}
 */
proto.Proto.ItemChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDelta(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBagindex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ItemChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ItemChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ItemChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ItemChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDelta();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getBagindex();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional uint64 sn = 1;
 * @return {number}
 */
proto.Proto.ItemChange.prototype.getSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ItemChange} returns this
 */
proto.Proto.ItemChange.prototype.setSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.Proto.ItemChange.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ItemChange} returns this
 */
proto.Proto.ItemChange.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 num = 3;
 * @return {number}
 */
proto.Proto.ItemChange.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ItemChange} returns this
 */
proto.Proto.ItemChange.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 delta = 4;
 * @return {number}
 */
proto.Proto.ItemChange.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ItemChange} returns this
 */
proto.Proto.ItemChange.prototype.setDelta = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 bagIndex = 11;
 * @return {number}
 */
proto.Proto.ItemChange.prototype.getBagindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ItemChange} returns this
 */
proto.Proto.ItemChange.prototype.setBagindex = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.PushItemChange.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.PushItemChange.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.PushItemChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.PushItemChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PushItemChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    changesList: jspb.Message.toObjectList(msg.getChangesList(),
    proto.Proto.ItemChange.toObject, includeInstance),
    source: jspb.Message.getFieldWithDefault(msg, 2, 0),
    showList: jspb.Message.toObjectList(msg.getShowList(),
    proto.Proto.PushItemChange.ChangeShow.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.PushItemChange}
 */
proto.Proto.PushItemChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.PushItemChange;
  return proto.Proto.PushItemChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.PushItemChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.PushItemChange}
 */
proto.Proto.PushItemChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Proto.ItemChange;
      reader.readMessage(value,proto.Proto.ItemChange.deserializeBinaryFromReader);
      msg.addChanges(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSource(value);
      break;
    case 3:
      var value = new proto.Proto.PushItemChange.ChangeShow;
      reader.readMessage(value,proto.Proto.PushItemChange.ChangeShow.deserializeBinaryFromReader);
      msg.addShow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.PushItemChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.PushItemChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.PushItemChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PushItemChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Proto.ItemChange.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getShowList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.Proto.PushItemChange.ChangeShow.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.PushItemChange.ChangeShow.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.PushItemChange.ChangeShow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.PushItemChange.ChangeShow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PushItemChange.ChangeShow.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    delta: jspb.Message.getFieldWithDefault(msg, 2, 0),
    replace: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.PushItemChange.ChangeShow}
 */
proto.Proto.PushItemChange.ChangeShow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.PushItemChange.ChangeShow;
  return proto.Proto.PushItemChange.ChangeShow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.PushItemChange.ChangeShow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.PushItemChange.ChangeShow}
 */
proto.Proto.PushItemChange.ChangeShow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDelta(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReplace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.PushItemChange.ChangeShow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.PushItemChange.ChangeShow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.PushItemChange.ChangeShow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.PushItemChange.ChangeShow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDelta();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getReplace();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Proto.PushItemChange.ChangeShow.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.PushItemChange.ChangeShow} returns this
 */
proto.Proto.PushItemChange.ChangeShow.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 delta = 2;
 * @return {number}
 */
proto.Proto.PushItemChange.ChangeShow.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.PushItemChange.ChangeShow} returns this
 */
proto.Proto.PushItemChange.ChangeShow.prototype.setDelta = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 replace = 3;
 * @return {number}
 */
proto.Proto.PushItemChange.ChangeShow.prototype.getReplace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.PushItemChange.ChangeShow} returns this
 */
proto.Proto.PushItemChange.ChangeShow.prototype.setReplace = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated ItemChange changes = 1;
 * @return {!Array<!proto.Proto.ItemChange>}
 */
proto.Proto.PushItemChange.prototype.getChangesList = function() {
  return /** @type{!Array<!proto.Proto.ItemChange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.ItemChange, 1));
};


/**
 * @param {!Array<!proto.Proto.ItemChange>} value
 * @return {!proto.Proto.PushItemChange} returns this
*/
proto.Proto.PushItemChange.prototype.setChangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.ItemChange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.ItemChange}
 */
proto.Proto.PushItemChange.prototype.addChanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.ItemChange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.PushItemChange} returns this
 */
proto.Proto.PushItemChange.prototype.clearChangesList = function() {
  return this.setChangesList([]);
};


/**
 * optional int32 source = 2;
 * @return {number}
 */
proto.Proto.PushItemChange.prototype.getSource = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.PushItemChange} returns this
 */
proto.Proto.PushItemChange.prototype.setSource = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated ChangeShow show = 3;
 * @return {!Array<!proto.Proto.PushItemChange.ChangeShow>}
 */
proto.Proto.PushItemChange.prototype.getShowList = function() {
  return /** @type{!Array<!proto.Proto.PushItemChange.ChangeShow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.PushItemChange.ChangeShow, 3));
};


/**
 * @param {!Array<!proto.Proto.PushItemChange.ChangeShow>} value
 * @return {!proto.Proto.PushItemChange} returns this
*/
proto.Proto.PushItemChange.prototype.setShowList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Proto.PushItemChange.ChangeShow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.PushItemChange.ChangeShow}
 */
proto.Proto.PushItemChange.prototype.addShow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Proto.PushItemChange.ChangeShow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.PushItemChange} returns this
 */
proto.Proto.PushItemChange.prototype.clearShowList = function() {
  return this.setShowList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RequestUseItem.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RequestUseItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RequestUseItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestUseItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    sn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    num: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RequestUseItem}
 */
proto.Proto.RequestUseItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RequestUseItem;
  return proto.Proto.RequestUseItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RequestUseItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RequestUseItem}
 */
proto.Proto.RequestUseItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RequestUseItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RequestUseItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RequestUseItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestUseItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 sn = 1;
 * @return {number}
 */
proto.Proto.RequestUseItem.prototype.getSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RequestUseItem} returns this
 */
proto.Proto.RequestUseItem.prototype.setSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 num = 2;
 * @return {number}
 */
proto.Proto.RequestUseItem.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RequestUseItem} returns this
 */
proto.Proto.RequestUseItem.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ResponseUseItem.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ResponseUseItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ResponseUseItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseUseItem.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ResponseUseItem}
 */
proto.Proto.ResponseUseItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ResponseUseItem;
  return proto.Proto.ResponseUseItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ResponseUseItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ResponseUseItem}
 */
proto.Proto.ResponseUseItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ResponseUseItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ResponseUseItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ResponseUseItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseUseItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RequestSortBag.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RequestSortBag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RequestSortBag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestSortBag.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RequestSortBag}
 */
proto.Proto.RequestSortBag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RequestSortBag;
  return proto.Proto.RequestSortBag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RequestSortBag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RequestSortBag}
 */
proto.Proto.RequestSortBag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RequestSortBag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RequestSortBag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RequestSortBag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestSortBag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.ResponseSortBag.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ResponseSortBag.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ResponseSortBag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ResponseSortBag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseSortBag.toObject = function(includeInstance, msg) {
  var f, obj = {
    bagsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    db_pb.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ResponseSortBag}
 */
proto.Proto.ResponseSortBag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ResponseSortBag;
  return proto.Proto.ResponseSortBag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ResponseSortBag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ResponseSortBag}
 */
proto.Proto.ResponseSortBag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setBagsList(value);
      break;
    case 2:
      var value = new db_pb.Item;
      reader.readMessage(value,db_pb.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ResponseSortBag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ResponseSortBag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ResponseSortBag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseSortBag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBagsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      db_pb.Item.serializeBinaryToWriter
    );
  }
};


/**
 * repeated uint64 bags = 1;
 * @return {!Array<number>}
 */
proto.Proto.ResponseSortBag.prototype.getBagsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.Proto.ResponseSortBag} returns this
 */
proto.Proto.ResponseSortBag.prototype.setBagsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.Proto.ResponseSortBag} returns this
 */
proto.Proto.ResponseSortBag.prototype.addBags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.ResponseSortBag} returns this
 */
proto.Proto.ResponseSortBag.prototype.clearBagsList = function() {
  return this.setBagsList([]);
};


/**
 * repeated Item items = 2;
 * @return {!Array<!proto.Proto.Item>}
 */
proto.Proto.ResponseSortBag.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.Proto.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, db_pb.Item, 2));
};


/**
 * @param {!Array<!proto.Proto.Item>} value
 * @return {!proto.Proto.ResponseSortBag} returns this
*/
proto.Proto.ResponseSortBag.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.Item}
 */
proto.Proto.ResponseSortBag.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.ResponseSortBag} returns this
 */
proto.Proto.ResponseSortBag.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RequestSellItem.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RequestSellItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RequestSellItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestSellItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    sn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    num: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RequestSellItem}
 */
proto.Proto.RequestSellItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RequestSellItem;
  return proto.Proto.RequestSellItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RequestSellItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RequestSellItem}
 */
proto.Proto.RequestSellItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RequestSellItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RequestSellItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RequestSellItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestSellItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 sn = 1;
 * @return {number}
 */
proto.Proto.RequestSellItem.prototype.getSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RequestSellItem} returns this
 */
proto.Proto.RequestSellItem.prototype.setSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 num = 2;
 * @return {number}
 */
proto.Proto.RequestSellItem.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RequestSellItem} returns this
 */
proto.Proto.RequestSellItem.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ResponseSellItem.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ResponseSellItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ResponseSellItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseSellItem.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ResponseSellItem}
 */
proto.Proto.ResponseSellItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ResponseSellItem;
  return proto.Proto.ResponseSellItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ResponseSellItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ResponseSellItem}
 */
proto.Proto.ResponseSellItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ResponseSellItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ResponseSellItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ResponseSellItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseSellItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.RequestGachaPull.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.RequestGachaPull.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.RequestGachaPull} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestGachaPull.toObject = function(includeInstance, msg) {
  var f, obj = {
    poolid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    single: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    costtype: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.RequestGachaPull}
 */
proto.Proto.RequestGachaPull.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.RequestGachaPull;
  return proto.Proto.RequestGachaPull.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.RequestGachaPull} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.RequestGachaPull}
 */
proto.Proto.RequestGachaPull.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPoolid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSingle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCosttype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.RequestGachaPull.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.RequestGachaPull.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.RequestGachaPull} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.RequestGachaPull.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoolid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSingle();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCosttype();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional int32 poolId = 1;
 * @return {number}
 */
proto.Proto.RequestGachaPull.prototype.getPoolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RequestGachaPull} returns this
 */
proto.Proto.RequestGachaPull.prototype.setPoolid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool single = 2;
 * @return {boolean}
 */
proto.Proto.RequestGachaPull.prototype.getSingle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Proto.RequestGachaPull} returns this
 */
proto.Proto.RequestGachaPull.prototype.setSingle = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 costType = 3;
 * @return {number}
 */
proto.Proto.RequestGachaPull.prototype.getCosttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.RequestGachaPull} returns this
 */
proto.Proto.RequestGachaPull.prototype.setCosttype = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.ResponseGachaPull.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ResponseGachaPull.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ResponseGachaPull.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ResponseGachaPull} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseGachaPull.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.Proto.PushItemChange.ChangeShow.toObject, includeInstance),
    poolid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ResponseGachaPull}
 */
proto.Proto.ResponseGachaPull.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ResponseGachaPull;
  return proto.Proto.ResponseGachaPull.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ResponseGachaPull} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ResponseGachaPull}
 */
proto.Proto.ResponseGachaPull.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Proto.PushItemChange.ChangeShow;
      reader.readMessage(value,proto.Proto.PushItemChange.ChangeShow.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPoolid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ResponseGachaPull.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ResponseGachaPull.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ResponseGachaPull} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseGachaPull.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Proto.PushItemChange.ChangeShow.serializeBinaryToWriter
    );
  }
  f = message.getPoolid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated PushItemChange.ChangeShow items = 1;
 * @return {!Array<!proto.Proto.PushItemChange.ChangeShow>}
 */
proto.Proto.ResponseGachaPull.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.Proto.PushItemChange.ChangeShow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.PushItemChange.ChangeShow, 1));
};


/**
 * @param {!Array<!proto.Proto.PushItemChange.ChangeShow>} value
 * @return {!proto.Proto.ResponseGachaPull} returns this
*/
proto.Proto.ResponseGachaPull.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.PushItemChange.ChangeShow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.PushItemChange.ChangeShow}
 */
proto.Proto.ResponseGachaPull.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.PushItemChange.ChangeShow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.ResponseGachaPull} returns this
 */
proto.Proto.ResponseGachaPull.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional int32 poolId = 2;
 * @return {number}
 */
proto.Proto.ResponseGachaPull.prototype.getPoolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResponseGachaPull} returns this
 */
proto.Proto.ResponseGachaPull.prototype.setPoolid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 count = 3;
 * @return {number}
 */
proto.Proto.ResponseGachaPull.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResponseGachaPull} returns this
 */
proto.Proto.ResponseGachaPull.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBQueryPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBQueryPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBQueryPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBQueryPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    channel: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBQueryPlayer}
 */
proto.Proto.DBQueryPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBQueryPlayer;
  return proto.Proto.DBQueryPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBQueryPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBQueryPlayer}
 */
proto.Proto.DBQueryPlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBQueryPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBQueryPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBQueryPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBQueryPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 server_id = 1;
 * @return {number}
 */
proto.Proto.DBQueryPlayer.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DBQueryPlayer} returns this
 */
proto.Proto.DBQueryPlayer.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string channel = 2;
 * @return {string}
 */
proto.Proto.DBQueryPlayer.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.DBQueryPlayer} returns this
 */
proto.Proto.DBQueryPlayer.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.Proto.DBQueryPlayer.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.DBQueryPlayer} returns this
 */
proto.Proto.DBQueryPlayer.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBQueryPlayerRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBQueryPlayerRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBQueryPlayerRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBQueryPlayerRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: (f = msg.getPlayer()) && db_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBQueryPlayerRet}
 */
proto.Proto.DBQueryPlayerRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBQueryPlayerRet;
  return proto.Proto.DBQueryPlayerRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBQueryPlayerRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBQueryPlayerRet}
 */
proto.Proto.DBQueryPlayerRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBQueryPlayerRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBQueryPlayerRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBQueryPlayerRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBQueryPlayerRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.DBQueryPlayerRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DBQueryPlayerRet} returns this
 */
proto.Proto.DBQueryPlayerRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Player player = 2;
 * @return {?proto.Proto.Player}
 */
proto.Proto.DBQueryPlayerRet.prototype.getPlayer = function() {
  return /** @type{?proto.Proto.Player} */ (
    jspb.Message.getWrapperField(this, db_pb.Player, 2));
};


/**
 * @param {?proto.Proto.Player|undefined} value
 * @return {!proto.Proto.DBQueryPlayerRet} returns this
*/
proto.Proto.DBQueryPlayerRet.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.DBQueryPlayerRet} returns this
 */
proto.Proto.DBQueryPlayerRet.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.DBQueryPlayerRet.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBCreatePlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBCreatePlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBCreatePlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBCreatePlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    channel: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    player: (f = msg.getPlayer()) && db_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBCreatePlayer}
 */
proto.Proto.DBCreatePlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBCreatePlayer;
  return proto.Proto.DBCreatePlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBCreatePlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBCreatePlayer}
 */
proto.Proto.DBCreatePlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBCreatePlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBCreatePlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBCreatePlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBCreatePlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 server_id = 1;
 * @return {number}
 */
proto.Proto.DBCreatePlayer.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DBCreatePlayer} returns this
 */
proto.Proto.DBCreatePlayer.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string channel = 2;
 * @return {string}
 */
proto.Proto.DBCreatePlayer.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.DBCreatePlayer} returns this
 */
proto.Proto.DBCreatePlayer.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.Proto.DBCreatePlayer.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Proto.DBCreatePlayer} returns this
 */
proto.Proto.DBCreatePlayer.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Player player = 4;
 * @return {?proto.Proto.Player}
 */
proto.Proto.DBCreatePlayer.prototype.getPlayer = function() {
  return /** @type{?proto.Proto.Player} */ (
    jspb.Message.getWrapperField(this, db_pb.Player, 4));
};


/**
 * @param {?proto.Proto.Player|undefined} value
 * @return {!proto.Proto.DBCreatePlayer} returns this
*/
proto.Proto.DBCreatePlayer.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.DBCreatePlayer} returns this
 */
proto.Proto.DBCreatePlayer.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.DBCreatePlayer.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBCreatePlayerRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBCreatePlayerRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBCreatePlayerRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBCreatePlayerRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: (f = msg.getPlayer()) && db_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBCreatePlayerRet}
 */
proto.Proto.DBCreatePlayerRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBCreatePlayerRet;
  return proto.Proto.DBCreatePlayerRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBCreatePlayerRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBCreatePlayerRet}
 */
proto.Proto.DBCreatePlayerRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBCreatePlayerRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBCreatePlayerRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBCreatePlayerRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBCreatePlayerRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.DBCreatePlayerRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DBCreatePlayerRet} returns this
 */
proto.Proto.DBCreatePlayerRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Player player = 2;
 * @return {?proto.Proto.Player}
 */
proto.Proto.DBCreatePlayerRet.prototype.getPlayer = function() {
  return /** @type{?proto.Proto.Player} */ (
    jspb.Message.getWrapperField(this, db_pb.Player, 2));
};


/**
 * @param {?proto.Proto.Player|undefined} value
 * @return {!proto.Proto.DBCreatePlayerRet} returns this
*/
proto.Proto.DBCreatePlayerRet.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.DBCreatePlayerRet} returns this
 */
proto.Proto.DBCreatePlayerRet.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.DBCreatePlayerRet.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBSavePlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBSavePlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBSavePlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSavePlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    saveMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: (f = msg.getPlayer()) && db_pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBSavePlayer}
 */
proto.Proto.DBSavePlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBSavePlayer;
  return proto.Proto.DBSavePlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBSavePlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBSavePlayer}
 */
proto.Proto.DBSavePlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.ESaveMode} */ (reader.readEnum());
      msg.setSaveMode(value);
      break;
    case 2:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBSavePlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBSavePlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBSavePlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSavePlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSaveMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional ESaveMode save_mode = 1;
 * @return {!proto.Proto.ESaveMode}
 */
proto.Proto.DBSavePlayer.prototype.getSaveMode = function() {
  return /** @type {!proto.Proto.ESaveMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.ESaveMode} value
 * @return {!proto.Proto.DBSavePlayer} returns this
 */
proto.Proto.DBSavePlayer.prototype.setSaveMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Player player = 2;
 * @return {?proto.Proto.Player}
 */
proto.Proto.DBSavePlayer.prototype.getPlayer = function() {
  return /** @type{?proto.Proto.Player} */ (
    jspb.Message.getWrapperField(this, db_pb.Player, 2));
};


/**
 * @param {?proto.Proto.Player|undefined} value
 * @return {!proto.Proto.DBSavePlayer} returns this
*/
proto.Proto.DBSavePlayer.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.DBSavePlayer} returns this
 */
proto.Proto.DBSavePlayer.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.DBSavePlayer.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBSavePlayerRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBSavePlayerRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBSavePlayerRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSavePlayerRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBSavePlayerRet}
 */
proto.Proto.DBSavePlayerRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBSavePlayerRet;
  return proto.Proto.DBSavePlayerRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBSavePlayerRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBSavePlayerRet}
 */
proto.Proto.DBSavePlayerRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBSavePlayerRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBSavePlayerRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBSavePlayerRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSavePlayerRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.DBSavePlayerRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DBSavePlayerRet} returns this
 */
proto.Proto.DBSavePlayerRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBSaveList.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBSaveList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBSaveList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSaveList.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBSaveList}
 */
proto.Proto.DBSaveList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBSaveList;
  return proto.Proto.DBSaveList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBSaveList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBSaveList}
 */
proto.Proto.DBSaveList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBSaveList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBSaveList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBSaveList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSaveList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.DBSaveListRet.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBSaveListRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBSaveListRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBSaveListRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSaveListRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerListList: jspb.Message.toObjectList(msg.getPlayerListList(),
    db_pb.Player.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBSaveListRet}
 */
proto.Proto.DBSaveListRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBSaveListRet;
  return proto.Proto.DBSaveListRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBSaveListRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBSaveListRet}
 */
proto.Proto.DBSaveListRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = new db_pb.Player;
      reader.readMessage(value,db_pb.Player.deserializeBinaryFromReader);
      msg.addPlayerList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBSaveListRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBSaveListRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBSaveListRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSaveListRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPlayerListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      db_pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.DBSaveListRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DBSaveListRet} returns this
 */
proto.Proto.DBSaveListRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Player player_list = 2;
 * @return {!Array<!proto.Proto.Player>}
 */
proto.Proto.DBSaveListRet.prototype.getPlayerListList = function() {
  return /** @type{!Array<!proto.Proto.Player>} */ (
    jspb.Message.getRepeatedWrapperField(this, db_pb.Player, 2));
};


/**
 * @param {!Array<!proto.Proto.Player>} value
 * @return {!proto.Proto.DBSaveListRet} returns this
*/
proto.Proto.DBSaveListRet.prototype.setPlayerListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.Player=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.Player}
 */
proto.Proto.DBSaveListRet.prototype.addPlayerList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.Player, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.DBSaveListRet} returns this
 */
proto.Proto.DBSaveListRet.prototype.clearPlayerListList = function() {
  return this.setPlayerListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBSaveWorld.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBSaveWorld.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBSaveWorld} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSaveWorld.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && db_pb.DBWorldData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBSaveWorld}
 */
proto.Proto.DBSaveWorld.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBSaveWorld;
  return proto.Proto.DBSaveWorld.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBSaveWorld} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBSaveWorld}
 */
proto.Proto.DBSaveWorld.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new db_pb.DBWorldData;
      reader.readMessage(value,db_pb.DBWorldData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBSaveWorld.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBSaveWorld.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBSaveWorld} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSaveWorld.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      db_pb.DBWorldData.serializeBinaryToWriter
    );
  }
};


/**
 * optional DBWorldData data = 1;
 * @return {?proto.Proto.DBWorldData}
 */
proto.Proto.DBSaveWorld.prototype.getData = function() {
  return /** @type{?proto.Proto.DBWorldData} */ (
    jspb.Message.getWrapperField(this, db_pb.DBWorldData, 1));
};


/**
 * @param {?proto.Proto.DBWorldData|undefined} value
 * @return {!proto.Proto.DBSaveWorld} returns this
*/
proto.Proto.DBSaveWorld.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.DBSaveWorld} returns this
 */
proto.Proto.DBSaveWorld.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.DBSaveWorld.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBSaveWorldRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBSaveWorldRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBSaveWorldRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSaveWorldRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBSaveWorldRet}
 */
proto.Proto.DBSaveWorldRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBSaveWorldRet;
  return proto.Proto.DBSaveWorldRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBSaveWorldRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBSaveWorldRet}
 */
proto.Proto.DBSaveWorldRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBSaveWorldRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBSaveWorldRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBSaveWorldRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBSaveWorldRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.DBSaveWorldRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DBSaveWorldRet} returns this
 */
proto.Proto.DBSaveWorldRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBQueryWorld.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBQueryWorld.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBQueryWorld} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBQueryWorld.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    worldId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBQueryWorld}
 */
proto.Proto.DBQueryWorld.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBQueryWorld;
  return proto.Proto.DBQueryWorld.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBQueryWorld} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBQueryWorld}
 */
proto.Proto.DBQueryWorld.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorldId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBQueryWorld.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBQueryWorld.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBQueryWorld} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBQueryWorld.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWorldId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 server_id = 1;
 * @return {number}
 */
proto.Proto.DBQueryWorld.prototype.getServerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DBQueryWorld} returns this
 */
proto.Proto.DBQueryWorld.prototype.setServerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 world_id = 2;
 * @return {number}
 */
proto.Proto.DBQueryWorld.prototype.getWorldId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DBQueryWorld} returns this
 */
proto.Proto.DBQueryWorld.prototype.setWorldId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.DBQueryWorldRet.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.DBQueryWorldRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.DBQueryWorldRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBQueryWorldRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ret: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: (f = msg.getData()) && db_pb.DBWorldData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.DBQueryWorldRet}
 */
proto.Proto.DBQueryWorldRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.DBQueryWorldRet;
  return proto.Proto.DBQueryWorldRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.DBQueryWorldRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.DBQueryWorldRet}
 */
proto.Proto.DBQueryWorldRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRet(value);
      break;
    case 2:
      var value = new db_pb.DBWorldData;
      reader.readMessage(value,db_pb.DBWorldData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.DBQueryWorldRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.DBQueryWorldRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.DBQueryWorldRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.DBQueryWorldRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRet();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      db_pb.DBWorldData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 ret = 1;
 * @return {number}
 */
proto.Proto.DBQueryWorldRet.prototype.getRet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.DBQueryWorldRet} returns this
 */
proto.Proto.DBQueryWorldRet.prototype.setRet = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DBWorldData data = 2;
 * @return {?proto.Proto.DBWorldData}
 */
proto.Proto.DBQueryWorldRet.prototype.getData = function() {
  return /** @type{?proto.Proto.DBWorldData} */ (
    jspb.Message.getWrapperField(this, db_pb.DBWorldData, 2));
};


/**
 * @param {?proto.Proto.DBWorldData|undefined} value
 * @return {!proto.Proto.DBQueryWorldRet} returns this
*/
proto.Proto.DBQueryWorldRet.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.DBQueryWorldRet} returns this
 */
proto.Proto.DBQueryWorldRet.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.DBQueryWorldRet.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BattleDamage.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BattleDamage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BattleDamage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleDamage.toObject = function(includeInstance, msg) {
  var f, obj = {
    pos: jspb.Message.getFieldWithDefault(msg, 1, 0),
    damage: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BattleDamage}
 */
proto.Proto.BattleDamage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BattleDamage;
  return proto.Proto.BattleDamage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BattleDamage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BattleDamage}
 */
proto.Proto.BattleDamage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDamage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BattleDamage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BattleDamage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BattleDamage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleDamage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPos();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDamage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 pos = 1;
 * @return {number}
 */
proto.Proto.BattleDamage.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleDamage} returns this
 */
proto.Proto.BattleDamage.prototype.setPos = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 damage = 2;
 * @return {number}
 */
proto.Proto.BattleDamage.prototype.getDamage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleDamage} returns this
 */
proto.Proto.BattleDamage.prototype.setDamage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.BattleAction.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BattleAction.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BattleAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BattleAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pos: jspb.Message.getFieldWithDefault(msg, 2, 0),
    skillId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    actionType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    damageList: jspb.Message.toObjectList(msg.getDamageList(),
    proto.Proto.BattleDamage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BattleAction}
 */
proto.Proto.BattleAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BattleAction;
  return proto.Proto.BattleAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BattleAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BattleAction}
 */
proto.Proto.BattleAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOwnerSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSkillId(value);
      break;
    case 4:
      var value = /** @type {!proto.Proto.BattleActionType} */ (reader.readEnum());
      msg.setActionType(value);
      break;
    case 5:
      var value = new proto.Proto.BattleDamage;
      reader.readMessage(value,proto.Proto.BattleDamage.deserializeBinaryFromReader);
      msg.addDamage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BattleAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BattleAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BattleAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPos();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSkillId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getActionType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDamageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.Proto.BattleDamage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 owner_sn = 1;
 * @return {number}
 */
proto.Proto.BattleAction.prototype.getOwnerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleAction} returns this
 */
proto.Proto.BattleAction.prototype.setOwnerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 pos = 2;
 * @return {number}
 */
proto.Proto.BattleAction.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleAction} returns this
 */
proto.Proto.BattleAction.prototype.setPos = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 skill_id = 3;
 * @return {number}
 */
proto.Proto.BattleAction.prototype.getSkillId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleAction} returns this
 */
proto.Proto.BattleAction.prototype.setSkillId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional BattleActionType action_type = 4;
 * @return {!proto.Proto.BattleActionType}
 */
proto.Proto.BattleAction.prototype.getActionType = function() {
  return /** @type {!proto.Proto.BattleActionType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.Proto.BattleActionType} value
 * @return {!proto.Proto.BattleAction} returns this
 */
proto.Proto.BattleAction.prototype.setActionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated BattleDamage damage = 5;
 * @return {!Array<!proto.Proto.BattleDamage>}
 */
proto.Proto.BattleAction.prototype.getDamageList = function() {
  return /** @type{!Array<!proto.Proto.BattleDamage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.BattleDamage, 5));
};


/**
 * @param {!Array<!proto.Proto.BattleDamage>} value
 * @return {!proto.Proto.BattleAction} returns this
*/
proto.Proto.BattleAction.prototype.setDamageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.Proto.BattleDamage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.BattleDamage}
 */
proto.Proto.BattleAction.prototype.addDamage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.Proto.BattleDamage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.BattleAction} returns this
 */
proto.Proto.BattleAction.prototype.clearDamageList = function() {
  return this.setDamageList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.BattleActionList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BattleActionList.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BattleActionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BattleActionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleActionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.Proto.BattleAction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BattleActionList}
 */
proto.Proto.BattleActionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BattleActionList;
  return proto.Proto.BattleActionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BattleActionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BattleActionList}
 */
proto.Proto.BattleActionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Proto.BattleAction;
      reader.readMessage(value,proto.Proto.BattleAction.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BattleActionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BattleActionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BattleActionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleActionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Proto.BattleAction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BattleAction actions = 1;
 * @return {!Array<!proto.Proto.BattleAction>}
 */
proto.Proto.BattleActionList.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.Proto.BattleAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.BattleAction, 1));
};


/**
 * @param {!Array<!proto.Proto.BattleAction>} value
 * @return {!proto.Proto.BattleActionList} returns this
*/
proto.Proto.BattleActionList.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Proto.BattleAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.BattleAction}
 */
proto.Proto.BattleActionList.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Proto.BattleAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.BattleActionList} returns this
 */
proto.Proto.BattleActionList.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BattleJoin.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BattleJoin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BattleJoin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleJoin.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BattleJoin}
 */
proto.Proto.BattleJoin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BattleJoin;
  return proto.Proto.BattleJoin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BattleJoin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BattleJoin}
 */
proto.Proto.BattleJoin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BattleJoin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BattleJoin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BattleJoin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleJoin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 player_sn = 1;
 * @return {number}
 */
proto.Proto.BattleJoin.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleJoin} returns this
 */
proto.Proto.BattleJoin.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BattleCreate.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BattleCreate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BattleCreate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleCreate.toObject = function(includeInstance, msg) {
  var f, obj = {
    monsterTeamId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BattleCreate}
 */
proto.Proto.BattleCreate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BattleCreate;
  return proto.Proto.BattleCreate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BattleCreate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BattleCreate}
 */
proto.Proto.BattleCreate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonsterTeamId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BattleCreate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BattleCreate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BattleCreate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleCreate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMonsterTeamId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 monster_team_id = 1;
 * @return {number}
 */
proto.Proto.BattleCreate.prototype.getMonsterTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleCreate} returns this
 */
proto.Proto.BattleCreate.prototype.setMonsterTeamId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BattleView.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BattleView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BattleView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleView.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerSn: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BattleView}
 */
proto.Proto.BattleView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BattleView;
  return proto.Proto.BattleView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BattleView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BattleView}
 */
proto.Proto.BattleView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerSn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BattleView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BattleView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BattleView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 player_sn = 1;
 * @return {number}
 */
proto.Proto.BattleView.prototype.getPlayerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleView} returns this
 */
proto.Proto.BattleView.prototype.setPlayerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BattleRs.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BattleRs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BattleRs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleRs.toObject = function(includeInstance, msg) {
  var f, obj = {
    returnCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BattleRs}
 */
proto.Proto.BattleRs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BattleRs;
  return proto.Proto.BattleRs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BattleRs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BattleRs}
 */
proto.Proto.BattleRs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Proto.RsCode} */ (reader.readEnum());
      msg.setReturnCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BattleRs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BattleRs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BattleRs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleRs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReturnCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RsCode return_code = 1;
 * @return {!proto.Proto.RsCode}
 */
proto.Proto.BattleRs.prototype.getReturnCode = function() {
  return /** @type {!proto.Proto.RsCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Proto.RsCode} value
 * @return {!proto.Proto.BattleRs} returns this
 */
proto.Proto.BattleRs.prototype.setReturnCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BattleTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BattleTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BattleTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pos: jspb.Message.getFieldWithDefault(msg, 2, 0),
    card: (f = msg.getCard()) && db_pb.Card.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BattleTeam}
 */
proto.Proto.BattleTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BattleTeam;
  return proto.Proto.BattleTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BattleTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BattleTeam}
 */
proto.Proto.BattleTeam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOwnerSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 3:
      var value = new db_pb.Card;
      reader.readMessage(value,db_pb.Card.deserializeBinaryFromReader);
      msg.setCard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BattleTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BattleTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BattleTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPos();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCard();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      db_pb.Card.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 owner_sn = 1;
 * @return {number}
 */
proto.Proto.BattleTeam.prototype.getOwnerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleTeam} returns this
 */
proto.Proto.BattleTeam.prototype.setOwnerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 pos = 2;
 * @return {number}
 */
proto.Proto.BattleTeam.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleTeam} returns this
 */
proto.Proto.BattleTeam.prototype.setPos = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Card card = 3;
 * @return {?proto.Proto.Card}
 */
proto.Proto.BattleTeam.prototype.getCard = function() {
  return /** @type{?proto.Proto.Card} */ (
    jspb.Message.getWrapperField(this, db_pb.Card, 3));
};


/**
 * @param {?proto.Proto.Card|undefined} value
 * @return {!proto.Proto.BattleTeam} returns this
*/
proto.Proto.BattleTeam.prototype.setCard = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.BattleTeam} returns this
 */
proto.Proto.BattleTeam.prototype.clearCard = function() {
  return this.setCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.BattleTeam.prototype.hasCard = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Proto.BattleSyncTeam.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BattleSyncTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BattleSyncTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BattleSyncTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleSyncTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamList: jspb.Message.toObjectList(msg.getTeamList(),
    proto.Proto.BattleTeam.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BattleSyncTeam}
 */
proto.Proto.BattleSyncTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BattleSyncTeam;
  return proto.Proto.BattleSyncTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BattleSyncTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BattleSyncTeam}
 */
proto.Proto.BattleSyncTeam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.Proto.BattleTeam;
      reader.readMessage(value,proto.Proto.BattleTeam.deserializeBinaryFromReader);
      msg.addTeam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BattleSyncTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BattleSyncTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BattleSyncTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleSyncTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Proto.BattleTeam.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BattleTeam team = 2;
 * @return {!Array<!proto.Proto.BattleTeam>}
 */
proto.Proto.BattleSyncTeam.prototype.getTeamList = function() {
  return /** @type{!Array<!proto.Proto.BattleTeam>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Proto.BattleTeam, 2));
};


/**
 * @param {!Array<!proto.Proto.BattleTeam>} value
 * @return {!proto.Proto.BattleSyncTeam} returns this
*/
proto.Proto.BattleSyncTeam.prototype.setTeamList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Proto.BattleTeam=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Proto.BattleTeam}
 */
proto.Proto.BattleSyncTeam.prototype.addTeam = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Proto.BattleTeam, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Proto.BattleSyncTeam} returns this
 */
proto.Proto.BattleSyncTeam.prototype.clearTeamList = function() {
  return this.setTeamList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BattleBegin.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BattleBegin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BattleBegin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleBegin.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerSn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    monsterTeamId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BattleBegin}
 */
proto.Proto.BattleBegin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BattleBegin;
  return proto.Proto.BattleBegin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BattleBegin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BattleBegin}
 */
proto.Proto.BattleBegin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOwnerSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonsterTeamId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BattleBegin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BattleBegin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BattleBegin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleBegin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerSn();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMonsterTeamId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional uint64 owner_sn = 1;
 * @return {number}
 */
proto.Proto.BattleBegin.prototype.getOwnerSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleBegin} returns this
 */
proto.Proto.BattleBegin.prototype.setOwnerSn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 monster_team_id = 2;
 * @return {number}
 */
proto.Proto.BattleBegin.prototype.getMonsterTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.BattleBegin} returns this
 */
proto.Proto.BattleBegin.prototype.setMonsterTeamId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.BattleEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.BattleEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.BattleEnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleEnd.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.BattleEnd}
 */
proto.Proto.BattleEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.BattleEnd;
  return proto.Proto.BattleEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.BattleEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.BattleEnd}
 */
proto.Proto.BattleEnd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.BattleEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.BattleEnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.BattleEnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.BattleEnd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ReqeustSkillLvUp.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ReqeustSkillLvUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ReqeustSkillLvUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqeustSkillLvUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ReqeustSkillLvUp}
 */
proto.Proto.ReqeustSkillLvUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ReqeustSkillLvUp;
  return proto.Proto.ReqeustSkillLvUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ReqeustSkillLvUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ReqeustSkillLvUp}
 */
proto.Proto.ReqeustSkillLvUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ReqeustSkillLvUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ReqeustSkillLvUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ReqeustSkillLvUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqeustSkillLvUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Proto.ReqeustSkillLvUp.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ReqeustSkillLvUp} returns this
 */
proto.Proto.ReqeustSkillLvUp.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ResponseSkillLvUp.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ResponseSkillLvUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ResponseSkillLvUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseSkillLvUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    level: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ResponseSkillLvUp}
 */
proto.Proto.ResponseSkillLvUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ResponseSkillLvUp;
  return proto.Proto.ResponseSkillLvUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ResponseSkillLvUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ResponseSkillLvUp}
 */
proto.Proto.ResponseSkillLvUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ResponseSkillLvUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ResponseSkillLvUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ResponseSkillLvUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseSkillLvUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Proto.ResponseSkillLvUp.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResponseSkillLvUp} returns this
 */
proto.Proto.ResponseSkillLvUp.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 level = 2;
 * @return {number}
 */
proto.Proto.ResponseSkillLvUp.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResponseSkillLvUp} returns this
 */
proto.Proto.ResponseSkillLvUp.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ReqeustEquipmentLvUp.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ReqeustEquipmentLvUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ReqeustEquipmentLvUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqeustEquipmentLvUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ReqeustEquipmentLvUp}
 */
proto.Proto.ReqeustEquipmentLvUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ReqeustEquipmentLvUp;
  return proto.Proto.ReqeustEquipmentLvUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ReqeustEquipmentLvUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ReqeustEquipmentLvUp}
 */
proto.Proto.ReqeustEquipmentLvUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ReqeustEquipmentLvUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ReqeustEquipmentLvUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ReqeustEquipmentLvUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqeustEquipmentLvUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Proto.ReqeustEquipmentLvUp.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ReqeustEquipmentLvUp} returns this
 */
proto.Proto.ReqeustEquipmentLvUp.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ResponseEquipmentLvUp.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ResponseEquipmentLvUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ResponseEquipmentLvUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseEquipmentLvUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    level: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ResponseEquipmentLvUp}
 */
proto.Proto.ResponseEquipmentLvUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ResponseEquipmentLvUp;
  return proto.Proto.ResponseEquipmentLvUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ResponseEquipmentLvUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ResponseEquipmentLvUp}
 */
proto.Proto.ResponseEquipmentLvUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ResponseEquipmentLvUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ResponseEquipmentLvUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ResponseEquipmentLvUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResponseEquipmentLvUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Proto.ResponseEquipmentLvUp.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResponseEquipmentLvUp} returns this
 */
proto.Proto.ResponseEquipmentLvUp.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 level = 2;
 * @return {number}
 */
proto.Proto.ResponseEquipmentLvUp.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResponseEquipmentLvUp} returns this
 */
proto.Proto.ResponseEquipmentLvUp.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ReqCardSkillLvUp.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ReqCardSkillLvUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ReqCardSkillLvUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqCardSkillLvUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    cardid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    requestskill: (f = msg.getRequestskill()) && proto.Proto.ReqeustSkillLvUp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ReqCardSkillLvUp}
 */
proto.Proto.ReqCardSkillLvUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ReqCardSkillLvUp;
  return proto.Proto.ReqCardSkillLvUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ReqCardSkillLvUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ReqCardSkillLvUp}
 */
proto.Proto.ReqCardSkillLvUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCardid(value);
      break;
    case 2:
      var value = new proto.Proto.ReqeustSkillLvUp;
      reader.readMessage(value,proto.Proto.ReqeustSkillLvUp.deserializeBinaryFromReader);
      msg.setRequestskill(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ReqCardSkillLvUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ReqCardSkillLvUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ReqCardSkillLvUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ReqCardSkillLvUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCardid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRequestskill();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Proto.ReqeustSkillLvUp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 cardID = 1;
 * @return {number}
 */
proto.Proto.ReqCardSkillLvUp.prototype.getCardid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ReqCardSkillLvUp} returns this
 */
proto.Proto.ReqCardSkillLvUp.prototype.setCardid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ReqeustSkillLvUp requestSkill = 2;
 * @return {?proto.Proto.ReqeustSkillLvUp}
 */
proto.Proto.ReqCardSkillLvUp.prototype.getRequestskill = function() {
  return /** @type{?proto.Proto.ReqeustSkillLvUp} */ (
    jspb.Message.getWrapperField(this, proto.Proto.ReqeustSkillLvUp, 2));
};


/**
 * @param {?proto.Proto.ReqeustSkillLvUp|undefined} value
 * @return {!proto.Proto.ReqCardSkillLvUp} returns this
*/
proto.Proto.ReqCardSkillLvUp.prototype.setRequestskill = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.ReqCardSkillLvUp} returns this
 */
proto.Proto.ReqCardSkillLvUp.prototype.clearRequestskill = function() {
  return this.setRequestskill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.ReqCardSkillLvUp.prototype.hasRequestskill = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Proto.ResCardSkillLvUp.prototype.toObject = function(opt_includeInstance) {
  return proto.Proto.ResCardSkillLvUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Proto.ResCardSkillLvUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResCardSkillLvUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    rescode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rescardid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    resskilllvup: (f = msg.getResskilllvup()) && proto.Proto.ResponseSkillLvUp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Proto.ResCardSkillLvUp}
 */
proto.Proto.ResCardSkillLvUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Proto.ResCardSkillLvUp;
  return proto.Proto.ResCardSkillLvUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Proto.ResCardSkillLvUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Proto.ResCardSkillLvUp}
 */
proto.Proto.ResCardSkillLvUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRescode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRescardid(value);
      break;
    case 3:
      var value = new proto.Proto.ResponseSkillLvUp;
      reader.readMessage(value,proto.Proto.ResponseSkillLvUp.deserializeBinaryFromReader);
      msg.setResskilllvup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Proto.ResCardSkillLvUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Proto.ResCardSkillLvUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Proto.ResCardSkillLvUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Proto.ResCardSkillLvUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRescode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRescardid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getResskilllvup();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.Proto.ResponseSkillLvUp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 rescode = 1;
 * @return {number}
 */
proto.Proto.ResCardSkillLvUp.prototype.getRescode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResCardSkillLvUp} returns this
 */
proto.Proto.ResCardSkillLvUp.prototype.setRescode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 rescardID = 2;
 * @return {number}
 */
proto.Proto.ResCardSkillLvUp.prototype.getRescardid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Proto.ResCardSkillLvUp} returns this
 */
proto.Proto.ResCardSkillLvUp.prototype.setRescardid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ResponseSkillLvUp resSkillLvUp = 3;
 * @return {?proto.Proto.ResponseSkillLvUp}
 */
proto.Proto.ResCardSkillLvUp.prototype.getResskilllvup = function() {
  return /** @type{?proto.Proto.ResponseSkillLvUp} */ (
    jspb.Message.getWrapperField(this, proto.Proto.ResponseSkillLvUp, 3));
};


/**
 * @param {?proto.Proto.ResponseSkillLvUp|undefined} value
 * @return {!proto.Proto.ResCardSkillLvUp} returns this
*/
proto.Proto.ResCardSkillLvUp.prototype.setResskilllvup = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Proto.ResCardSkillLvUp} returns this
 */
proto.Proto.ResCardSkillLvUp.prototype.clearResskilllvup = function() {
  return this.setResskilllvup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Proto.ResCardSkillLvUp.prototype.hasResskilllvup = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * @enum {number}
 */
proto.Proto.RsCode = {
  OK: 0,
  BATTLECREATEFAILED: 1000,
  BATTLECREATEFAILED_PLAYERINBATTLE: 1001,
  BATTLEBEGINFAILED_PLAYERNOTINBATTLE: 1002
};

/**
 * @enum {number}
 */
proto.Proto.AccountCheckReturnCode = {
  ARC_OK: 0,
  ARC_UNKONWN: 1,
  ARC_NOT_FOUND_ACCOUNT: 2,
  ARC_PASSWORD_WRONG: 3,
  ARC_LOGGING: 4,
  ARC_TIMEOUT: 5,
  ARC_ONLINE: 6
};

/**
 * @enum {number}
 */
proto.Proto.LoginHttpReturnCode = {
  LHRC_OK: 0,
  LHRC_TIMEOUT: 1,
  LHRC_NOTFOUND: 2
};

/**
 * @enum {number}
 */
proto.Proto.LoginRetCode = {
  LRC_OK: 0,
  LRC_UNKONWN: 1,
  LRC_NOT_FOUND_ACCOUNT: 2,
  LRC_PASSWORD_WRONG: 3,
  LRC_LOGGING: 4,
  LRC_TIMEOUT: 5,
  LRC_ONLINE: 6
};

/**
 * @enum {number}
 */
proto.Proto.CreateRetCode = {
  CRC_CREATE_OK: 0,
  CRC_UNKONWN: 1,
  CRC_RENAME: 2
};

/**
 * @enum {number}
 */
proto.Proto.eChatChannel = {
  ECC_SYSTEM: 0,
  ECC_WORLD: 1,
  ECC_GUILD: 2,
  ECC_TEAM: 3,
  ECC_PRIVATE: 4,
  ECC_BATTLE: 5
};

/**
 * @enum {number}
 */
proto.Proto.ESaveMode = {
  ESM_NORMAL: 0,
  ESM_IMMEDIATELY: 1,
  ESM_NO: 2
};

/**
 * @enum {number}
 */
proto.Proto.BattleActionType = {
  BEGIN: 0,
  RUN: 1,
  ATTACK: 2,
  BACK: 3,
  ANIM: 4
};

goog.object.extend(exports, proto.Proto);
