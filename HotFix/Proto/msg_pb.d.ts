// package: Proto
// file: msg.proto

import * as jspb from "google-protobuf";
import * as db_pb from "./db_pb";

export class NullMsg extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullMsg.AsObject;
  static toObject(includeInstance: boolean, msg: NullMsg): NullMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NullMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullMsg;
  static deserializeBinaryFromReader(message: NullMsg, reader: jspb.BinaryReader): NullMsg;
}

export namespace NullMsg {
  export type AsObject = {
  }
}

export class CmdThread extends jspb.Message {
  getCmdType(): CmdThread.CmdTypeMap[keyof CmdThread.CmdTypeMap];
  setCmdType(value: CmdThread.CmdTypeMap[keyof CmdThread.CmdTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CmdThread.AsObject;
  static toObject(includeInstance: boolean, msg: CmdThread): CmdThread.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CmdThread, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CmdThread;
  static deserializeBinaryFromReader(message: CmdThread, reader: jspb.BinaryReader): CmdThread;
}

export namespace CmdThread {
  export type AsObject = {
    cmdType: CmdThread.CmdTypeMap[keyof CmdThread.CmdTypeMap],
  }

  export interface CmdTypeMap {
    ENTITY: 0;
    POOL: 1;
    CONNECT: 2;
  }

  export const CmdType: CmdTypeMap;
}

export class CmdApp extends jspb.Message {
  getCmdType(): CmdApp.CmdTypeMap[keyof CmdApp.CmdTypeMap];
  setCmdType(value: CmdApp.CmdTypeMap[keyof CmdApp.CmdTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CmdApp.AsObject;
  static toObject(includeInstance: boolean, msg: CmdApp): CmdApp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CmdApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CmdApp;
  static deserializeBinaryFromReader(message: CmdApp, reader: jspb.BinaryReader): CmdApp;
}

export namespace CmdApp {
  export type AsObject = {
    cmdType: CmdApp.CmdTypeMap[keyof CmdApp.CmdTypeMap],
  }

  export interface CmdTypeMap {
    INFO: 0;
  }

  export const CmdType: CmdTypeMap;
}

export class Efficiency extends jspb.Message {
  getThreadType(): number;
  setThreadType(value: number): void;

  getThreadId(): string;
  setThreadId(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Efficiency.AsObject;
  static toObject(includeInstance: boolean, msg: Efficiency): Efficiency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Efficiency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Efficiency;
  static deserializeBinaryFromReader(message: Efficiency, reader: jspb.BinaryReader): Efficiency;
}

export namespace Efficiency {
  export type AsObject = {
    threadType: number,
    threadId: string,
    time: number,
  }
}

export class AppRegister extends jspb.Message {
  getType(): number;
  setType(value: number): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppRegister.AsObject;
  static toObject(includeInstance: boolean, msg: AppRegister): AppRegister.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppRegister, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppRegister;
  static deserializeBinaryFromReader(message: AppRegister, reader: jspb.BinaryReader): AppRegister;
}

export namespace AppRegister {
  export type AsObject = {
    type: number,
    id: number,
  }
}

export class AppInfoSync extends jspb.Message {
  getAppId(): number;
  setAppId(value: number): void;

  getAppType(): number;
  setAppType(value: number): void;

  getOnline(): number;
  setOnline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppInfoSync.AsObject;
  static toObject(includeInstance: boolean, msg: AppInfoSync): AppInfoSync.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppInfoSync, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppInfoSync;
  static deserializeBinaryFromReader(message: AppInfoSync, reader: jspb.BinaryReader): AppInfoSync;
}

export namespace AppInfoSync {
  export type AsObject = {
    appId: number,
    appType: number,
    online: number,
  }
}

export class AppInfoListSync extends jspb.Message {
  clearAppsList(): void;
  getAppsList(): Array<AppInfoSync>;
  setAppsList(value: Array<AppInfoSync>): void;
  addApps(value?: AppInfoSync, index?: number): AppInfoSync;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppInfoListSync.AsObject;
  static toObject(includeInstance: boolean, msg: AppInfoListSync): AppInfoListSync.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppInfoListSync, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppInfoListSync;
  static deserializeBinaryFromReader(message: AppInfoListSync, reader: jspb.BinaryReader): AppInfoListSync;
}

export namespace AppInfoListSync {
  export type AsObject = {
    appsList: Array<AppInfoSync.AsObject>,
  }
}

export class NetworkDisconnect extends jspb.Message {
  getNetworkType(): number;
  setNetworkType(value: number): void;

  getSocket(): number;
  setSocket(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkDisconnect.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkDisconnect): NetworkDisconnect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkDisconnect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkDisconnect;
  static deserializeBinaryFromReader(message: NetworkDisconnect, reader: jspb.BinaryReader): NetworkDisconnect;
}

export namespace NetworkDisconnect {
  export type AsObject = {
    networkType: number,
    socket: number,
  }
}

export class TagValue extends jspb.Message {
  getValueInt64(): number;
  setValueInt64(value: number): void;

  getValueStr(): string;
  setValueStr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagValue.AsObject;
  static toObject(includeInstance: boolean, msg: TagValue): TagValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TagValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagValue;
  static deserializeBinaryFromReader(message: TagValue, reader: jspb.BinaryReader): TagValue;
}

export namespace TagValue {
  export type AsObject = {
    valueInt64: number,
    valueStr: string,
  }
}

export class Tag extends jspb.Message {
  getTagType(): number;
  setTagType(value: number): void;

  hasTagValue(): boolean;
  clearTagValue(): void;
  getTagValue(): TagValue | undefined;
  setTagValue(value?: TagValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    tagType: number,
    tagValue?: TagValue.AsObject,
  }
}

export class NetworkConnect extends jspb.Message {
  getNetworkType(): number;
  setNetworkType(value: number): void;

  clearTagList(): void;
  getTagList(): Array<Tag>;
  setTagList(value: Array<Tag>): void;
  addTag(value?: Tag, index?: number): Tag;

  getIp(): string;
  setIp(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkConnect.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkConnect): NetworkConnect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkConnect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkConnect;
  static deserializeBinaryFromReader(message: NetworkConnect, reader: jspb.BinaryReader): NetworkConnect;
}

export namespace NetworkConnect {
  export type AsObject = {
    networkType: number,
    tagList: Array<Tag.AsObject>,
    ip: string,
    port: number,
  }
}

export class Http extends jspb.Message {
  getBody(): string;
  setBody(value: string): void;

  getStatusCode(): number;
  setStatusCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Http.AsObject;
  static toObject(includeInstance: boolean, msg: Http): Http.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Http, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Http;
  static deserializeBinaryFromReader(message: Http, reader: jspb.BinaryReader): Http;
}

export namespace Http {
  export type AsObject = {
    body: string,
    statusCode: number,
  }
}

export class CreateComponentParam extends jspb.Message {
  getType(): CreateComponentParam.ParamTypeMap[keyof CreateComponentParam.ParamTypeMap];
  setType(value: CreateComponentParam.ParamTypeMap[keyof CreateComponentParam.ParamTypeMap]): void;

  getIntParam(): number;
  setIntParam(value: number): void;

  getStringParam(): string;
  setStringParam(value: string): void;

  getUint64Param(): number;
  setUint64Param(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateComponentParam.AsObject;
  static toObject(includeInstance: boolean, msg: CreateComponentParam): CreateComponentParam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateComponentParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateComponentParam;
  static deserializeBinaryFromReader(message: CreateComponentParam, reader: jspb.BinaryReader): CreateComponentParam;
}

export namespace CreateComponentParam {
  export type AsObject = {
    type: CreateComponentParam.ParamTypeMap[keyof CreateComponentParam.ParamTypeMap],
    intParam: number,
    stringParam: string,
    uint64Param: number,
  }

  export interface ParamTypeMap {
    INT: 0;
    STRING: 1;
    UINT64: 2;
  }

  export const ParamType: ParamTypeMap;
}

export class CreateComponent extends jspb.Message {
  getThreadType(): number;
  setThreadType(value: number): void;

  getClassName(): string;
  setClassName(value: string): void;

  clearParamsList(): void;
  getParamsList(): Array<CreateComponentParam>;
  setParamsList(value: Array<CreateComponentParam>): void;
  addParams(value?: CreateComponentParam, index?: number): CreateComponentParam;

  getSn(): number;
  setSn(value: number): void;

  getIsToAll(): boolean;
  setIsToAll(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateComponent.AsObject;
  static toObject(includeInstance: boolean, msg: CreateComponent): CreateComponent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateComponent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateComponent;
  static deserializeBinaryFromReader(message: CreateComponent, reader: jspb.BinaryReader): CreateComponent;
}

export namespace CreateComponent {
  export type AsObject = {
    threadType: number,
    className: string,
    paramsList: Array<CreateComponentParam.AsObject>,
    sn: number,
    isToAll: boolean,
  }
}

export class RemoveComponent extends jspb.Message {
  getSn(): number;
  setSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveComponent.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveComponent): RemoveComponent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveComponent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveComponent;
  static deserializeBinaryFromReader(message: RemoveComponent, reader: jspb.BinaryReader): RemoveComponent;
}

export namespace RemoveComponent {
  export type AsObject = {
    sn: number,
  }
}

export class CreateSystem extends jspb.Message {
  getThreadType(): number;
  setThreadType(value: number): void;

  getSystemName(): string;
  setSystemName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSystem.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSystem): CreateSystem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSystem;
  static deserializeBinaryFromReader(message: CreateSystem, reader: jspb.BinaryReader): CreateSystem;
}

export namespace CreateSystem {
  export type AsObject = {
    threadType: number,
    systemName: string,
  }
}

export class AccountCheck extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  getChannel(): string;
  setChannel(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountCheck.AsObject;
  static toObject(includeInstance: boolean, msg: AccountCheck): AccountCheck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountCheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountCheck;
  static deserializeBinaryFromReader(message: AccountCheck, reader: jspb.BinaryReader): AccountCheck;
}

export namespace AccountCheck {
  export type AsObject = {
    serverId: number,
    channel: string,
    uuid: string,
  }
}

export class AccountCheckRs extends jspb.Message {
  getReturnCode(): AccountCheckReturnCodeMap[keyof AccountCheckReturnCodeMap];
  setReturnCode(value: AccountCheckReturnCodeMap[keyof AccountCheckReturnCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountCheckRs.AsObject;
  static toObject(includeInstance: boolean, msg: AccountCheckRs): AccountCheckRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountCheckRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountCheckRs;
  static deserializeBinaryFromReader(message: AccountCheckRs, reader: jspb.BinaryReader): AccountCheckRs;
}

export namespace AccountCheckRs {
  export type AsObject = {
    returnCode: AccountCheckReturnCodeMap[keyof AccountCheckReturnCodeMap],
  }
}

export class RobotState extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  getState(): number;
  setState(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotState.AsObject;
  static toObject(includeInstance: boolean, msg: RobotState): RobotState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotState;
  static deserializeBinaryFromReader(message: RobotState, reader: jspb.BinaryReader): RobotState;
}

export namespace RobotState {
  export type AsObject = {
    account: string,
    state: number,
  }
}

export class RobotSyncState extends jspb.Message {
  clearStatesList(): void;
  getStatesList(): Array<RobotState>;
  setStatesList(value: Array<RobotState>): void;
  addStates(value?: RobotState, index?: number): RobotState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotSyncState.AsObject;
  static toObject(includeInstance: boolean, msg: RobotSyncState): RobotSyncState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotSyncState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotSyncState;
  static deserializeBinaryFromReader(message: RobotSyncState, reader: jspb.BinaryReader): RobotSyncState;
}

export namespace RobotSyncState {
  export type AsObject = {
    statesList: Array<RobotState.AsObject>,
  }
}

export class RobotCreate extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RobotCreate): RobotCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotCreate;
  static deserializeBinaryFromReader(message: RobotCreate, reader: jspb.BinaryReader): RobotCreate;
}

export namespace RobotCreate {
  export type AsObject = {
    account: string,
  }
}

export class PlayerLittle extends jspb.Message {
  getSn(): number;
  setSn(value: number): void;

  getName(): string;
  setName(value: string): void;

  getLevel(): number;
  setLevel(value: number): void;

  getTemplateId(): number;
  setTemplateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerLittle.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerLittle): PlayerLittle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerLittle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerLittle;
  static deserializeBinaryFromReader(message: PlayerLittle, reader: jspb.BinaryReader): PlayerLittle;
}

export namespace PlayerLittle {
  export type AsObject = {
    sn: number,
    name: string,
    level: number,
    templateId: number,
  }
}

export class PlayerList extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  clearPlayerList(): void;
  getPlayerList(): Array<PlayerLittle>;
  setPlayerList(value: Array<PlayerLittle>): void;
  addPlayer(value?: PlayerLittle, index?: number): PlayerLittle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerList.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerList): PlayerList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerList;
  static deserializeBinaryFromReader(message: PlayerList, reader: jspb.BinaryReader): PlayerList;
}

export namespace PlayerList {
  export type AsObject = {
    account: string,
    playerList: Array<PlayerLittle.AsObject>,
  }
}

export class QueryPlayerList extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPlayerList.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPlayerList): QueryPlayerList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPlayerList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPlayerList;
  static deserializeBinaryFromReader(message: QueryPlayerList, reader: jspb.BinaryReader): QueryPlayerList;
}

