// source: x_enum.proto
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

goog.exportSymbol('proto.Proto.EAttackType', null, global);
goog.exportSymbol('proto.Proto.EDeleteType', null, global);
goog.exportSymbol('proto.Proto.EPatrolType', null, global);
goog.exportSymbol('proto.Proto.ERebornType', null, global);
/**
 * @enum {number}
 */
proto.Proto.EAttackType = {
  EAT_GREEN: 0,
  EAT_YELLOW: 1,
  EAT_RED: 2
};

/**
 * @enum {number}
 */
proto.Proto.EPatrolType = {
  EPT_STAND: 0,
  EPT_PATROL: 1,
  EPT_RAND: 2,
  EPT_UPDOWN: 3
};

/**
 * @enum {number}
 */
proto.Proto.ERebornType = {
  ERT_RECTANGLE: 0,
  ERT_CIRCLE: 1,
  ERT_SINGLE: 2,
  ERT_MULTIPOINT: 3
};

/**
 * @enum {number}
 */
proto.Proto.EDeleteType = {
  EDT_NEVER: 0,
  EDT_BATTLE: 1,
  EDT_KILLED: 2
};

goog.object.extend(exports, proto.Proto);
