// package: Proto
// file: db.proto

import * as jspb from "google-protobuf";

export class Vector3 extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vector3.AsObject;
  static toObject(includeInstance: boolean, msg: Vector3): Vector3.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vector3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vector3;
  static deserializeBinaryFromReader(message: Vector3, reader: jspb.BinaryReader): Vector3;
}

export namespace Vector3 {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class ItemBase extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNum(): number;
  setNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemBase.AsObject;
  static toObject(includeInstance: boolean, msg: ItemBase): ItemBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemBase;
  static deserializeBinaryFromReader(message: ItemBase, reader: jspb.BinaryReader): ItemBase;
}

export namespace ItemBase {
  export type AsObject = {
    id: number,
    num: number,
  }
}

export class Item extends jspb.Message {
  getSn(): number;
  setSn(value: number): void;

  hasItemBase(): boolean;
  clearItemBase(): void;
  getItemBase(): ItemBase | undefined;
  setItemBase(value?: ItemBase): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    sn: number,
    itemBase?: ItemBase.AsObject,
  }
}

export class Skill extends jspb.Message {
  getSkillId(): number;
  setSkillId(value: number): void;

  getSkillLevel(): number;
  setSkillLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skill.AsObject;
  static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Skill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skill;
  static deserializeBinaryFromReader(message: Skill, reader: jspb.BinaryReader): Skill;
}

export namespace Skill {
  export type AsObject = {
    skillId: number,
    skillLevel: number,
  }
}

export class PlayerItem extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Item>;
  setItemsList(value: Array<Item>): void;
  addItems(value?: Item, index?: number): Item;

  clearBagsList(): void;
  getBagsList(): Array<number>;
  setBagsList(value: Array<number>): void;
  addBags(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerItem.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerItem): PlayerItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerItem;
  static deserializeBinaryFromReader(message: PlayerItem, reader: jspb.BinaryReader): PlayerItem;
}

export namespace PlayerItem {
  export type AsObject = {
    itemsList: Array<Item.AsObject>,
    bagsList: Array<number>,
  }
}

export class Equipment extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Equipment.AsObject;
  static toObject(includeInstance: boolean, msg: Equipment): Equipment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Equipment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Equipment;
  static deserializeBinaryFromReader(message: Equipment, reader: jspb.BinaryReader): Equipment;
}

export namespace Equipment {
  export type AsObject = {
    id: number,
    level: number,
  }
}

export class Card extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  getCharacter(): number;
  setCharacter(value: number): void;

  getStar(): number;
  setStar(value: number): void;

  getGetedTime(): number;
  setGetedTime(value: number): void;

  getAptitude(): number;
  setAptitude(value: number): void;

  getCareer(): Card.CardCareerTypeMap[keyof Card.CardCareerTypeMap];
  setCareer(value: Card.CardCareerTypeMap[keyof Card.CardCareerTypeMap]): void;

  getAtt(): number;
  setAtt(value: number): void;

  getAttspeed(): number;
  setAttspeed(value: number): void;

  getDef(): number;
  setDef(value: number): void;

  getHp(): number;
  setHp(value: number): void;

  getIntensifyTimes(): number;
  setIntensifyTimes(value: number): void;

  getCurexp(): number;
  setCurexp(value: number): void;

  clearSkillsList(): void;
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): void;
  addSkills(value?: Skill, index?: number): Skill;

  getCardcltstate(): Card.CardCultivateStateMap[keyof Card.CardCultivateStateMap];
  setCardcltstate(value: Card.CardCultivateStateMap[keyof Card.CardCultivateStateMap]): void;

  getFightpower(): number;
  setFightpower(value: number): void;

  getIntensifyLv(): number;
  setIntensifyLv(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Card.AsObject;
  static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Card;
  static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
}

export namespace Card {
  export type AsObject = {
    id: number,
    level: number,
    character: number,
    star: number,
    getedTime: number,
    aptitude: number,
    career: Card.CardCareerTypeMap[keyof Card.CardCareerTypeMap],
    att: number,
    attspeed: number,
    def: number,
    hp: number,
    intensifyTimes: number,
    curexp: number,
    skillsList: Array<Skill.AsObject>,
    cardcltstate: Card.CardCultivateStateMap[keyof Card.CardCultivateStateMap],
    fightpower: number,
    intensifyLv: number,
  }