export namespace QueryPlayerList {
  export type AsObject = {
    account: string,
  }
}

export class QueryPlayer extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPlayer): QueryPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPlayer;
  static deserializeBinaryFromReader(message: QueryPlayer, reader: jspb.BinaryReader): QueryPlayer;
}

export namespace QueryPlayer {
  export type AsObject = {
    account: string,
    playerSn: number,
  }
}

export class QueryPlayerRs extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): db_pb.Player | undefined;
  setPlayer(value?: db_pb.Player): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPlayerRs.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPlayerRs): QueryPlayerRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPlayerRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPlayerRs;
  static deserializeBinaryFromReader(message: QueryPlayerRs, reader: jspb.BinaryReader): QueryPlayerRs;
}

export namespace QueryPlayerRs {
  export type AsObject = {
    account: string,
    player?: db_pb.Player.AsObject,
  }
}

export class LoadAllAccount extends jspb.Message {
  clearServerIdList(): void;
  getServerIdList(): Array<number>;
  setServerIdList(value: Array<number>): void;
  addServerId(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadAllAccount.AsObject;
  static toObject(includeInstance: boolean, msg: LoadAllAccount): LoadAllAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoadAllAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadAllAccount;
  static deserializeBinaryFromReader(message: LoadAllAccount, reader: jspb.BinaryReader): LoadAllAccount;
}

export namespace LoadAllAccount {
  export type AsObject = {
    serverIdList: Array<number>,
  }
}

export class LoadAllAccountRet extends jspb.Message {
  clearAccountListList(): void;
  getAccountListList(): Array<db_pb.DBAccount>;
  setAccountListList(value: Array<db_pb.DBAccount>): void;
  addAccountList(value?: db_pb.DBAccount, index?: number): db_pb.DBAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadAllAccountRet.AsObject;
  static toObject(includeInstance: boolean, msg: LoadAllAccountRet): LoadAllAccountRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoadAllAccountRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadAllAccountRet;
  static deserializeBinaryFromReader(message: LoadAllAccountRet, reader: jspb.BinaryReader): LoadAllAccountRet;
}

export namespace LoadAllAccountRet {
  export type AsObject = {
    accountListList: Array<db_pb.DBAccount.AsObject>,
  }
}

export class LoadAllPlayer extends jspb.Message {
  clearServerIdList(): void;
  getServerIdList(): Array<number>;
  setServerIdList(value: Array<number>): void;
  addServerId(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadAllPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: LoadAllPlayer): LoadAllPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoadAllPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadAllPlayer;
  static deserializeBinaryFromReader(message: LoadAllPlayer, reader: jspb.BinaryReader): LoadAllPlayer;
}

export namespace LoadAllPlayer {
  export type AsObject = {
    serverIdList: Array<number>,
  }
}

export class LoadAllPlayerRet extends jspb.Message {
  clearPlayerListList(): void;
  getPlayerListList(): Array<db_pb.Player>;
  setPlayerListList(value: Array<db_pb.Player>): void;
  addPlayerList(value?: db_pb.Player, index?: number): db_pb.Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadAllPlayerRet.AsObject;
  static toObject(includeInstance: boolean, msg: LoadAllPlayerRet): LoadAllPlayerRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoadAllPlayerRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadAllPlayerRet;
  static deserializeBinaryFromReader(message: LoadAllPlayerRet, reader: jspb.BinaryReader): LoadAllPlayerRet;
}

export namespace LoadAllPlayerRet {
  export type AsObject = {
    playerListList: Array<db_pb.Player.AsObject>,
  }
}

export class LoadPlayer extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  getAccount(): string;
  setAccount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: LoadPlayer): LoadPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoadPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadPlayer;
  static deserializeBinaryFromReader(message: LoadPlayer, reader: jspb.BinaryReader): LoadPlayer;
}

export namespace LoadPlayer {
  export type AsObject = {
    playerSn: number,
    account: string,
  }
}

export class LoadPlayerRet extends jspb.Message {
  hasPlayerInfo(): boolean;
  clearPlayerInfo(): void;
  getPlayerInfo(): db_pb.Player | undefined;
  setPlayerInfo(value?: db_pb.Player): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadPlayerRet.AsObject;
  static toObject(includeInstance: boolean, msg: LoadPlayerRet): LoadPlayerRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoadPlayerRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadPlayerRet;
  static deserializeBinaryFromReader(message: LoadPlayerRet, reader: jspb.BinaryReader): LoadPlayerRet;
}

export namespace LoadPlayerRet {
  export type AsObject = {
    playerInfo?: db_pb.Player.AsObject,
  }
}

export class PlayerLogin extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  getChannel(): string;
  setChannel(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerLogin.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerLogin): PlayerLogin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerLogin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerLogin;
  static deserializeBinaryFromReader(message: PlayerLogin, reader: jspb.BinaryReader): PlayerLogin;
}

export namespace PlayerLogin {
  export type AsObject = {
    serverId: number,
    channel: string,
    uuid: string,
  }
}

export class PlayerLoginRet extends jspb.Message {
  getRet(): LoginRetCodeMap[keyof LoginRetCodeMap];
  setRet(value: LoginRetCodeMap[keyof LoginRetCodeMap]): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): db_pb.Player | undefined;
  setPlayer(value?: db_pb.Player): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerLoginRet.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerLoginRet): PlayerLoginRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerLoginRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerLoginRet;
  static deserializeBinaryFromReader(message: PlayerLoginRet, reader: jspb.BinaryReader): PlayerLoginRet;
}

export namespace PlayerLoginRet {
  export type AsObject = {
    ret: LoginRetCodeMap[keyof LoginRetCodeMap],
    player?: db_pb.Player.AsObject,
  }
}

export class PlayerCreate extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTemplateId(): number;
  setTemplateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerCreate.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerCreate): PlayerCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerCreate;
  static deserializeBinaryFromReader(message: PlayerCreate, reader: jspb.BinaryReader): PlayerCreate;
}

export namespace PlayerCreate {
  export type AsObject = {
    name: string,
    templateId: number,
  }
}

export class PlayerCreateRet extends jspb.Message {
  getRet(): CreateRetCodeMap[keyof CreateRetCodeMap];
  setRet(value: CreateRetCodeMap[keyof CreateRetCodeMap]): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): db_pb.Player | undefined;
  setPlayer(value?: db_pb.Player): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerCreateRet.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerCreateRet): PlayerCreateRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerCreateRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerCreateRet;
  static deserializeBinaryFromReader(message: PlayerCreateRet, reader: jspb.BinaryReader): PlayerCreateRet;
}

export namespace PlayerCreateRet {
  export type AsObject = {
    ret: CreateRetCodeMap[keyof CreateRetCodeMap],
    player?: db_pb.Player.AsObject,
  }
}

export class SelectPlayer extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelectPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: SelectPlayer): SelectPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SelectPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelectPlayer;
  static deserializeBinaryFromReader(message: SelectPlayer, reader: jspb.BinaryReader): SelectPlayer;
}

export namespace SelectPlayer {
  export type AsObject = {
    playerSn: number,
  }
}

export class SelectPlayerRs extends jspb.Message {
  getReturnCode(): SelectPlayerRs.SelectPlayerReturnCodeMap[keyof SelectPlayerRs.SelectPlayerReturnCodeMap];
  setReturnCode(value: SelectPlayerRs.SelectPlayerReturnCodeMap[keyof SelectPlayerRs.SelectPlayerReturnCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelectPlayerRs.AsObject;
  static toObject(includeInstance: boolean, msg: SelectPlayerRs): SelectPlayerRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SelectPlayerRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelectPlayerRs;
  static deserializeBinaryFromReader(message: SelectPlayerRs, reader: jspb.BinaryReader): SelectPlayerRs;
}

export namespace SelectPlayerRs {
  export type AsObject = {
    returnCode: SelectPlayerRs.SelectPlayerReturnCodeMap[keyof SelectPlayerRs.SelectPlayerReturnCodeMap],
  }

  export interface SelectPlayerReturnCodeMap {
    SPRC_OK: 0;
    SPRC_NOTFOUND: 1;
  }

  export const SelectPlayerReturnCode: SelectPlayerReturnCodeMap;
}

export class SavePlayer extends jspb.Message {
  getSaveMode(): ESaveModeMap[keyof ESaveModeMap];
  setSaveMode(value: ESaveModeMap[keyof ESaveModeMap]): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): db_pb.Player | undefined;
  setPlayer(value?: db_pb.Player): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavePlayer.AsObject;
  static toObject(includeInstance: boolean, msg: SavePlayer): SavePlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SavePlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavePlayer;
  static deserializeBinaryFromReader(message: SavePlayer, reader: jspb.BinaryReader): SavePlayer;
}

export namespace SavePlayer {
  export type AsObject = {
    saveMode: ESaveModeMap[keyof ESaveModeMap],
    player?: db_pb.Player.AsObject,
  }
}

export class WorldSyncToGather extends jspb.Message {
  getWorldSn(): number;
  setWorldSn(value: number): void;

  getWorldId(): number;
  setWorldId(value: number): void;

  getOnline(): number;
  setOnline(value: number): void;

  getIsRemove(): boolean;
  setIsRemove(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldSyncToGather.AsObject;
  static toObject(includeInstance: boolean, msg: WorldSyncToGather): WorldSyncToGather.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorldSyncToGather, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldSyncToGather;
  static deserializeBinaryFromReader(message: WorldSyncToGather, reader: jspb.BinaryReader): WorldSyncToGather;
}

export namespace WorldSyncToGather {
  export type AsObject = {
    worldSn: number,
    worldId: number,
    online: number,
    isRemove: boolean,
  }
}

export class WorldProxySyncToGather extends jspb.Message {
  getWorldSn(): number;
  setWorldSn(value: number): void;

  getIsRemove(): boolean;
  setIsRemove(value: boolean): void;

  getWorldId(): number;
  setWorldId(value: number): void;

  getOnline(): number;
  setOnline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldProxySyncToGather.AsObject;
  static toObject(includeInstance: boolean, msg: WorldProxySyncToGather): WorldProxySyncToGather.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorldProxySyncToGather, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldProxySyncToGather;
  static deserializeBinaryFromReader(message: WorldProxySyncToGather, reader: jspb.BinaryReader): WorldProxySyncToGather;
}

export namespace WorldProxySyncToGather {
  export type AsObject = {
    worldSn: number,
    isRemove: boolean,
    worldId: number,
    online: number,
  }
}

export class GameToken extends jspb.Message {
  getReturnCode(): GameToken.ReturnCodeMap[keyof GameToken.ReturnCodeMap];
  setReturnCode(value: GameToken.ReturnCodeMap[keyof GameToken.ReturnCodeMap]): void;

  getToken(): string;
  setToken(value: string): void;

