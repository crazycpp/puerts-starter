"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkSubSystem = void 0;
const UE = require("ue");
const proto_id_pb_1 = require("../../Proto/proto_id_pb");
class NetworkSubSystem {
    constructor() {
        this._MsgHandleMap = {};
    }
    Initialize() {
        // 获取UE中的SubSystem
        this._NetWorkProxy = UE.SubSystemUtil.GetNetworkSubSystem();
        // 注册相关回调
        this._NetWorkProxy.OnConnectedDelegate.Bind(this.OnConnected.bind(this));
        this._NetWorkProxy.OnDisConnectedDelegate.Bind(this.OnDisConnected.bind(this));
        this._NetWorkProxy.OnRecvMsgDelegate.Bind(this.OnRecvMsgDelegate.bind(this));
    }
    Reset() {
    }
    Connect(HostAddress, Port) {
        this._NetWorkProxy.Connect(HostAddress, Port);
    }
    Send(MsgType, MsgID, MsgContent) {
        this._NetWorkProxy.SendMessage(MsgType, MsgID, MsgContent);
    }
    RegisterMessageHandler(MessageID, Handler, Target) {
        this._MsgHandleMap[MessageID] = {
            HandlerFunc: Handler,
            Target: Target
        };
    }
    OnConnected() {
        this.ProcessMessage(proto_id_pb_1.MsgId.MI_NETWORKCONNECTED);
    }
    OnDisConnected() {
        this.ProcessMessage(proto_id_pb_1.MsgId.MI_NETWORKDISCONNECT);
    }
    OnRecvMsgDelegate(MessageID, MsgBuffer) {
        this.ProcessMessage(MessageID, MsgBuffer);
    }
    ProcessMessage(MessageID, MsgBuffer) {
        let HandleInfo = this._MsgHandleMap[MessageID];
        if (HandleInfo) {
            HandleInfo.HandlerFunc.call(HandleInfo.Target, MsgBuffer);
        }
        else {
            console.warn("客户端未处理的的消息ID: " + MessageID.toString());
        }
    }
}
exports.NetworkSubSystem = NetworkSubSystem;
//# sourceMappingURL=NetworkSubSystem.js.map