  export interface CardCareerTypeMap {
    NONE: 0;
    GHOST: 1;
    KING: 2;
    GOD: 3;
    SHOULD: 4;
    MASTER: 5;
  }

  export const CardCareerType: CardCareerTypeMap;

  export interface CardCultivateStateMap {
    CLEVEL: 0;
    CSTAR: 1;
    CQLT: 2;
  }

  export const CardCultivateState: CardCultivateStateMap;
}

export class CardTeam extends jspb.Message {
  getPos(): number;
  setPos(value: number): void;

  getCardId(): number;
  setCardId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardTeam.AsObject;
  static toObject(includeInstance: boolean, msg: CardTeam): CardTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CardTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardTeam;
  static deserializeBinaryFromReader(message: CardTeam, reader: jspb.BinaryReader): CardTeam;
}

export namespace CardTeam {
  export type AsObject = {
    pos: number,
    cardId: number,
  }
}

export class Team extends jspb.Message {
  getTeamType(): Team.TeamTypeMap[keyof Team.TeamTypeMap];
  setTeamType(value: Team.TeamTypeMap[keyof Team.TeamTypeMap]): void;

  clearCardsList(): void;
  getCardsList(): Array<CardTeam>;
  setCardsList(value: Array<CardTeam>): void;
  addCards(value?: CardTeam, index?: number): CardTeam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Team.AsObject;
  static toObject(includeInstance: boolean, msg: Team): Team.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Team, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Team;
  static deserializeBinaryFromReader(message: Team, reader: jspb.BinaryReader): Team;
}

export namespace Team {
  export type AsObject = {
    teamType: Team.TeamTypeMap[keyof Team.TeamTypeMap],
    cardsList: Array<CardTeam.AsObject>,
  }

  export interface TeamTypeMap {
    NORMAL: 0;
  }

  export const TeamType: TeamTypeMap;
}

export class PlayerCard extends jspb.Message {
  clearCardsList(): void;
  getCardsList(): Array<Card>;
  setCardsList(value: Array<Card>): void;
  addCards(value?: Card, index?: number): Card;

  clearTeamsList(): void;
  getTeamsList(): Array<Team>;
  setTeamsList(value: Array<Team>): void;
  addTeams(value?: Team, index?: number): Team;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerCard.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerCard): PlayerCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerCard;
  static deserializeBinaryFromReader(message: PlayerCard, reader: jspb.BinaryReader): PlayerCard;
}

export namespace PlayerCard {
  export type AsObject = {
    cardsList: Array<Card.AsObject>,
    teamsList: Array<Team.AsObject>,
  }
}

export class PlayerCharacter extends jspb.Message {
  clearSkillsList(): void;
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): void;
  addSkills(value?: Skill, index?: number): Skill;

  clearEquipmentsList(): void;
  getEquipmentsList(): Array<Equipment>;
  setEquipmentsList(value: Array<Equipment>): void;
  addEquipments(value?: Equipment, index?: number): Equipment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerCharacter.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerCharacter): PlayerCharacter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerCharacter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerCharacter;
  static deserializeBinaryFromReader(message: PlayerCharacter, reader: jspb.BinaryReader): PlayerCharacter;
}

export namespace PlayerCharacter {
  export type AsObject = {
    skillsList: Array<Skill.AsObject>,
    equipmentsList: Array<Equipment.AsObject>,
  }
}

export class PlayerBase extends jspb.Message {
  getLevel(): number;
  setLevel(value: number): void;

  getExp(): number;
  setExp(value: number): void;

  getVipLevel(): number;
  setVipLevel(value: number): void;

  getVipExp(): number;
  setVipExp(value: number): void;

  getTemplateId(): number;
  setTemplateId(value: number): void;

  getGuildSn(): number;
  setGuildSn(value: number): void;

  getTeamSn(): number;
  setTeamSn(value: number): void;

  getGold(): number;
  setGold(value: number): void;

  getDiamond(): number;
  setDiamond(value: number): void;