  getIp(): string;
  setIp(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getServerId(): number;
  setServerId(value: number): void;

  getChannel(): string;
  setChannel(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameToken.AsObject;
  static toObject(includeInstance: boolean, msg: GameToken): GameToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameToken;
  static deserializeBinaryFromReader(message: GameToken, reader: jspb.BinaryReader): GameToken;
}

export namespace GameToken {
  export type AsObject = {
    returnCode: GameToken.ReturnCodeMap[keyof GameToken.ReturnCodeMap],
    token: string,
    ip: string,
    port: number,
    serverId: number,
    channel: string,
    uuid: string,
  }

  export interface ReturnCodeMap {
    GAMETOKEN_OK: 0;
    GAMETOKEN_NO_GAME: 1;
  }

  export const ReturnCode: ReturnCodeMap;
}

export class LoginByToken extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  getChannel(): string;
  setChannel(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  getAccount(): string;
  setAccount(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginByToken.AsObject;
  static toObject(includeInstance: boolean, msg: LoginByToken): LoginByToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginByToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginByToken;
  static deserializeBinaryFromReader(message: LoginByToken, reader: jspb.BinaryReader): LoginByToken;
}

export namespace LoginByToken {
  export type AsObject = {
    serverId: number,
    channel: string,
    uuid: string,
    account: string,
    token: string,
  }
}

export class LoginByTokenRs extends jspb.Message {
  getReturnCode(): LoginByTokenRs.ReturnCodeMap[keyof LoginByTokenRs.ReturnCodeMap];
  setReturnCode(value: LoginByTokenRs.ReturnCodeMap[keyof LoginByTokenRs.ReturnCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginByTokenRs.AsObject;
  static toObject(includeInstance: boolean, msg: LoginByTokenRs): LoginByTokenRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginByTokenRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginByTokenRs;
  static deserializeBinaryFromReader(message: LoginByTokenRs, reader: jspb.BinaryReader): LoginByTokenRs;
}

export namespace LoginByTokenRs {
  export type AsObject = {
    returnCode: LoginByTokenRs.ReturnCodeMap[keyof LoginByTokenRs.ReturnCodeMap],
  }

  export interface ReturnCodeMap {
    LGRC_OK: 0;
    LGRC_UNKONWN: 1;
    LGRC_NOT_FOUND_ACCOUNT: 2;
    LGRC_TOKEN_WRONG: 3;
  }

  export const ReturnCode: ReturnCodeMap;
}

export class TokenInfo extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TokenInfo): TokenInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenInfo;
  static deserializeBinaryFromReader(message: TokenInfo, reader: jspb.BinaryReader): TokenInfo;
}

export namespace TokenInfo {
  export type AsObject = {
    token: string,
    playerSn: number,
  }
}

export class SyncPlayer extends jspb.Message {
  getAppId(): number;
  setAppId(value: number): void;

  getAccount(): string;
  setAccount(value: string): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): db_pb.Player | undefined;
  setPlayer(value?: db_pb.Player): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: SyncPlayer): SyncPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncPlayer;
  static deserializeBinaryFromReader(message: SyncPlayer, reader: jspb.BinaryReader): SyncPlayer;
}

export namespace SyncPlayer {
  export type AsObject = {
    appId: number,
    account: string,
    player?: db_pb.Player.AsObject,
  }
}

export class EnterWorld extends jspb.Message {
  getWorldId(): number;
  setWorldId(value: number): void;

  getWorldSn(): number;
  setWorldSn(value: number): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): db_pb.Vector3 | undefined;
  setPosition(value?: db_pb.Vector3): void;

  hasRotation(): boolean;
  clearRotation(): void;
  getRotation(): db_pb.Vector3 | undefined;
  setRotation(value?: db_pb.Vector3): void;

  hasWorldData(): boolean;
  clearWorldData(): void;
  getWorldData(): db_pb.DBWorldData | undefined;
  setWorldData(value?: db_pb.DBWorldData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnterWorld.AsObject;
  static toObject(includeInstance: boolean, msg: EnterWorld): EnterWorld.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnterWorld, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnterWorld;
  static deserializeBinaryFromReader(message: EnterWorld, reader: jspb.BinaryReader): EnterWorld;
}

export namespace EnterWorld {
  export type AsObject = {
    worldId: number,
    worldSn: number,
    position?: db_pb.Vector3.AsObject,
    rotation?: db_pb.Vector3.AsObject,
    worldData?: db_pb.DBWorldData.AsObject,
  }
}

export class EnterHome extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnterHome.AsObject;
  static toObject(includeInstance: boolean, msg: EnterHome): EnterHome.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnterHome, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnterHome;
  static deserializeBinaryFromReader(message: EnterHome, reader: jspb.BinaryReader): EnterHome;
}

export namespace EnterHome {
  export type AsObject = {
    playerSn: number,
  }
}

export class QueryDungeonBySn extends jspb.Message {
  getWorldSn(): number;
  setWorldSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDungeonBySn.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDungeonBySn): QueryDungeonBySn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDungeonBySn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDungeonBySn;
  static deserializeBinaryFromReader(message: QueryDungeonBySn, reader: jspb.BinaryReader): QueryDungeonBySn;
}

export namespace QueryDungeonBySn {
  export type AsObject = {
    worldSn: number,
  }
}

export class QueryDungeonBySnRs extends jspb.Message {
  getWorldSn(): number;
  setWorldSn(value: number): void;

  getReturnCode(): QueryDungeonBySnRs.ReturnCodeMap[keyof QueryDungeonBySnRs.ReturnCodeMap];
  setReturnCode(value: QueryDungeonBySnRs.ReturnCodeMap[keyof QueryDungeonBySnRs.ReturnCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDungeonBySnRs.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDungeonBySnRs): QueryDungeonBySnRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDungeonBySnRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDungeonBySnRs;
  static deserializeBinaryFromReader(message: QueryDungeonBySnRs, reader: jspb.BinaryReader): QueryDungeonBySnRs;
}

export namespace QueryDungeonBySnRs {
  export type AsObject = {
    worldSn: number,
    returnCode: QueryDungeonBySnRs.ReturnCodeMap[keyof QueryDungeonBySnRs.ReturnCodeMap],
  }

  export interface ReturnCodeMap {
    QUERYWORLD_OK: 0;
    QUERYWORLD_FAILED: 1;
  }

  export const ReturnCode: ReturnCodeMap;
}

export class RequestWorld extends jspb.Message {
  getWorldId(): number;
  setWorldId(value: number): void;

  getForPlayer(): number;
  setForPlayer(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestWorld.AsObject;
  static toObject(includeInstance: boolean, msg: RequestWorld): RequestWorld.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestWorld, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestWorld;
  static deserializeBinaryFromReader(message: RequestWorld, reader: jspb.BinaryReader): RequestWorld;
}

export namespace RequestWorld {
  export type AsObject = {
    worldId: number,
    forPlayer: number,
  }
}

export class CreateWorld extends jspb.Message {
  getWorldId(): number;
  setWorldId(value: number): void;

  getAlive(): number;
  setAlive(value: number): void;

  getForPlayer(): number;
  setForPlayer(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorld.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorld): CreateWorld.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWorld, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorld;
  static deserializeBinaryFromReader(message: CreateWorld, reader: jspb.BinaryReader): CreateWorld;
}

export namespace CreateWorld {
  export type AsObject = {
    worldId: number,
    alive: number,
    forPlayer: number,
  }
}

export class DestoryWorld extends jspb.Message {
  getWorldSn(): number;
  setWorldSn(value: number): void;

  getForPlayer(): number;
  setForPlayer(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestoryWorld.AsObject;
  static toObject(includeInstance: boolean, msg: DestoryWorld): DestoryWorld.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DestoryWorld, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestoryWorld;
  static deserializeBinaryFromReader(message: DestoryWorld, reader: jspb.BinaryReader): DestoryWorld;
}

export namespace DestoryWorld {
  export type AsObject = {
    worldSn: number,
    forPlayer: number,
  }
}

export class BroadcastCreateWorld extends jspb.Message {
  getWorldId(): number;
  setWorldId(value: number): void;

  getWorldSn(): number;
  setWorldSn(value: number): void;

  getForPlayer(): number;
  setForPlayer(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastCreateWorld.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastCreateWorld): BroadcastCreateWorld.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastCreateWorld, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastCreateWorld;
  static deserializeBinaryFromReader(message: BroadcastCreateWorld, reader: jspb.BinaryReader): BroadcastCreateWorld;
}

export namespace BroadcastCreateWorld {
  export type AsObject = {
    worldId: number,
    worldSn: number,
    forPlayer: number,
  }
}

export class RequestCreateWorldProxy extends jspb.Message {
  getWorldId(): number;
  setWorldId(value: number): void;

  getWorldSn(): number;
  setWorldSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCreateWorldProxy.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCreateWorldProxy): RequestCreateWorldProxy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCreateWorldProxy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCreateWorldProxy;
  static deserializeBinaryFromReader(message: RequestCreateWorldProxy, reader: jspb.BinaryReader): RequestCreateWorldProxy;
}

export namespace RequestCreateWorldProxy {
  export type AsObject = {
    worldId: number,
    worldSn: number,
  }
}

export class BroadcastCreateWorldProxy extends jspb.Message {
  getWorldId(): number;
  setWorldId(value: number): void;

  getWorldSn(): number;
  setWorldSn(value: number): void;

  getForPlayer(): number;
  setForPlayer(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastCreateWorldProxy.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastCreateWorldProxy): BroadcastCreateWorldProxy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastCreateWorldProxy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastCreateWorldProxy;
  static deserializeBinaryFromReader(message: BroadcastCreateWorldProxy, reader: jspb.BinaryReader): BroadcastCreateWorldProxy;
}

export namespace BroadcastCreateWorldProxy {
  export type AsObject = {
    worldId: number,
    worldSn: number,
    forPlayer: number,
  }
}

export class QueryWorldData extends jspb.Message {
  getWorldId(): number;
  setWorldId(value: number): void;

  getWorldSn(): number;
  setWorldSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryWorldData.AsObject;
  static toObject(includeInstance: boolean, msg: QueryWorldData): QueryWorldData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryWorldData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryWorldData;
  static deserializeBinaryFromReader(message: QueryWorldData, reader: jspb.BinaryReader): QueryWorldData;
}

export namespace QueryWorldData {
  export type AsObject = {
    worldId: number,
    worldSn: number,
  }
}

export class QueryWorldDataRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  hasWorldData(): boolean;
  clearWorldData(): void;
  getWorldData(): db_pb.DBWorldData | undefined;
  setWorldData(value?: db_pb.DBWorldData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryWorldDataRet.AsObject;
  static toObject(includeInstance: boolean, msg: QueryWorldDataRet): QueryWorldDataRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryWorldDataRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryWorldDataRet;
  static deserializeBinaryFromReader(message: QueryWorldDataRet, reader: jspb.BinaryReader): QueryWorldDataRet;
}

export namespace QueryWorldDataRet {
  export type AsObject = {
    ret: number,
    worldData?: db_pb.DBWorldData.AsObject,
  }
}

export class SyncWorldData extends jspb.Message {
  hasWorldData(): boolean;
  clearWorldData(): void;
  getWorldData(): db_pb.DBWorldData | undefined;
  setWorldData(value?: db_pb.DBWorldData): void;

  clearDieSnListList(): void;
  getDieSnListList(): Array<number>;
  setDieSnListList(value: Array<number>): void;
  addDieSnList(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncWorldData.AsObject;
  static toObject(includeInstance: boolean, msg: SyncWorldData): SyncWorldData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncWorldData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncWorldData;
  static deserializeBinaryFromReader(message: SyncWorldData, reader: jspb.BinaryReader): SyncWorldData;
}

export namespace SyncWorldData {
  export type AsObject = {
    worldData?: db_pb.DBWorldData.AsObject,
    dieSnListList: Array<number>,
  }
}

export class WorldAction extends jspb.Message {
  getTargetType(): number;
  setTargetType(value: number): void;

  getTargetSn(): number;
  setTargetSn(value: number): void;

  getActionType(): number;
  setActionType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldAction.AsObject;
  static toObject(includeInstance: boolean, msg: WorldAction): WorldAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorldAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldAction;
  static deserializeBinaryFromReader(message: WorldAction, reader: jspb.BinaryReader): WorldAction;
}

export namespace WorldAction {
  export type AsObject = {
    targetType: number,
    targetSn: number,
    actionType: number,
  }
}

export class WorldActionRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldActionRet.AsObject;
  static toObject(includeInstance: boolean, msg: WorldActionRet): WorldActionRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorldActionRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldActionRet;
  static deserializeBinaryFromReader(message: WorldActionRet, reader: jspb.BinaryReader): WorldActionRet;
}

export namespace WorldActionRet {
  export type AsObject = {
    ret: number,
  }
}

export class SyncWorldAction extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  getTargetSn(): number;
  setTargetSn(value: number): void;

  getTargetType(): number;
  setTargetType(value: number): void;

  getActionType(): number;
  setActionType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncWorldAction.AsObject;
  static toObject(includeInstance: boolean, msg: SyncWorldAction): SyncWorldAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncWorldAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncWorldAction;
  static deserializeBinaryFromReader(message: SyncWorldAction, reader: jspb.BinaryReader): SyncWorldAction;
}

export namespace SyncWorldAction {
  export type AsObject = {
    playerSn: number,
    targetSn: number,
    targetType: number,
    actionType: number,
  }
}

export class RemovePlayer extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePlayer.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePlayer): RemovePlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePlayer;
  static deserializeBinaryFromReader(message: RemovePlayer, reader: jspb.BinaryReader): RemovePlayer;
}

