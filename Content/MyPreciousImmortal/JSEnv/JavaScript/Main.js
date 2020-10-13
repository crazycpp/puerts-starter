"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
const UE = require("ue");
const Proto = require("./Proto/msg_pb");
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
//# sourceMappingURL=Main.js.map