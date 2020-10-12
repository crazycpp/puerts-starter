"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
const UE = require("ue");
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
//# sourceMappingURL=Main.js.map