export namespace RemovePlayer {
  export type AsObject = {
    playerSn: number,
  }
}

export class RequestSyncPlayer extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestSyncPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: RequestSyncPlayer): RequestSyncPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestSyncPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestSyncPlayer;
  static deserializeBinaryFromReader(message: RequestSyncPlayer, reader: jspb.BinaryReader): RequestSyncPlayer;
}

export namespace RequestSyncPlayer {
  export type AsObject = {
    playerSn: number,
  }
}

export class Role extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSn(): number;
  setSn(value: number): void;

  getTemplateId(): number;
  setTemplateId(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): db_pb.Vector3 | undefined;
  setPosition(value?: db_pb.Vector3): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    name: string,
    sn: number,
    templateId: number,
    level: number,
    position?: db_pb.Vector3.AsObject,
  }
}

export class RoleAppear extends jspb.Message {
  clearRoleList(): void;
  getRoleList(): Array<Role>;
  setRoleList(value: Array<Role>): void;
  addRole(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleAppear.AsObject;
  static toObject(includeInstance: boolean, msg: RoleAppear): RoleAppear.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleAppear, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleAppear;
  static deserializeBinaryFromReader(message: RoleAppear, reader: jspb.BinaryReader): RoleAppear;
}

export namespace RoleAppear {
  export type AsObject = {
    roleList: Array<Role.AsObject>,
  }
}

export class RoleDisAppear extends jspb.Message {
  getSn(): number;
  setSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleDisAppear.AsObject;
  static toObject(includeInstance: boolean, msg: RoleDisAppear): RoleDisAppear.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleDisAppear, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleDisAppear;
  static deserializeBinaryFromReader(message: RoleDisAppear, reader: jspb.BinaryReader): RoleDisAppear;
}

export namespace RoleDisAppear {
  export type AsObject = {
    sn: number,
  }
}

export class Teleport extends jspb.Message {
  getLastWorldSn(): number;
  setLastWorldSn(value: number): void;

  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  getAccount(): string;
  setAccount(value: string): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): db_pb.Player | undefined;
  setPlayer(value?: db_pb.Player): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Teleport.AsObject;
  static toObject(includeInstance: boolean, msg: Teleport): Teleport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Teleport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Teleport;
  static deserializeBinaryFromReader(message: Teleport, reader: jspb.BinaryReader): Teleport;
}

export namespace Teleport {
  export type AsObject = {
    lastWorldSn: number,
    playerSn: number,
    account: string,
    player?: db_pb.Player.AsObject,
  }
}

export class TeleportAfter extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeleportAfter.AsObject;
  static toObject(includeInstance: boolean, msg: TeleportAfter): TeleportAfter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TeleportAfter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeleportAfter;
  static deserializeBinaryFromReader(message: TeleportAfter, reader: jspb.BinaryReader): TeleportAfter;
}

export namespace TeleportAfter {
  export type AsObject = {
    playerSn: number,
  }
}

export class MoveByRotation extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): db_pb.Vector3 | undefined;
  setPosition(value?: db_pb.Vector3): void;

  hasRotation(): boolean;
  clearRotation(): void;
  getRotation(): db_pb.Vector3 | undefined;
  setRotation(value?: db_pb.Vector3): void;

  hasDirection(): boolean;
  clearDirection(): void;
  getDirection(): db_pb.Vector3 | undefined;
  setDirection(value?: db_pb.Vector3): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveByRotation.AsObject;
  static toObject(includeInstance: boolean, msg: MoveByRotation): MoveByRotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveByRotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveByRotation;
  static deserializeBinaryFromReader(message: MoveByRotation, reader: jspb.BinaryReader): MoveByRotation;
}

export namespace MoveByRotation {
  export type AsObject = {
    playerSn: number,
    position?: db_pb.Vector3.AsObject,
    rotation?: db_pb.Vector3.AsObject,
    direction?: db_pb.Vector3.AsObject,
    value: number,
  }
}

export class AddItem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNum(): number;
  setNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddItem.AsObject;
  static toObject(includeInstance: boolean, msg: AddItem): AddItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddItem;
  static deserializeBinaryFromReader(message: AddItem, reader: jspb.BinaryReader): AddItem;
}

export namespace AddItem {
  export type AsObject = {
    id: number,
    num: number,
  }
}

export class AddItemRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  getId(): number;
  setId(value: number): void;

  getNum(): number;
  setNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddItemRet.AsObject;
  static toObject(includeInstance: boolean, msg: AddItemRet): AddItemRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddItemRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddItemRet;
  static deserializeBinaryFromReader(message: AddItemRet, reader: jspb.BinaryReader): AddItemRet;
}

export namespace AddItemRet {
  export type AsObject = {
    ret: number,
    id: number,
    num: number,
  }
}

export class AddExp extends jspb.Message {
  getExp(): number;
  setExp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddExp.AsObject;
  static toObject(includeInstance: boolean, msg: AddExp): AddExp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddExp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddExp;
  static deserializeBinaryFromReader(message: AddExp, reader: jspb.BinaryReader): AddExp;
}

export namespace AddExp {
  export type AsObject = {
    exp: number,
  }
}

export class AddExpRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  getExp(): number;
  setExp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddExpRet.AsObject;
  static toObject(includeInstance: boolean, msg: AddExpRet): AddExpRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddExpRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddExpRet;
  static deserializeBinaryFromReader(message: AddExpRet, reader: jspb.BinaryReader): AddExpRet;
}

export namespace AddExpRet {
  export type AsObject = {
    ret: number,
    exp: number,
  }
}

export class Dungeon extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStar(): number;
  setStar(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dungeon.AsObject;
  static toObject(includeInstance: boolean, msg: Dungeon): Dungeon.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dungeon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dungeon;
  static deserializeBinaryFromReader(message: Dungeon, reader: jspb.BinaryReader): Dungeon;
}

export namespace Dungeon {
  export type AsObject = {
    id: number,
    star: number,
  }
}

export class DungeonRs extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  clearItemListList(): void;
  getItemListList(): Array<db_pb.ItemBase>;
  setItemListList(value: Array<db_pb.ItemBase>): void;
  addItemList(value?: db_pb.ItemBase, index?: number): db_pb.ItemBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DungeonRs.AsObject;
  static toObject(includeInstance: boolean, msg: DungeonRs): DungeonRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DungeonRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DungeonRs;
  static deserializeBinaryFromReader(message: DungeonRs, reader: jspb.BinaryReader): DungeonRs;
}

export namespace DungeonRs {
  export type AsObject = {
    ret: number,
    itemListList: Array<db_pb.ItemBase.AsObject>,
  }
}

export class Chat extends jspb.Message {
  getChannel(): eChatChannelMap[keyof eChatChannelMap];
  setChannel(value: eChatChannelMap[keyof eChatChannelMap]): void;

  getTargetSn(): number;
  setTargetSn(value: number): void;

  getCross(): boolean;
  setCross(value: boolean): void;

  getServerId(): number;
  setServerId(value: number): void;

  getChatMsg(): Uint8Array | string;
  getChatMsg_asU8(): Uint8Array;
  getChatMsg_asB64(): string;
  setChatMsg(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chat.AsObject;
  static toObject(includeInstance: boolean, msg: Chat): Chat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chat;
  static deserializeBinaryFromReader(message: Chat, reader: jspb.BinaryReader): Chat;
}

export namespace Chat {
  export type AsObject = {
    channel: eChatChannelMap[keyof eChatChannelMap],
    targetSn: number,
    cross: boolean,
    serverId: number,
    chatMsg: Uint8Array | string,
  }
}

export class ChatRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRet.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRet): ChatRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRet;
  static deserializeBinaryFromReader(message: ChatRet, reader: jspb.BinaryReader): ChatRet;
}

export namespace ChatRet {
  export type AsObject = {
    ret: number,
  }
}

export class SyncChat extends jspb.Message {
  getChannel(): eChatChannelMap[keyof eChatChannelMap];
  setChannel(value: eChatChannelMap[keyof eChatChannelMap]): void;

  clearChatsList(): void;
  getChatsList(): Array<STChatInfo>;
  setChatsList(value: Array<STChatInfo>): void;
  addChats(value?: STChatInfo, index?: number): STChatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncChat.AsObject;
  static toObject(includeInstance: boolean, msg: SyncChat): SyncChat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncChat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncChat;
  static deserializeBinaryFromReader(message: SyncChat, reader: jspb.BinaryReader): SyncChat;
}

export namespace SyncChat {
  export type AsObject = {
    channel: eChatChannelMap[keyof eChatChannelMap],
    chatsList: Array<STChatInfo.AsObject>,
  }
}

export class GetChatRecord extends jspb.Message {
  getChannel(): eChatChannelMap[keyof eChatChannelMap];
  setChannel(value: eChatChannelMap[keyof eChatChannelMap]): void;

  getChatId(): number;
  setChatId(value: number): void;

  getTargetSn(): number;
  setTargetSn(value: number): void;

  getMySn(): number;
  setMySn(value: number): void;

  getServerId(): number;
  setServerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatRecord.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatRecord): GetChatRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChatRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatRecord;
  static deserializeBinaryFromReader(message: GetChatRecord, reader: jspb.BinaryReader): GetChatRecord;
}

export namespace GetChatRecord {
  export type AsObject = {
    channel: eChatChannelMap[keyof eChatChannelMap],
    chatId: number,
    targetSn: number,
    mySn: number,
    serverId: number,
  }
}

export class STChatInfo extends jspb.Message {
  getChannel(): eChatChannelMap[keyof eChatChannelMap];
  setChannel(value: eChatChannelMap[keyof eChatChannelMap]): void;

  getChatTime(): number;
  setChatTime(value: number): void;

  getChatId(): number;
  setChatId(value: number): void;

  getCross(): boolean;
  setCross(value: boolean): void;

  getServerId(): number;
  setServerId(value: number): void;

  getChatMsg(): Uint8Array | string;
  getChatMsg_asU8(): Uint8Array;
  getChatMsg_asB64(): string;
  setChatMsg(value: Uint8Array | string): void;

  getSenderSn(): number;
  setSenderSn(value: number): void;

  getSenderName(): Uint8Array | string;
  getSenderName_asU8(): Uint8Array;
  getSenderName_asB64(): string;
  setSenderName(value: Uint8Array | string): void;

  getRecverSn(): number;
  setRecverSn(value: number): void;

  getRecverName(): Uint8Array | string;
  getRecverName_asU8(): Uint8Array;
  getRecverName_asB64(): string;
  setRecverName(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STChatInfo.AsObject;
  static toObject(includeInstance: boolean, msg: STChatInfo): STChatInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: STChatInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STChatInfo;
  static deserializeBinaryFromReader(message: STChatInfo, reader: jspb.BinaryReader): STChatInfo;
}

export namespace STChatInfo {
  export type AsObject = {
    channel: eChatChannelMap[keyof eChatChannelMap],
    chatTime: number,
    chatId: number,
    cross: boolean,
    serverId: number,
    chatMsg: Uint8Array | string,
    senderSn: number,
    senderName: Uint8Array | string,
    recverSn: number,
    recverName: Uint8Array | string,
  }
}

export class GetChatRecordRet extends jspb.Message {
  getChannel(): eChatChannelMap[keyof eChatChannelMap];
  setChannel(value: eChatChannelMap[keyof eChatChannelMap]): void;

  clearChatsList(): void;
  getChatsList(): Array<STChatInfo>;
  setChatsList(value: Array<STChatInfo>): void;
  addChats(value?: STChatInfo, index?: number): STChatInfo;

  getMySn(): number;
  setMySn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatRecordRet.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatRecordRet): GetChatRecordRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChatRecordRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatRecordRet;
  static deserializeBinaryFromReader(message: GetChatRecordRet, reader: jspb.BinaryReader): GetChatRecordRet;
}

export namespace GetChatRecordRet {
  export type AsObject = {
    channel: eChatChannelMap[keyof eChatChannelMap],
    chatsList: Array<STChatInfo.AsObject>,
    mySn: number,
  }
}

export class QueryAllPlayerName extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllPlayerName.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllPlayerName): QueryAllPlayerName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAllPlayerName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllPlayerName;
  static deserializeBinaryFromReader(message: QueryAllPlayerName, reader: jspb.BinaryReader): QueryAllPlayerName;
}

