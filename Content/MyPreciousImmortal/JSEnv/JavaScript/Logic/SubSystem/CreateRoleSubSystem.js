"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleSubSystem = void 0;
const msg_pb_1 = require("../../Proto/msg_pb");
const proto_id_pb_1 = require("../../Proto/proto_id_pb");
const SubSystemLocator_1 = require("../SubSystemLocator");
class CreateRoleSubSystem {
    Initialize() {
        SubSystemLocator_1.SubSystemLocator.GetNetworkSubSystem().RegisterMessageHandler(proto_id_pb_1.MsgId.S2C_PLAYERCREATERS, this.OnPlayerCreateRet, this);
    }
    Reset() {
    }
    // TODO 协议中我看暂时只能填了名字的
    CreateRole(Name) {
        if (Name.length == 0) {
            console.log("名字不能为空");
            return;
        }
        let MsgCreateRole = new msg_pb_1.PlayerCreate();
        MsgCreateRole.setName(Name);
        MsgCreateRole.setTemplateId(1);
        SubSystemLocator_1.SubSystemLocator.GetNetworkSubSystem().Send(proto_id_pb_1.MsgTypeId.MI_LOGIC, proto_id_pb_1.MsgId.C2S_PLAYERCREATE, MsgCreateRole.serializeBinary());
    }
    OnPlayerCreateRet(MsgBuffer) {
        let MsgCreateRoleAck = msg_pb_1.PlayerCreateRet.deserializeBinary(new Uint8Array(MsgBuffer));
        switch (MsgCreateRoleAck.getRet()) {
            case msg_pb_1.CreateRetCode.CRC_CREATE_OK:
                {
                    console.warn("创建角色成功");
                }
                break;
            case msg_pb_1.CreateRetCode.CRC_RENAME:
                {
                    console.warn("名字重复啦");
                }
                break;
            case msg_pb_1.CreateRetCode.CRC_UNKONWN:
                {
                    console.warn("未知");
                }
                break;
        }
    }
}
exports.CreateRoleSubSystem = CreateRoleSubSystem;
//# sourceMappingURL=CreateRoleSubSystem.js.map