  getMute(): boolean;
  setMute(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerBase.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerBase): PlayerBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerBase;
  static deserializeBinaryFromReader(message: PlayerBase, reader: jspb.BinaryReader): PlayerBase;
}

export namespace PlayerBase {
  export type AsObject = {
    level: number,
    exp: number,
    vipLevel: number,
    vipExp: number,
    templateId: number,
    guildSn: number,
    teamSn: number,
    gold: number,
    diamond: number,
    mute: boolean,
  }
}

export class LastWorld extends jspb.Message {
  getWorldId(): number;
  setWorldId(value: number): void;

  getWorldSn(): number;
  setWorldSn(value: number): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Vector3 | undefined;
  setPosition(value?: Vector3): void;

  hasRotator(): boolean;
  clearRotator(): void;
  getRotator(): Vector3 | undefined;
  setRotator(value?: Vector3): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastWorld.AsObject;
  static toObject(includeInstance: boolean, msg: LastWorld): LastWorld.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastWorld, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastWorld;
  static deserializeBinaryFromReader(message: LastWorld, reader: jspb.BinaryReader): LastWorld;
}

export namespace LastWorld {
  export type AsObject = {
    worldId: number,
    worldSn: number,
    position?: Vector3.AsObject,
    rotator?: Vector3.AsObject,
  }
}

export class PlayerMisc extends jspb.Message {
  hasLastWorld(): boolean;
  clearLastWorld(): void;
  getLastWorld(): LastWorld | undefined;
  setLastWorld(value?: LastWorld): void;

  getOnlineVersion(): number;
  setOnlineVersion(value: number): void;

  clearDropRecordsList(): void;
  getDropRecordsList(): Array<DropRecord>;
  setDropRecordsList(value: Array<DropRecord>): void;
  addDropRecords(value?: DropRecord, index?: number): DropRecord;

  clearGachaRecordsList(): void;
  getGachaRecordsList(): Array<DropRecord>;
  setGachaRecordsList(value: Array<DropRecord>): void;
  addGachaRecords(value?: DropRecord, index?: number): DropRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerMisc.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerMisc): PlayerMisc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerMisc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerMisc;
  static deserializeBinaryFromReader(message: PlayerMisc, reader: jspb.BinaryReader): PlayerMisc;
}

export namespace PlayerMisc {
  export type AsObject = {
    lastWorld?: LastWorld.AsObject,
    onlineVersion: number,
    dropRecordsList: Array<DropRecord.AsObject>,
    gachaRecordsList: Array<DropRecord.AsObject>,
  }
}

export class DropRecord extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropRecord.AsObject;
  static toObject(includeInstance: boolean, msg: DropRecord): DropRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropRecord;
  static deserializeBinaryFromReader(message: DropRecord, reader: jspb.BinaryReader): DropRecord;
}

export namespace DropRecord {
  export type AsObject = {
    id: number,
    count: number,
  }
}

export class DBAccount extends jspb.Message {
  getSn(): number;
  setSn(value: number): void;

  getServerid(): number;
  setServerid(value: number): void;

  getChannel(): string;
  setChannel(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  getAccount(): string;
  setAccount(value: string): void;

  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBAccount.AsObject;
  static toObject(includeInstance: boolean, msg: DBAccount): DBAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBAccount;
  static deserializeBinaryFromReader(message: DBAccount, reader: jspb.BinaryReader): DBAccount;
}

export namespace DBAccount {
  export type AsObject = {
    sn: number,
    serverid: number,
    channel: string,
    uuid: string,
    account: string,
    name: Uint8Array | string,
  }
}

export class Player extends jspb.Message {
  getSn(): number;
  setSn(value: number): void;

  getServerid(): number;
  setServerid(value: number): void;

  getChannel(): string;
  setChannel(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  getAccount(): string;
  setAccount(value: string): void;

  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): void;

  hasBase(): boolean;
  clearBase(): void;
  getBase(): PlayerBase | undefined;
  setBase(value?: PlayerBase): void;

  hasMisc(): boolean;
  clearMisc(): void;
  getMisc(): PlayerMisc | undefined;
  setMisc(value?: PlayerMisc): void;

  hasItem(): boolean;
  clearItem(): void;
  getItem(): PlayerItem | undefined;
  setItem(value?: PlayerItem): void;