export namespace QueryAllPlayerName {
  export type AsObject = {
  }
}

export class STPlayerSnName extends jspb.Message {
  getSn(): number;
  setSn(value: number): void;

  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STPlayerSnName.AsObject;
  static toObject(includeInstance: boolean, msg: STPlayerSnName): STPlayerSnName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: STPlayerSnName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STPlayerSnName;
  static deserializeBinaryFromReader(message: STPlayerSnName, reader: jspb.BinaryReader): STPlayerSnName;
}

export namespace STPlayerSnName {
  export type AsObject = {
    sn: number,
    name: Uint8Array | string,
  }
}

export class QueryAllPlayerNameRet extends jspb.Message {
  clearInfosList(): void;
  getInfosList(): Array<STPlayerSnName>;
  setInfosList(value: Array<STPlayerSnName>): void;
  addInfos(value?: STPlayerSnName, index?: number): STPlayerSnName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllPlayerNameRet.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllPlayerNameRet): QueryAllPlayerNameRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAllPlayerNameRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllPlayerNameRet;
  static deserializeBinaryFromReader(message: QueryAllPlayerNameRet, reader: jspb.BinaryReader): QueryAllPlayerNameRet;
}

export namespace QueryAllPlayerNameRet {
  export type AsObject = {
    infosList: Array<STPlayerSnName.AsObject>,
  }
}

export class Mute extends jspb.Message {
  getCross(): boolean;
  setCross(value: boolean): void;

  getServerId(): number;
  setServerId(value: number): void;

  getTargetSn(): number;
  setTargetSn(value: number): void;

  getMute(): boolean;
  setMute(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mute.AsObject;
  static toObject(includeInstance: boolean, msg: Mute): Mute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Mute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mute;
  static deserializeBinaryFromReader(message: Mute, reader: jspb.BinaryReader): Mute;
}

export namespace Mute {
  export type AsObject = {
    cross: boolean,
    serverId: number,
    targetSn: number,
    mute: boolean,
  }
}

export class MuteRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  getOperatorSn(): number;
  setOperatorSn(value: number): void;

  getTargetSn(): number;
  setTargetSn(value: number): void;

  getMute(): boolean;
  setMute(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MuteRet.AsObject;
  static toObject(includeInstance: boolean, msg: MuteRet): MuteRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MuteRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MuteRet;
  static deserializeBinaryFromReader(message: MuteRet, reader: jspb.BinaryReader): MuteRet;
}

export namespace MuteRet {
  export type AsObject = {
    ret: number,
    operatorSn: number,
    targetSn: number,
    mute: boolean,
  }
}

export class GetTargetInfo extends jspb.Message {
  getCross(): boolean;
  setCross(value: boolean): void;

  getServerId(): number;
  setServerId(value: number): void;

  getTargetSn(): number;
  setTargetSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetInfo): GetTargetInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTargetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetInfo;
  static deserializeBinaryFromReader(message: GetTargetInfo, reader: jspb.BinaryReader): GetTargetInfo;
}

export namespace GetTargetInfo {
  export type AsObject = {
    cross: boolean,
    serverId: number,
    targetSn: number,
  }
}

export class GetTargetInfoRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  getCross(): boolean;
  setCross(value: boolean): void;

  getServerId(): number;
  setServerId(value: number): void;

  getTargetSn(): number;
  setTargetSn(value: number): void;

  getTargetName(): Uint8Array | string;
  getTargetName_asU8(): Uint8Array;
  getTargetName_asB64(): string;
  setTargetName(value: Uint8Array | string): void;

  getInBlacklist(): boolean;
  setInBlacklist(value: boolean): void;

  getInMute(): boolean;
  setInMute(value: boolean): void;

  getResPic(): Uint8Array | string;
  getResPic_asU8(): Uint8Array;
  getResPic_asB64(): string;
  setResPic(value: Uint8Array | string): void;

  getOnline(): boolean;
  setOnline(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetInfoRet.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetInfoRet): GetTargetInfoRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTargetInfoRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetInfoRet;
  static deserializeBinaryFromReader(message: GetTargetInfoRet, reader: jspb.BinaryReader): GetTargetInfoRet;
}

export namespace GetTargetInfoRet {
  export type AsObject = {
    ret: number,
    cross: boolean,
    serverId: number,
    targetSn: number,
    targetName: Uint8Array | string,
    inBlacklist: boolean,
    inMute: boolean,
    resPic: Uint8Array | string,
    online: boolean,
  }
}

export class BoardcastLogin extends jspb.Message {
  getSn(): number;
  setSn(value: number): void;

  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoardcastLogin.AsObject;
  static toObject(includeInstance: boolean, msg: BoardcastLogin): BoardcastLogin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoardcastLogin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoardcastLogin;
  static deserializeBinaryFromReader(message: BoardcastLogin, reader: jspb.BinaryReader): BoardcastLogin;
}

export namespace BoardcastLogin {
  export type AsObject = {
    sn: number,
    name: Uint8Array | string,
  }
}

export class STFriendInfo extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  getVip(): number;
  setVip(value: number): void;

  getOnline(): number;
  setOnline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STFriendInfo.AsObject;
  static toObject(includeInstance: boolean, msg: STFriendInfo): STFriendInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: STFriendInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STFriendInfo;
  static deserializeBinaryFromReader(message: STFriendInfo, reader: jspb.BinaryReader): STFriendInfo;
}

export namespace STFriendInfo {
  export type AsObject = {
    playerSn: number,
    level: number,
    vip: number,
    online: number,
  }
}

export class GetFriendList extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFriendList.AsObject;
  static toObject(includeInstance: boolean, msg: GetFriendList): GetFriendList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFriendList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFriendList;
  static deserializeBinaryFromReader(message: GetFriendList, reader: jspb.BinaryReader): GetFriendList;
}

export namespace GetFriendList {
  export type AsObject = {
  }
}

export class GetFriendListRet extends jspb.Message {
  clearFriendsList(): void;
  getFriendsList(): Array<STFriendInfo>;
  setFriendsList(value: Array<STFriendInfo>): void;
  addFriends(value?: STFriendInfo, index?: number): STFriendInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFriendListRet.AsObject;
  static toObject(includeInstance: boolean, msg: GetFriendListRet): GetFriendListRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFriendListRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFriendListRet;
  static deserializeBinaryFromReader(message: GetFriendListRet, reader: jspb.BinaryReader): GetFriendListRet;
}

export namespace GetFriendListRet {
  export type AsObject = {
    friendsList: Array<STFriendInfo.AsObject>,
  }
}

export class AddFriend extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddFriend.AsObject;
  static toObject(includeInstance: boolean, msg: AddFriend): AddFriend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddFriend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddFriend;
  static deserializeBinaryFromReader(message: AddFriend, reader: jspb.BinaryReader): AddFriend;
}

export namespace AddFriend {
  export type AsObject = {
    serverId: number,
    playerSn: number,
  }
}

export class AddFriendRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddFriendRet.AsObject;
  static toObject(includeInstance: boolean, msg: AddFriendRet): AddFriendRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddFriendRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddFriendRet;
  static deserializeBinaryFromReader(message: AddFriendRet, reader: jspb.BinaryReader): AddFriendRet;
}

export namespace AddFriendRet {
  export type AsObject = {
    ret: number,
  }
}

export class DelFriend extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelFriend.AsObject;
  static toObject(includeInstance: boolean, msg: DelFriend): DelFriend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DelFriend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelFriend;
  static deserializeBinaryFromReader(message: DelFriend, reader: jspb.BinaryReader): DelFriend;
}

export namespace DelFriend {
  export type AsObject = {
    playerSn: number,
  }
}

export class DelFriendRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelFriendRet.AsObject;
  static toObject(includeInstance: boolean, msg: DelFriendRet): DelFriendRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DelFriendRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelFriendRet;
  static deserializeBinaryFromReader(message: DelFriendRet, reader: jspb.BinaryReader): DelFriendRet;
}

export namespace DelFriendRet {
  export type AsObject = {
    ret: number,
  }
}

export class RefreshFriend extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshFriend.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshFriend): RefreshFriend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefreshFriend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshFriend;
  static deserializeBinaryFromReader(message: RefreshFriend, reader: jspb.BinaryReader): RefreshFriend;
}

export namespace RefreshFriend {
  export type AsObject = {
  }
}

export class RefreshFriendRet extends jspb.Message {
  clearFriendsList(): void;
  getFriendsList(): Array<STFriendInfo>;
  setFriendsList(value: Array<STFriendInfo>): void;
  addFriends(value?: STFriendInfo, index?: number): STFriendInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshFriendRet.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshFriendRet): RefreshFriendRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefreshFriendRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshFriendRet;
  static deserializeBinaryFromReader(message: RefreshFriendRet, reader: jspb.BinaryReader): RefreshFriendRet;
}

export namespace RefreshFriendRet {
  export type AsObject = {
    friendsList: Array<STFriendInfo.AsObject>,
  }
}

export class JoinGuild extends jspb.Message {
  getGuildSn(): number;
  setGuildSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGuild.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGuild): JoinGuild.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGuild, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGuild;
  static deserializeBinaryFromReader(message: JoinGuild, reader: jspb.BinaryReader): JoinGuild;
}

export namespace JoinGuild {
  export type AsObject = {
    guildSn: number,
  }
}

export class JoinGuildRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  getGuildSn(): number;
  setGuildSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGuildRet.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGuildRet): JoinGuildRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGuildRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGuildRet;
  static deserializeBinaryFromReader(message: JoinGuildRet, reader: jspb.BinaryReader): JoinGuildRet;
}

export namespace JoinGuildRet {
  export type AsObject = {
    ret: number,
    guildSn: number,
  }
}

export class QuitGuild extends jspb.Message {
  getGuildSn(): number;
  setGuildSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuitGuild.AsObject;
  static toObject(includeInstance: boolean, msg: QuitGuild): QuitGuild.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuitGuild, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuitGuild;
  static deserializeBinaryFromReader(message: QuitGuild, reader: jspb.BinaryReader): QuitGuild;
}

export namespace QuitGuild {
  export type AsObject = {
    guildSn: number,
  }
}

export class QuitGuildRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  getGuildSn(): number;
  setGuildSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuitGuildRet.AsObject;
  static toObject(includeInstance: boolean, msg: QuitGuildRet): QuitGuildRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuitGuildRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuitGuildRet;
  static deserializeBinaryFromReader(message: QuitGuildRet, reader: jspb.BinaryReader): QuitGuildRet;
}

export namespace QuitGuildRet {
  export type AsObject = {
    ret: number,
    guildSn: number,
  }
}

export class JoinTeam extends jspb.Message {
  getTeamSn(): number;
  setTeamSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinTeam.AsObject;
  static toObject(includeInstance: boolean, msg: JoinTeam): JoinTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinTeam;
  static deserializeBinaryFromReader(message: JoinTeam, reader: jspb.BinaryReader): JoinTeam;
}

export namespace JoinTeam {
  export type AsObject = {
    teamSn: number,
  }
}

export class JoinTeamRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  getTeamSn(): number;
  setTeamSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinTeamRet.AsObject;
  static toObject(includeInstance: boolean, msg: JoinTeamRet): JoinTeamRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinTeamRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinTeamRet;
  static deserializeBinaryFromReader(message: JoinTeamRet, reader: jspb.BinaryReader): JoinTeamRet;
}

export namespace JoinTeamRet {
  export type AsObject = {
    ret: number,
    teamSn: number,
  }
}

export class QuitTeam extends jspb.Message {
  getTeamSn(): number;
  setTeamSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuitTeam.AsObject;
  static toObject(includeInstance: boolean, msg: QuitTeam): QuitTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuitTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuitTeam;
  static deserializeBinaryFromReader(message: QuitTeam, reader: jspb.BinaryReader): QuitTeam;
}

export namespace QuitTeam {
  export type AsObject = {
    teamSn: number,
  }
}

export class QuitTeamRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  getTeamSn(): number;
  setTeamSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuitTeamRet.AsObject;
  static toObject(includeInstance: boolean, msg: QuitTeamRet): QuitTeamRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuitTeamRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuitTeamRet;
  static deserializeBinaryFromReader(message: QuitTeamRet, reader: jspb.BinaryReader): QuitTeamRet;
}

export namespace QuitTeamRet {
  export type AsObject = {
    ret: number,
    teamSn: number,
  }
}

export class SyncPlayerProperty extends jspb.Message {
  getPropertyType(): SyncPlayerProperty.PlayerPropertyTypeMap[keyof SyncPlayerProperty.PlayerPropertyTypeMap];
  setPropertyType(value: SyncPlayerProperty.PlayerPropertyTypeMap[keyof SyncPlayerProperty.PlayerPropertyTypeMap]): void;

