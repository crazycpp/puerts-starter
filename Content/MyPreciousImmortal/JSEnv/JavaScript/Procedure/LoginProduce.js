"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginProduce = void 0;
const IProduce_1 = require("./IProduce");
const SubSystemLocator_1 = require("../Logic/SubSystemLocator");
const UIConfig_1 = require("../UI/UIConfig");
class LoginProduce {
    constructor() {
        console.warn("游戏进入登录流程");
    }
    OnEnter() {
        //UE.GameplayStatics.OpenLevel(TSGame.GetWorld(), "Start", true, "");
        //let CurPanel = new LoginPanel();
        SubSystemLocator_1.SubSystemLocator.GetUISubSystem().OpenPanel(UIConfig_1.UIType.LOGIN);
    }
    OnTick(DeltaTime) {
    }
    OnExit() {
    }
    GetProduceType() {
        return IProduce_1.ProduceType.Login;
    }
}
exports.LoginProduce = LoginProduce;
//# sourceMappingURL=LoginProduce.js.map