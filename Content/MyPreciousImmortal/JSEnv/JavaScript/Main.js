"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
const UE = require("ue");
const Proto = require("./Proto/msg_pb");
const MsgID = require("./Proto/proto_id_pb");
console.log("-----------------------Game Start-----------------------------");
class GameApp {
    constructor() { }
    Init() {
        console.log("-----------------------Game Init-----------------------------");
    }
    Run() {
        console.log("-----------------------Game Start Running-----------------------------");
    }
}
let app = new GameApp();
// 初始化执行环境
app.Init();
// 开始进入热更代码的执行逻辑
app.Run();
let GameInstance = puerts_1.argv.getByName("GameInstance");
console.warn("to change Map......");
// for test
UE.GameplayStatics.OpenLevel(GameInstance.GetCurrentWorld(), "Start", true, "");
console.warn("打印类型:", typeof (UE.MyPreciousGameInstance).name.toString());
let loginMsg = new Proto.PlayerLogin();
loginMsg.setChannel("cty");
loginMsg.setServerId(111111);
loginMsg.setUuid("windknife");
let buff = loginMsg.serializeBinary();
let loingRet = Proto.PlayerLogin.deserializeBinary(buff);
console.warn("message : ", loingRet.getUuid());
let networkSubSystem = UE.SubSystemUtil.GetNetworkSubSystem();
networkSubSystem.OnConnectedDelegate.Bind(() => {
    console.warn("from script: connect to the server success");
    networkSubSystem.SendMessage(MsgID.MsgTypeId.MI_LOGIC, MsgID.MsgId.C2S_PLAYERLOGIN, buff);
});
networkSubSystem.OnDisConnectedDelegate.Bind(() => {
    console.warn("from script: disconnect from the servert");
});
networkSubSystem.OnRecvMsgDelegate.Bind((msgID, msgBuffer) => {
    console.warn("receive message id :", msgID);
    let bytes = new Uint8Array(msgBuffer);
    for (var i = 0; i < bytes.length; i++) {
        console.warn(i, bytes[i]);
    }
    let loginRet = Proto.PlayerLoginRet.deserializeBinary(bytes);
    console.log("LoginRET:", loginRet.getRet());
});
networkSubSystem.Connect("192.168.0.100", 5401);
//# sourceMappingURL=Main.js.map