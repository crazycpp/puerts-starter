// package: gamedef
// file: ConfigTable.proto

import * as jspb from "google-protobuf";

export class Card extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLevel(): number;
  setLevel(value: number): void;

  getName(): string;
  setName(value: string): void;

  getFullname(): string;
  setFullname(value: string): void;

  getCvname(): string;
  setCvname(value: string): void;

  getIntroduction(): string;
  setIntroduction(value: string): void;

  getCareer(): CareerTypeMap[keyof CareerTypeMap];
  setCareer(value: CareerTypeMap[keyof CareerTypeMap]): void;

  getCareericon(): string;
  setCareericon(value: string): void;

  getAptitude(): AptitudeTypeMap[keyof AptitudeTypeMap];
  setAptitude(value: AptitudeTypeMap[keyof AptitudeTypeMap]): void;

  getConsumable(): number;
  setConsumable(value: number): void;

  getAtk(): number;
  setAtk(value: number): void;

  getAtkspeed(): number;
  setAtkspeed(value: number): void;

  getDef(): number;
  setDef(value: number): void;

  getHp(): number;
  setHp(value: number): void;

  getAnger(): number;
  setAnger(value: number): void;

  getAngermax(): number;
  setAngermax(value: number): void;

  getAngerattack(): number;
  setAngerattack(value: number): void;

  getAngerbehited(): number;
  setAngerbehited(value: number): void;

  getAngerdeath(): number;
  setAngerdeath(value: number): void;

  getSkillnormal(): number;
  setSkillnormal(value: number): void;

  getSkillspecial(): number;
  setSkillspecial(value: number): void;

  getSkillpassivityone(): number;
  setSkillpassivityone(value: number): void;

  getSkillpassivitytwo(): number;
  setSkillpassivitytwo(value: number): void;

  getIcon(): string;
  setIcon(value: string): void;

  getRoletemplateid(): number;
  setRoletemplateid(value: number): void;

  getPaint(): string;
  setPaint(value: string): void;

  getInitquality(): string;
  setInitquality(value: string): void;

  getCardlink(): string;
  setCardlink(value: string): void;

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
    name: string,
    fullname: string,
    cvname: string,
    introduction: string,
    career: CareerTypeMap[keyof CareerTypeMap],
    careericon: string,
    aptitude: AptitudeTypeMap[keyof AptitudeTypeMap],
    consumable: number,
    atk: number,
    atkspeed: number,
    def: number,
    hp: number,
    anger: number,
    angermax: number,
    angerattack: number,
    angerbehited: number,
    angerdeath: number,
    skillnormal: number,
    skillspecial: number,
    skillpassivityone: number,
    skillpassivitytwo: number,
    icon: string,
    roletemplateid: number,
    paint: string,
    initquality: string,
    cardlink: string,
  }
}

export class NPC extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getLevel(): number;
  setLevel(value: number): void;

  getHeadid(): string;
  setHeadid(value: string): void;

  getTalklist(): string;
  setTalklist(value: string): void;

  getPopshow(): number;
  setPopshow(value: number): void;

  getFunction(): string;
  setFunction(value: string): void;

  getDeletype(): number;
  setDeletype(value: number): void;

  getAtktype(): AttackTypeMap[keyof AttackTypeMap];
  setAtktype(value: AttackTypeMap[keyof AttackTypeMap]): void;

  getDungeon(): string;
  setDungeon(value: string): void;

  getInteractrange(): number;
  setInteractrange(value: number): void;

  getGuard(): number;
  setGuard(value: number): void;

  getPatrol(): PatrolTypeMap[keyof PatrolTypeMap];
  setPatrol(value: PatrolTypeMap[keyof PatrolTypeMap]): void;

  getPatrolrange(): number;
  setPatrolrange(value: number): void;

  getReborn(): string;
  setReborn(value: string): void;

  getBorntime(): number;
  setBorntime(value: number): void;

  getInitfavor(): number;
  setInitfavor(value: number): void;

  getUnionnpc(): number;
  setUnionnpc(value: number): void;

  getUnionethnicid(): number;
  setUnionethnicid(value: number): void;

  getFightfavorchg(): number;
  setFightfavorchg(value: number): void;

  getShop(): string;
  setShop(value: string): void;

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
    name: string,
    level: number,
    headid: string,
    talklist: string,
    popshow: number,
    pb_function: string,
    deletype: number,
    atktype: AttackTypeMap[keyof AttackTypeMap],
    dungeon: string,
    interactrange: number,
    guard: number,
    patrol: PatrolTypeMap[keyof PatrolTypeMap],
    patrolrange: number,
    reborn: string,
    borntime: number,
    initfavor: number,
    unionnpc: number,
    unionethnicid: number,
    fightfavorchg: number,
    shop: string,
  }
}

export class Table extends jspb.Message {
  clearCardList(): void;
  getCardList(): Array<Card>;
  setCardList(value: Array<Card>): void;
  addCard(value?: Card, index?: number): Card;

  clearNpcList(): void;
  getNpcList(): Array<NPC>;
  setNpcList(value: Array<NPC>): void;
  addNpc(value?: NPC, index?: number): NPC;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Table.AsObject;
  static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Table;
  static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
}

export namespace Table {
  export type AsObject = {
    cardList: Array<Card.AsObject>,
    npcList: Array<NPC.AsObject>,
  }
}

export interface CareerTypeMap {
  ZHIYE_NONE: 0;
  FUMO: 1;
  TIANWANG: 2;
  SHENJIANG: 3;
  YINGMING: 4;
  XUANSHU: 5;
}

export const CareerType: CareerTypeMap;

export interface AptitudeTypeMap {
  ZIZHI_NONE: 0;
  DIXIAN: 1;
  TIANSHI: 2;
  LINGGUAN: 3;
  XIANJUN: 4;
  DIJUN: 5;
  TIANZUN: 6;
}

export const AptitudeType: AptitudeTypeMap;

export interface AttackTypeMap {
  GREEN: 0;
  YELLOW: 1;
  RED: 2;
}

export const AttackType: AttackTypeMap;

export interface PatrolTypeMap {
  ORIGIN: 0;
  PATROL: 1;
  RANDOM: 2;
  PINGPONG: 3;
}

export const PatrolType: PatrolTypeMap;

