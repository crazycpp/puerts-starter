// package: Proto
// file: x_enum.proto

import * as jspb from "google-protobuf";

export interface EAttackTypeMap {
  EAT_GREEN: 0;
  EAT_YELLOW: 1;
  EAT_RED: 2;
}

export const EAttackType: EAttackTypeMap;

export interface EPatrolTypeMap {
  EPT_STAND: 0;
  EPT_PATROL: 1;
  EPT_RAND: 2;
  EPT_UPDOWN: 3;
}

export const EPatrolType: EPatrolTypeMap;

export interface ERebornTypeMap {
  ERT_RECTANGLE: 0;
  ERT_CIRCLE: 1;
  ERT_SINGLE: 2;
  ERT_MULTIPOINT: 3;
}

export const ERebornType: ERebornTypeMap;

export interface EDeleteTypeMap {
  EDT_NEVER: 0;
  EDT_BATTLE: 1;
  EDT_KILLED: 2;
}

export const EDeleteType: EDeleteTypeMap;