  getValue(): number;
  setValue(value: number): void;

  getValueChange(): number;
  setValueChange(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncPlayerProperty.AsObject;
  static toObject(includeInstance: boolean, msg: SyncPlayerProperty): SyncPlayerProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncPlayerProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncPlayerProperty;
  static deserializeBinaryFromReader(message: SyncPlayerProperty, reader: jspb.BinaryReader): SyncPlayerProperty;
}

export namespace SyncPlayerProperty {
  export type AsObject = {
    propertyType: SyncPlayerProperty.PlayerPropertyTypeMap[keyof SyncPlayerProperty.PlayerPropertyTypeMap],
    value: number,
    valueChange: number,
  }

  export interface PlayerPropertyTypeMap {
    LEVEL: 0;
    EXP: 1;
    GOLD: 2;
    DIAMOND: 3;
  }

  export const PlayerPropertyType: PlayerPropertyTypeMap;
}

export class SyncPlayerPropertyList extends jspb.Message {
  clearPropertiesList(): void;
  getPropertiesList(): Array<SyncPlayerProperty>;
  setPropertiesList(value: Array<SyncPlayerProperty>): void;
  addProperties(value?: SyncPlayerProperty, index?: number): SyncPlayerProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncPlayerPropertyList.AsObject;
  static toObject(includeInstance: boolean, msg: SyncPlayerPropertyList): SyncPlayerPropertyList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncPlayerPropertyList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncPlayerPropertyList;
  static deserializeBinaryFromReader(message: SyncPlayerPropertyList, reader: jspb.BinaryReader): SyncPlayerPropertyList;
}

export namespace SyncPlayerPropertyList {
  export type AsObject = {
    propertiesList: Array<SyncPlayerProperty.AsObject>,
  }
}

export class RequestChangeTeam extends jspb.Message {
  getTeamType(): db_pb.Team.TeamTypeMap[keyof db_pb.Team.TeamTypeMap];
  setTeamType(value: db_pb.Team.TeamTypeMap[keyof db_pb.Team.TeamTypeMap]): void;

  clearCardsList(): void;
  getCardsList(): Array<db_pb.CardTeam>;
  setCardsList(value: Array<db_pb.CardTeam>): void;
  addCards(value?: db_pb.CardTeam, index?: number): db_pb.CardTeam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestChangeTeam.AsObject;
  static toObject(includeInstance: boolean, msg: RequestChangeTeam): RequestChangeTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestChangeTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestChangeTeam;
  static deserializeBinaryFromReader(message: RequestChangeTeam, reader: jspb.BinaryReader): RequestChangeTeam;
}

export namespace RequestChangeTeam {
  export type AsObject = {
    teamType: db_pb.Team.TeamTypeMap[keyof db_pb.Team.TeamTypeMap],
    cardsList: Array<db_pb.CardTeam.AsObject>,
  }
}

export class ReseponseChangeTeam extends jspb.Message {
  getTeamType(): db_pb.Team.TeamTypeMap[keyof db_pb.Team.TeamTypeMap];
  setTeamType(value: db_pb.Team.TeamTypeMap[keyof db_pb.Team.TeamTypeMap]): void;

  clearCardsList(): void;
  getCardsList(): Array<db_pb.CardTeam>;
  setCardsList(value: Array<db_pb.CardTeam>): void;
  addCards(value?: db_pb.CardTeam, index?: number): db_pb.CardTeam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReseponseChangeTeam.AsObject;
  static toObject(includeInstance: boolean, msg: ReseponseChangeTeam): ReseponseChangeTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReseponseChangeTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReseponseChangeTeam;
  static deserializeBinaryFromReader(message: ReseponseChangeTeam, reader: jspb.BinaryReader): ReseponseChangeTeam;
}

export namespace ReseponseChangeTeam {
  export type AsObject = {
    teamType: db_pb.Team.TeamTypeMap[keyof db_pb.Team.TeamTypeMap],
    cardsList: Array<db_pb.CardTeam.AsObject>,
  }
}

export class ReqCardLevelUp extends jspb.Message {
  getCardid(): number;
  setCardid(value: number): void;

  getIsonekey(): boolean;
  setIsonekey(value: boolean): void;

  clearMaterialList(): void;
  getMaterialList(): Array<db_pb.Item>;
  setMaterialList(value: Array<db_pb.Item>): void;
  addMaterial(value?: db_pb.Item, index?: number): db_pb.Item;

  getOperatorType(): number;
  setOperatorType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqCardLevelUp.AsObject;
  static toObject(includeInstance: boolean, msg: ReqCardLevelUp): ReqCardLevelUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReqCardLevelUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqCardLevelUp;
  static deserializeBinaryFromReader(message: ReqCardLevelUp, reader: jspb.BinaryReader): ReqCardLevelUp;
}

export namespace ReqCardLevelUp {
  export type AsObject = {
    cardid: number,
    isonekey: boolean,
    materialList: Array<db_pb.Item.AsObject>,
    operatorType: number,
  }
}

export class ReqCardStar extends jspb.Message {
  getCardid(): number;
  setCardid(value: number): void;

  clearMaterialitemsList(): void;
  getMaterialitemsList(): Array<db_pb.ItemBase>;
  setMaterialitemsList(value: Array<db_pb.ItemBase>): void;
  addMaterialitems(value?: db_pb.ItemBase, index?: number): db_pb.ItemBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqCardStar.AsObject;
  static toObject(includeInstance: boolean, msg: ReqCardStar): ReqCardStar.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReqCardStar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqCardStar;
  static deserializeBinaryFromReader(message: ReqCardStar, reader: jspb.BinaryReader): ReqCardStar;
}

export namespace ReqCardStar {
  export type AsObject = {
    cardid: number,
    materialitemsList: Array<db_pb.ItemBase.AsObject>,
  }
}

export class ReqCardQlt extends jspb.Message {
  getQltcardid(): number;
  setQltcardid(value: number): void;

  clearMaterialitemsList(): void;
  getMaterialitemsList(): Array<db_pb.ItemBase>;
  setMaterialitemsList(value: Array<db_pb.ItemBase>): void;
  addMaterialitems(value?: db_pb.ItemBase, index?: number): db_pb.ItemBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqCardQlt.AsObject;
  static toObject(includeInstance: boolean, msg: ReqCardQlt): ReqCardQlt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReqCardQlt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqCardQlt;
  static deserializeBinaryFromReader(message: ReqCardQlt, reader: jspb.BinaryReader): ReqCardQlt;
}

export namespace ReqCardQlt {
  export type AsObject = {
    qltcardid: number,
    materialitemsList: Array<db_pb.ItemBase.AsObject>,
  }
}

export class ResCardLevel extends jspb.Message {
  getRescode(): ResCardLevel.ResCodeMap[keyof ResCardLevel.ResCodeMap];
  setRescode(value: ResCardLevel.ResCodeMap[keyof ResCardLevel.ResCodeMap]): void;

  getIsonekey(): number;
  setIsonekey(value: number): void;

  hasNewcard(): boolean;
  clearNewcard(): void;
  getNewcard(): db_pb.Card | undefined;
  setNewcard(value?: db_pb.Card): void;

  getDetalfightpower(): number;
  setDetalfightpower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResCardLevel.AsObject;
  static toObject(includeInstance: boolean, msg: ResCardLevel): ResCardLevel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResCardLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResCardLevel;
  static deserializeBinaryFromReader(message: ResCardLevel, reader: jspb.BinaryReader): ResCardLevel;
}

export namespace ResCardLevel {
  export type AsObject = {
    rescode: ResCardLevel.ResCodeMap[keyof ResCardLevel.ResCodeMap],
    isonekey: number,
    newcard?: db_pb.Card.AsObject,
    detalfightpower: number,
  }

  export interface ResCodeMap {
    SUCCEED: 0;
    PLAYERLEVELLIMIT: 1;
    NOITEM: 2;
    CARDLEVELMAX: 3;
    NOTREACHQLT: 4;
    ERROR: 5;
  }

  export const ResCode: ResCodeMap;
}

export class ResCardStar extends jspb.Message {
  getStarrescode(): ResCardStar.StarResCodeMap[keyof ResCardStar.StarResCodeMap];
  setStarrescode(value: ResCardStar.StarResCodeMap[keyof ResCardStar.StarResCodeMap]): void;

  hasNewcard(): boolean;
  clearNewcard(): void;
  getNewcard(): db_pb.Card | undefined;
  setNewcard(value?: db_pb.Card): void;

  getDetalfightpower(): number;
  setDetalfightpower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResCardStar.AsObject;
  static toObject(includeInstance: boolean, msg: ResCardStar): ResCardStar.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResCardStar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResCardStar;
  static deserializeBinaryFromReader(message: ResCardStar, reader: jspb.BinaryReader): ResCardStar;
}

export namespace ResCardStar {
  export type AsObject = {
    starrescode: ResCardStar.StarResCodeMap[keyof ResCardStar.StarResCodeMap],
    newcard?: db_pb.Card.AsObject,
    detalfightpower: number,
  }

  export interface StarResCodeMap {
    SUCCED: 0;
    NOTREACHLV: 1;
    NOITEM: 2;
    STARMAX: 3;
    UNKNOWNERROR: 5;
  }

  export const StarResCode: StarResCodeMap;
}

export class ResCardQlt extends jspb.Message {
  getQltrescode(): ResCardQlt.ResQltCodeMap[keyof ResCardQlt.ResQltCodeMap];
  setQltrescode(value: ResCardQlt.ResQltCodeMap[keyof ResCardQlt.ResQltCodeMap]): void;

  hasNewcard(): boolean;
  clearNewcard(): void;
  getNewcard(): db_pb.Card | undefined;
  setNewcard(value?: db_pb.Card): void;

  getDetalfightpower(): number;
  setDetalfightpower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResCardQlt.AsObject;
  static toObject(includeInstance: boolean, msg: ResCardQlt): ResCardQlt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResCardQlt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResCardQlt;
  static deserializeBinaryFromReader(message: ResCardQlt, reader: jspb.BinaryReader): ResCardQlt;
}

export namespace ResCardQlt {
  export type AsObject = {
    qltrescode: ResCardQlt.ResQltCodeMap[keyof ResCardQlt.ResQltCodeMap],
    newcard?: db_pb.Card.AsObject,
    detalfightpower: number,
  }

  export interface ResQltCodeMap {
    SUCCED: 0;
    NOTREACHSTAR: 1;
    NOITEM: 2;
    QLTMAX: 3;
    UNKNOWNERROR: 5;
  }

  export const ResQltCode: ResQltCodeMap;
}

export class ResInten extends jspb.Message {
  getMyintenrescode(): ResInten.ResIntenCodeMap[keyof ResInten.ResIntenCodeMap];
  setMyintenrescode(value: ResInten.ResIntenCodeMap[keyof ResInten.ResIntenCodeMap]): void;

  hasNewcard(): boolean;
  clearNewcard(): void;
  getNewcard(): db_pb.Card | undefined;
  setNewcard(value?: db_pb.Card): void;

  getDetalfightpower(): number;
  setDetalfightpower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResInten.AsObject;
  static toObject(includeInstance: boolean, msg: ResInten): ResInten.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResInten, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResInten;
  static deserializeBinaryFromReader(message: ResInten, reader: jspb.BinaryReader): ResInten;
}

export namespace ResInten {
  export type AsObject = {
    myintenrescode: ResInten.ResIntenCodeMap[keyof ResInten.ResIntenCodeMap],
    newcard?: db_pb.Card.AsObject,
    detalfightpower: number,
  }

  export interface ResIntenCodeMap {
    SUCCED: 0;
    NOTREACHCONDITION: 1;
    NOITEM: 2;
    INTENMAX: 3;
    UNKNOWNERROR: 5;
  }

  export const ResIntenCode: ResIntenCodeMap;
}

export class ReuqestGMAddItem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNum(): number;
  setNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReuqestGMAddItem.AsObject;
  static toObject(includeInstance: boolean, msg: ReuqestGMAddItem): ReuqestGMAddItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReuqestGMAddItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReuqestGMAddItem;
  static deserializeBinaryFromReader(message: ReuqestGMAddItem, reader: jspb.BinaryReader): ReuqestGMAddItem;
}

export namespace ReuqestGMAddItem {
  export type AsObject = {
    id: number,
    num: number,
  }
}

