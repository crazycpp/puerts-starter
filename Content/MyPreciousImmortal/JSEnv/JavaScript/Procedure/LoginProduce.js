"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginProduce = void 0;
const LoginPanel_1 = require("../UI/LoginPanel");
class LoginProduce {
    constructor() {
        console.warn("游戏进入登录流程");
    }
    OnEnter() {
        //UE.GameplayStatics.OpenLevel(TSGame.GetWorld(), "Start", true, "");
        let CurPanel = new LoginPanel_1.LoginPanel();
    }
    OnTick(DeltaTime) {
    }
    OnExit() {
    }
}
exports.LoginProduce = LoginProduce;
//# sourceMappingURL=LoginProduce.js.map