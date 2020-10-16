"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSubSystem = void 0;
const SubSystemLocator_1 = require("../SubSystemLocator");
const msg_pb_1 = require("../../Proto/msg_pb");
const proto_id_pb_1 = require("../../Proto/proto_id_pb");
const TSGame_1 = require("../../App/TSGame");
const CreateRoleProduce_1 = require("../../Procedure/CreateRoleProduce");
class LoginSubSystem {
    Initialize() {
        SubSystemLocator_1.SubSystemLocator.GetNetworkSubSystem().RegisterMessageHandler(proto_id_pb_1.MsgId.S2C_PLAYERLOGINRS, this.OnPlayerLoginHandle);
    }
    Reset() {
    }
    // For UI
    Login(HostAddress, Port, UUID) {
        this._HostAddress = HostAddress;
        this._Port = Port;
        this._UUID = UUID;
        SubSystemLocator_1.SubSystemLocator.GetNetworkSubSystem().RegisterMessageHandler(proto_id_pb_1.MsgId.MI_NETWORKCONNECTED, this.OnConnectedServer, this);
        SubSystemLocator_1.SubSystemLocator.GetNetworkSubSystem().Connect(HostAddress, Port);
    }
    OnPlayerLoginHandle(MsgBuffer) {
        let LoginAck = msg_pb_1.PlayerLoginRet.deserializeBinary(new Uint8Array(MsgBuffer));
        switch (LoginAck.getRet()) {
            case msg_pb_1.LoginRetCode.LRC_OK:
                console.log("登录成功");
                break;
            case msg_pb_1.LoginRetCode.LRC_NOT_FOUND_ACCOUNT:
                console.log("账号未注册");
                // 切换到创建角色流程
                TSGame_1.TSGame.ChangeProduce(new CreateRoleProduce_1.CreateProduce());
                break;
        }
    }
    // 连接到登陆服务器
    OnConnectedServer() {
        let loginMsg = new msg_pb_1.PlayerLogin();
        loginMsg.setChannel("cty");
        loginMsg.setServerId(111111);
        loginMsg.setUuid(this._UUID);
        SubSystemLocator_1.SubSystemLocator.GetNetworkSubSystem().Send(proto_id_pb_1.MsgTypeId.MI_LOGIC, proto_id_pb_1.MsgId.C2S_PLAYERLOGIN, loginMsg.serializeBinary());
    }
    // 连接服务器错误
    OnConnectserverError() {
    }
}
exports.LoginSubSystem = LoginSubSystem;
//# sourceMappingURL=LoginSubSystem.js.map