  hasCard(): boolean;
  clearCard(): void;
  getCard(): PlayerCard | undefined;
  setCard(value?: PlayerCard): void;

  hasCharacter(): boolean;
  clearCharacter(): void;
  getCharacter(): PlayerCharacter | undefined;
  setCharacter(value?: PlayerCharacter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    sn: number,
    serverid: number,
    channel: string,
    uuid: string,
    account: string,
    name: Uint8Array | string,
    base?: PlayerBase.AsObject,
    misc?: PlayerMisc.AsObject,
    item?: PlayerItem.AsObject,
    card?: PlayerCard.AsObject,
    character?: PlayerCharacter.AsObject,
  }
}

export class Position extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Vector3 | undefined;
  setLocation(value?: Vector3): void;

  hasRotation(): boolean;
  clearRotation(): void;
  getRotation(): Vector3 | undefined;
  setRotation(value?: Vector3): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    location?: Vector3.AsObject,
    rotation?: Vector3.AsObject,
  }
}

export class NPC extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getSn(): number;
  setSn(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getDieTime(): number;
  setDieTime(value: number): void;

  hasInitPos(): boolean;
  clearInitPos(): void;
  getInitPos(): Position | undefined;
  setInitPos(value?: Position): void;

  hasCurPos(): boolean;
  clearCurPos(): void;
  getCurPos(): Position | undefined;
  setCurPos(value?: Position): void;

  hasNextPos(): boolean;
  clearNextPos(): void;
  getNextPos(): Position | undefined;
  setNextPos(value?: Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NPC.AsObject;
  static toObject(includeInstance: boolean, msg: NPC): NPC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NPC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NPC;
  static deserializeBinaryFromReader(message: NPC, reader: jspb.BinaryReader): NPC;
}

export namespace NPC {
  export type AsObject = {
    id: number,
    sn: number,
    createTime: number,
    dieTime: number,
    initPos?: Position.AsObject,
    curPos?: Position.AsObject,
    nextPos?: Position.AsObject,
  }
}

export class OBJ extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getSn(): number;
  setSn(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getDieTime(): number;
  setDieTime(value: number): void;

  hasInitPos(): boolean;
  clearInitPos(): void;
  getInitPos(): Position | undefined;
  setInitPos(value?: Position): void;

  hasCurPos(): boolean;
  clearCurPos(): void;
  getCurPos(): Position | undefined;
  setCurPos(value?: Position): void;

  hasNextPos(): boolean;
  clearNextPos(): void;
  getNextPos(): Position | undefined;
  setNextPos(value?: Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OBJ.AsObject;
  static toObject(includeInstance: boolean, msg: OBJ): OBJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OBJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OBJ;
  static deserializeBinaryFromReader(message: OBJ, reader: jspb.BinaryReader): OBJ;
}

export namespace OBJ {
  export type AsObject = {
    id: number,
    sn: number,
    createTime: number,
    dieTime: number,
    initPos?: Position.AsObject,
    curPos?: Position.AsObject,
    nextPos?: Position.AsObject,
  }
}

export class DBWorldData extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): void;

  getWorldId(): number;
  setWorldId(value: number): void;

  clearNpcListList(): void;
  getNpcListList(): Array<NPC>;
  setNpcListList(value: Array<NPC>): void;
  addNpcList(value?: NPC, index?: number): NPC;

  clearObjListList(): void;
  getObjListList(): Array<OBJ>;
  setObjListList(value: Array<OBJ>): void;
  addObjList(value?: OBJ, index?: number): OBJ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBWorldData.AsObject;
  static toObject(includeInstance: boolean, msg: DBWorldData): DBWorldData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DBWorldData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBWorldData;
  static deserializeBinaryFromReader(message: DBWorldData, reader: jspb.BinaryReader): DBWorldData;
}

export namespace DBWorldData {
  export type AsObject = {
    serverId: number,
    worldId: number,
    npcListList: Array<NPC.AsObject>,
    objListList: Array<OBJ.AsObject>,
  }
}

export interface GenderMap {
  NONE: 0;
  MALE: 1;
  FEMALE: 2;
}

export const Gender: GenderMap;