export class ItemChange extends jspb.Message {
  getSn(): number;
  setSn(value: number): void;

  getId(): number;
  setId(value: number): void;

  getNum(): number;
  setNum(value: number): void;

  getDelta(): number;
  setDelta(value: number): void;

  getBagindex(): number;
  setBagindex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemChange.AsObject;
  static toObject(includeInstance: boolean, msg: ItemChange): ItemChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemChange;
  static deserializeBinaryFromReader(message: ItemChange, reader: jspb.BinaryReader): ItemChange;
}

export namespace ItemChange {
  export type AsObject = {
    sn: number,
    id: number,
    num: number,
    delta: number,
    bagindex: number,
  }
}

export class PushItemChange extends jspb.Message {
  clearChangesList(): void;
  getChangesList(): Array<ItemChange>;
  setChangesList(value: Array<ItemChange>): void;
  addChanges(value?: ItemChange, index?: number): ItemChange;

  getSource(): number;
  setSource(value: number): void;

  clearShowList(): void;
  getShowList(): Array<PushItemChange.ChangeShow>;
  setShowList(value: Array<PushItemChange.ChangeShow>): void;
  addShow(value?: PushItemChange.ChangeShow, index?: number): PushItemChange.ChangeShow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushItemChange.AsObject;
  static toObject(includeInstance: boolean, msg: PushItemChange): PushItemChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushItemChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushItemChange;
  static deserializeBinaryFromReader(message: PushItemChange, reader: jspb.BinaryReader): PushItemChange;
}

export namespace PushItemChange {
  export type AsObject = {
    changesList: Array<ItemChange.AsObject>,
    source: number,
    showList: Array<PushItemChange.ChangeShow.AsObject>,
  }

  export class ChangeShow extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getDelta(): number;
    setDelta(value: number): void;

    getReplace(): number;
    setReplace(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeShow.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeShow): ChangeShow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeShow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeShow;
    static deserializeBinaryFromReader(message: ChangeShow, reader: jspb.BinaryReader): ChangeShow;
  }

  export namespace ChangeShow {
    export type AsObject = {
      id: number,
      delta: number,
      replace: number,
    }
  }
}

export class RequestUseItem extends jspb.Message {
  getSn(): number;
  setSn(value: number): void;

  getNum(): number;
  setNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUseItem.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUseItem): RequestUseItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestUseItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUseItem;
  static deserializeBinaryFromReader(message: RequestUseItem, reader: jspb.BinaryReader): RequestUseItem;
}

export namespace RequestUseItem {
  export type AsObject = {
    sn: number,
    num: number,
  }
}

export class ResponseUseItem extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUseItem.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUseItem): ResponseUseItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseUseItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUseItem;
  static deserializeBinaryFromReader(message: ResponseUseItem, reader: jspb.BinaryReader): ResponseUseItem;
}

export namespace ResponseUseItem {
  export type AsObject = {
  }
}

export class RequestSortBag extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestSortBag.AsObject;
  static toObject(includeInstance: boolean, msg: RequestSortBag): RequestSortBag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestSortBag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestSortBag;
  static deserializeBinaryFromReader(message: RequestSortBag, reader: jspb.BinaryReader): RequestSortBag;
}

export namespace RequestSortBag {
  export type AsObject = {
  }
}

export class ResponseSortBag extends jspb.Message {
  clearBagsList(): void;
  getBagsList(): Array<number>;
  setBagsList(value: Array<number>): void;
  addBags(value: number, index?: number): number;

  clearItemsList(): void;
  getItemsList(): Array<db_pb.Item>;
  setItemsList(value: Array<db_pb.Item>): void;
  addItems(value?: db_pb.Item, index?: number): db_pb.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseSortBag.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseSortBag): ResponseSortBag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseSortBag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseSortBag;
  static deserializeBinaryFromReader(message: ResponseSortBag, reader: jspb.BinaryReader): ResponseSortBag;
}

export namespace ResponseSortBag {
  export type AsObject = {
    bagsList: Array<number>,
    itemsList: Array<db_pb.Item.AsObject>,
  }
}

export class RequestSellItem extends jspb.Message {
  getSn(): number;
  setSn(value: number): void;

  getNum(): number;
  setNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestSellItem.AsObject;
  static toObject(includeInstance: boolean, msg: RequestSellItem): RequestSellItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestSellItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestSellItem;
  static deserializeBinaryFromReader(message: RequestSellItem, reader: jspb.BinaryReader): RequestSellItem;
}

export namespace RequestSellItem {
  export type AsObject = {
    sn: number,
    num: number,
  }
}

export class ResponseSellItem extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseSellItem.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseSellItem): ResponseSellItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseSellItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseSellItem;
  static deserializeBinaryFromReader(message: ResponseSellItem, reader: jspb.BinaryReader): ResponseSellItem;
}

export namespace ResponseSellItem {
  export type AsObject = {
  }
}

export class RequestGachaPull extends jspb.Message {
  getPoolid(): number;
  setPoolid(value: number): void;

  getSingle(): boolean;
  setSingle(value: boolean): void;

  getCosttype(): number;
  setCosttype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestGachaPull.AsObject;
  static toObject(includeInstance: boolean, msg: RequestGachaPull): RequestGachaPull.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestGachaPull, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestGachaPull;
  static deserializeBinaryFromReader(message: RequestGachaPull, reader: jspb.BinaryReader): RequestGachaPull;
}

export namespace RequestGachaPull {
  export type AsObject = {
    poolid: number,
    single: boolean,
    costtype: number,
  }
}

export class ResponseGachaPull extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<PushItemChange.ChangeShow>;
  setItemsList(value: Array<PushItemChange.ChangeShow>): void;
  addItems(value?: PushItemChange.ChangeShow, index?: number): PushItemChange.ChangeShow;

  getPoolid(): number;
  setPoolid(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseGachaPull.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseGachaPull): ResponseGachaPull.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseGachaPull, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseGachaPull;
  static deserializeBinaryFromReader(message: ResponseGachaPull, reader: jspb.BinaryReader): ResponseGachaPull;
}

export namespace ResponseGachaPull {
  export type AsObject = {
    itemsList: Array<PushItemChange.ChangeShow.AsObject>,
    poolid: number,
    count: number,
  }
}

export class DBQueryPlayer extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  getChannel(): string;
  setChannel(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBQueryPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: DBQueryPlayer): DBQueryPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBQueryPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBQueryPlayer;
  static deserializeBinaryFromReader(message: DBQueryPlayer, reader: jspb.BinaryReader): DBQueryPlayer;
}

export namespace DBQueryPlayer {
  export type AsObject = {
    serverId: number,
    channel: string,
    uuid: string,
  }
}

export class DBQueryPlayerRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): db_pb.Player | undefined;
  setPlayer(value?: db_pb.Player): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBQueryPlayerRet.AsObject;
  static toObject(includeInstance: boolean, msg: DBQueryPlayerRet): DBQueryPlayerRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBQueryPlayerRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBQueryPlayerRet;
  static deserializeBinaryFromReader(message: DBQueryPlayerRet, reader: jspb.BinaryReader): DBQueryPlayerRet;
}

export namespace DBQueryPlayerRet {
  export type AsObject = {
    ret: number,
    player?: db_pb.Player.AsObject,
  }
}

export class DBCreatePlayer extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  getChannel(): string;
  setChannel(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): db_pb.Player | undefined;
  setPlayer(value?: db_pb.Player): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBCreatePlayer.AsObject;
  static toObject(includeInstance: boolean, msg: DBCreatePlayer): DBCreatePlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBCreatePlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBCreatePlayer;
  static deserializeBinaryFromReader(message: DBCreatePlayer, reader: jspb.BinaryReader): DBCreatePlayer;
}

export namespace DBCreatePlayer {
  export type AsObject = {
    serverId: number,
    channel: string,
    uuid: string,
    player?: db_pb.Player.AsObject,
  }
}

export class DBCreatePlayerRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): db_pb.Player | undefined;
  setPlayer(value?: db_pb.Player): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBCreatePlayerRet.AsObject;
  static toObject(includeInstance: boolean, msg: DBCreatePlayerRet): DBCreatePlayerRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBCreatePlayerRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBCreatePlayerRet;
  static deserializeBinaryFromReader(message: DBCreatePlayerRet, reader: jspb.BinaryReader): DBCreatePlayerRet;
}

export namespace DBCreatePlayerRet {
  export type AsObject = {
    ret: number,
    player?: db_pb.Player.AsObject,
  }
}

export class DBSavePlayer extends jspb.Message {
  getSaveMode(): ESaveModeMap[keyof ESaveModeMap];
  setSaveMode(value: ESaveModeMap[keyof ESaveModeMap]): void;

  hasPlayer(): boolean;
  clearPlayer(): void;
  getPlayer(): db_pb.Player | undefined;
  setPlayer(value?: db_pb.Player): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBSavePlayer.AsObject;
  static toObject(includeInstance: boolean, msg: DBSavePlayer): DBSavePlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBSavePlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBSavePlayer;
  static deserializeBinaryFromReader(message: DBSavePlayer, reader: jspb.BinaryReader): DBSavePlayer;
}

export namespace DBSavePlayer {
  export type AsObject = {
    saveMode: ESaveModeMap[keyof ESaveModeMap],
    player?: db_pb.Player.AsObject,
  }
}

export class DBSavePlayerRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBSavePlayerRet.AsObject;
  static toObject(includeInstance: boolean, msg: DBSavePlayerRet): DBSavePlayerRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBSavePlayerRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBSavePlayerRet;
  static deserializeBinaryFromReader(message: DBSavePlayerRet, reader: jspb.BinaryReader): DBSavePlayerRet;
}

export namespace DBSavePlayerRet {
  export type AsObject = {
    ret: number,
  }
}

export class DBSaveList extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBSaveList.AsObject;
  static toObject(includeInstance: boolean, msg: DBSaveList): DBSaveList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBSaveList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBSaveList;
  static deserializeBinaryFromReader(message: DBSaveList, reader: jspb.BinaryReader): DBSaveList;
}

export namespace DBSaveList {
  export type AsObject = {
  }
}

export class DBSaveListRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  clearPlayerListList(): void;
  getPlayerListList(): Array<db_pb.Player>;
  setPlayerListList(value: Array<db_pb.Player>): void;
  addPlayerList(value?: db_pb.Player, index?: number): db_pb.Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBSaveListRet.AsObject;
  static toObject(includeInstance: boolean, msg: DBSaveListRet): DBSaveListRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBSaveListRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBSaveListRet;
  static deserializeBinaryFromReader(message: DBSaveListRet, reader: jspb.BinaryReader): DBSaveListRet;
}

export namespace DBSaveListRet {
  export type AsObject = {
    ret: number,
    playerListList: Array<db_pb.Player.AsObject>,
  }
}

export class DBSaveWorld extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): db_pb.DBWorldData | undefined;
  setData(value?: db_pb.DBWorldData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBSaveWorld.AsObject;
  static toObject(includeInstance: boolean, msg: DBSaveWorld): DBSaveWorld.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBSaveWorld, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBSaveWorld;
  static deserializeBinaryFromReader(message: DBSaveWorld, reader: jspb.BinaryReader): DBSaveWorld;
}

export namespace DBSaveWorld {
  export type AsObject = {
    data?: db_pb.DBWorldData.AsObject,
  }
}

export class DBSaveWorldRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBSaveWorldRet.AsObject;
  static toObject(includeInstance: boolean, msg: DBSaveWorldRet): DBSaveWorldRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBSaveWorldRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBSaveWorldRet;
  static deserializeBinaryFromReader(message: DBSaveWorldRet, reader: jspb.BinaryReader): DBSaveWorldRet;
}

export namespace DBSaveWorldRet {
  export type AsObject = {
    ret: number,
  }
}

export class DBQueryWorld extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  getWorldId(): number;
  setWorldId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBQueryWorld.AsObject;
  static toObject(includeInstance: boolean, msg: DBQueryWorld): DBQueryWorld.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBQueryWorld, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBQueryWorld;
  static deserializeBinaryFromReader(message: DBQueryWorld, reader: jspb.BinaryReader): DBQueryWorld;
}

export namespace DBQueryWorld {
  export type AsObject = {
    serverId: number,
    worldId: number,
  }
}

export class DBQueryWorldRet extends jspb.Message {
  getRet(): number;
  setRet(value: number): void;

  hasData(): boolean;
  clearData(): void;
  getData(): db_pb.DBWorldData | undefined;
  setData(value?: db_pb.DBWorldData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBQueryWorldRet.AsObject;
  static toObject(includeInstance: boolean, msg: DBQueryWorldRet): DBQueryWorldRet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBQueryWorldRet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBQueryWorldRet;
  static deserializeBinaryFromReader(message: DBQueryWorldRet, reader: jspb.BinaryReader): DBQueryWorldRet;
}

export namespace DBQueryWorldRet {
  export type AsObject = {
    ret: number,
    data?: db_pb.DBWorldData.AsObject,
  }
}

export class BattleDamage extends jspb.Message {
  getPos(): number;
  setPos(value: number): void;

  getDamage(): number;
  setDamage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleDamage.AsObject;
  static toObject(includeInstance: boolean, msg: BattleDamage): BattleDamage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleDamage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleDamage;
  static deserializeBinaryFromReader(message: BattleDamage, reader: jspb.BinaryReader): BattleDamage;
}

export namespace BattleDamage {
  export type AsObject = {
    pos: number,
    damage: number,
  }
}

export class BattleAction extends jspb.Message {
  getOwnerSn(): number;
  setOwnerSn(value: number): void;

  getPos(): number;
  setPos(value: number): void;

  getSkillId(): number;
  setSkillId(value: number): void;

  getActionType(): BattleActionTypeMap[keyof BattleActionTypeMap];
  setActionType(value: BattleActionTypeMap[keyof BattleActionTypeMap]): void;

  clearDamageList(): void;
  getDamageList(): Array<BattleDamage>;
  setDamageList(value: Array<BattleDamage>): void;
  addDamage(value?: BattleDamage, index?: number): BattleDamage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleAction.AsObject;
  static toObject(includeInstance: boolean, msg: BattleAction): BattleAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleAction;
  static deserializeBinaryFromReader(message: BattleAction, reader: jspb.BinaryReader): BattleAction;
}

export namespace BattleAction {
  export type AsObject = {
    ownerSn: number,
    pos: number,
    skillId: number,
    actionType: BattleActionTypeMap[keyof BattleActionTypeMap],
    damageList: Array<BattleDamage.AsObject>,
  }
}

export class BattleActionList extends jspb.Message {
  clearActionsList(): void;
  getActionsList(): Array<BattleAction>;
  setActionsList(value: Array<BattleAction>): void;
  addActions(value?: BattleAction, index?: number): BattleAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleActionList.AsObject;
  static toObject(includeInstance: boolean, msg: BattleActionList): BattleActionList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleActionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleActionList;
  static deserializeBinaryFromReader(message: BattleActionList, reader: jspb.BinaryReader): BattleActionList;
}

export namespace BattleActionList {
  export type AsObject = {
    actionsList: Array<BattleAction.AsObject>,
  }
}

export class BattleJoin extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleJoin.AsObject;
  static toObject(includeInstance: boolean, msg: BattleJoin): BattleJoin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleJoin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleJoin;
  static deserializeBinaryFromReader(message: BattleJoin, reader: jspb.BinaryReader): BattleJoin;
}

export namespace BattleJoin {
  export type AsObject = {
    playerSn: number,
  }
}

export class BattleCreate extends jspb.Message {
  getMonsterTeamId(): number;
  setMonsterTeamId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleCreate.AsObject;
  static toObject(includeInstance: boolean, msg: BattleCreate): BattleCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleCreate;
  static deserializeBinaryFromReader(message: BattleCreate, reader: jspb.BinaryReader): BattleCreate;
}

export namespace BattleCreate {
  export type AsObject = {
    monsterTeamId: number,
  }
}

export class BattleView extends jspb.Message {
  getPlayerSn(): number;
  setPlayerSn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleView.AsObject;
  static toObject(includeInstance: boolean, msg: BattleView): BattleView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleView;
  static deserializeBinaryFromReader(message: BattleView, reader: jspb.BinaryReader): BattleView;
}

export namespace BattleView {
  export type AsObject = {
    playerSn: number,
  }
}

export class BattleRs extends jspb.Message {
  getReturnCode(): RsCodeMap[keyof RsCodeMap];
  setReturnCode(value: RsCodeMap[keyof RsCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleRs.AsObject;
  static toObject(includeInstance: boolean, msg: BattleRs): BattleRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleRs;
  static deserializeBinaryFromReader(message: BattleRs, reader: jspb.BinaryReader): BattleRs;
}

export namespace BattleRs {
  export type AsObject = {
    returnCode: RsCodeMap[keyof RsCodeMap],
  }
}

export class BattleTeam extends jspb.Message {
  getOwnerSn(): number;
  setOwnerSn(value: number): void;

  getPos(): number;
  setPos(value: number): void;

  hasCard(): boolean;
  clearCard(): void;
  getCard(): db_pb.Card | undefined;
  setCard(value?: db_pb.Card): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleTeam.AsObject;
  static toObject(includeInstance: boolean, msg: BattleTeam): BattleTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleTeam;
  static deserializeBinaryFromReader(message: BattleTeam, reader: jspb.BinaryReader): BattleTeam;
}

export namespace BattleTeam {
  export type AsObject = {
    ownerSn: number,
    pos: number,
    card?: db_pb.Card.AsObject,
  }
}

export class BattleSyncTeam extends jspb.Message {
  clearTeamList(): void;
  getTeamList(): Array<BattleTeam>;
  setTeamList(value: Array<BattleTeam>): void;
  addTeam(value?: BattleTeam, index?: number): BattleTeam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleSyncTeam.AsObject;
  static toObject(includeInstance: boolean, msg: BattleSyncTeam): BattleSyncTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleSyncTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleSyncTeam;
  static deserializeBinaryFromReader(message: BattleSyncTeam, reader: jspb.BinaryReader): BattleSyncTeam;
}

export namespace BattleSyncTeam {
  export type AsObject = {
    teamList: Array<BattleTeam.AsObject>,
  }
}

export class BattleBegin extends jspb.Message {
  getOwnerSn(): number;
  setOwnerSn(value: number): void;

  getMonsterTeamId(): number;
  setMonsterTeamId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleBegin.AsObject;
  static toObject(includeInstance: boolean, msg: BattleBegin): BattleBegin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleBegin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleBegin;
  static deserializeBinaryFromReader(message: BattleBegin, reader: jspb.BinaryReader): BattleBegin;
}

export namespace BattleBegin {
  export type AsObject = {
    ownerSn: number,
    monsterTeamId: number,
  }
}

export class BattleEnd extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BattleEnd.AsObject;
  static toObject(includeInstance: boolean, msg: BattleEnd): BattleEnd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BattleEnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BattleEnd;
  static deserializeBinaryFromReader(message: BattleEnd, reader: jspb.BinaryReader): BattleEnd;
}

export namespace BattleEnd {
  export type AsObject = {
  }
}

export class ReqeustSkillLvUp extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqeustSkillLvUp.AsObject;
  static toObject(includeInstance: boolean, msg: ReqeustSkillLvUp): ReqeustSkillLvUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReqeustSkillLvUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqeustSkillLvUp;
  static deserializeBinaryFromReader(message: ReqeustSkillLvUp, reader: jspb.BinaryReader): ReqeustSkillLvUp;
}

export namespace ReqeustSkillLvUp {
  export type AsObject = {
    id: number,
  }
}

export class ResponseSkillLvUp extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseSkillLvUp.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseSkillLvUp): ResponseSkillLvUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseSkillLvUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseSkillLvUp;
  static deserializeBinaryFromReader(message: ResponseSkillLvUp, reader: jspb.BinaryReader): ResponseSkillLvUp;
}

export namespace ResponseSkillLvUp {
  export type AsObject = {
    id: number,
    level: number,
  }
}

export class ReqeustEquipmentLvUp extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqeustEquipmentLvUp.AsObject;
  static toObject(includeInstance: boolean, msg: ReqeustEquipmentLvUp): ReqeustEquipmentLvUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReqeustEquipmentLvUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqeustEquipmentLvUp;
  static deserializeBinaryFromReader(message: ReqeustEquipmentLvUp, reader: jspb.BinaryReader): ReqeustEquipmentLvUp;
}

export namespace ReqeustEquipmentLvUp {
  export type AsObject = {
    id: number,
  }
}

export class ResponseEquipmentLvUp extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseEquipmentLvUp.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseEquipmentLvUp): ResponseEquipmentLvUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseEquipmentLvUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseEquipmentLvUp;
  static deserializeBinaryFromReader(message: ResponseEquipmentLvUp, reader: jspb.BinaryReader): ResponseEquipmentLvUp;
}

export namespace ResponseEquipmentLvUp {
  export type AsObject = {
    id: number,
    level: number,
  }
}

export class ReqCardSkillLvUp extends jspb.Message {
  getCardid(): number;
  setCardid(value: number): void;

  hasRequestskill(): boolean;
  clearRequestskill(): void;
  getRequestskill(): ReqeustSkillLvUp | undefined;
  setRequestskill(value?: ReqeustSkillLvUp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqCardSkillLvUp.AsObject;
  static toObject(includeInstance: boolean, msg: ReqCardSkillLvUp): ReqCardSkillLvUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReqCardSkillLvUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqCardSkillLvUp;
  static deserializeBinaryFromReader(message: ReqCardSkillLvUp, reader: jspb.BinaryReader): ReqCardSkillLvUp;
}

export namespace ReqCardSkillLvUp {
  export type AsObject = {
    cardid: number,
    requestskill?: ReqeustSkillLvUp.AsObject,
  }
}

export class ResCardSkillLvUp extends jspb.Message {
  getRescode(): number;
  setRescode(value: number): void;

  getRescardid(): number;
  setRescardid(value: number): void;

  hasResskilllvup(): boolean;
  clearResskilllvup(): void;
  getResskilllvup(): ResponseSkillLvUp | undefined;
  setResskilllvup(value?: ResponseSkillLvUp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResCardSkillLvUp.AsObject;
  static toObject(includeInstance: boolean, msg: ResCardSkillLvUp): ResCardSkillLvUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResCardSkillLvUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResCardSkillLvUp;
  static deserializeBinaryFromReader(message: ResCardSkillLvUp, reader: jspb.BinaryReader): ResCardSkillLvUp;
}

export namespace ResCardSkillLvUp {
  export type AsObject = {
    rescode: number,
    rescardid: number,
    resskilllvup?: ResponseSkillLvUp.AsObject,
  }
}

export interface RsCodeMap {
  OK: 0;
  BATTLECREATEFAILED: 1000;
  BATTLECREATEFAILED_PLAYERINBATTLE: 1001;
  BATTLEBEGINFAILED_PLAYERNOTINBATTLE: 1002;
}

export const RsCode: RsCodeMap;

export interface AccountCheckReturnCodeMap {
  ARC_OK: 0;
  ARC_UNKONWN: 1;
  ARC_NOT_FOUND_ACCOUNT: 2;
  ARC_PASSWORD_WRONG: 3;
  ARC_LOGGING: 4;
  ARC_TIMEOUT: 5;
  ARC_ONLINE: 6;
}

export const AccountCheckReturnCode: AccountCheckReturnCodeMap;

export interface LoginHttpReturnCodeMap {
  LHRC_OK: 0;
  LHRC_TIMEOUT: 1;
  LHRC_NOTFOUND: 2;
}

export const LoginHttpReturnCode: LoginHttpReturnCodeMap;

export interface LoginRetCodeMap {
  LRC_OK: 0;
  LRC_UNKONWN: 1;
  LRC_NOT_FOUND_ACCOUNT: 2;
  LRC_PASSWORD_WRONG: 3;
  LRC_LOGGING: 4;
  LRC_TIMEOUT: 5;
  LRC_ONLINE: 6;
}

export const LoginRetCode: LoginRetCodeMap;

export interface CreateRetCodeMap {
  CRC_CREATE_OK: 0;
  CRC_UNKONWN: 1;
  CRC_RENAME: 2;
}

export const CreateRetCode: CreateRetCodeMap;

export interface eChatChannelMap {
  ECC_SYSTEM: 0;
  ECC_WORLD: 1;
  ECC_GUILD: 2;
  ECC_TEAM: 3;
  ECC_PRIVATE: 4;
  ECC_BATTLE: 5;
}

export const eChatChannel: eChatChannelMap;

export interface ESaveModeMap {
  ESM_NORMAL: 0;
  ESM_IMMEDIATELY: 1;
  ESM_NO: 2;
}

export const ESaveMode: ESaveModeMap;

export interface BattleActionTypeMap {
  BEGIN: 0;
  RUN: 1;
  ATTACK: 2;
  BACK: 3;
  ANIM: 4;
}

export const BattleActionType: BattleActionTypeMap;

