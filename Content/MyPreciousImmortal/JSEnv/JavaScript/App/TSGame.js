"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSGame = void 0;
const SubSystemLocator_1 = require("../Logic/SubSystemLocator");
const LoginProduce_1 = require("../Procedure/LoginProduce");
const NullProduce_1 = require("../Procedure/NullProduce");
class TSGame {
    constructor(GameInstance) {
        TSGame._GameInstance = GameInstance;
        this._CurProduce = new NullProduce_1.NullProduce();
        TSGame._TSGame = this;
    }
    // 初始化游戏化境并启动游戏 
    Initialize() {
        // Init SubSystem Locator
        SubSystemLocator_1.SubSystemLocator.Initialize();
    }
    static ChangeProduce(NextProduce) {
        TSGame._TSGame._CurProduce.OnExit();
        TSGame._TSGame._CurProduce = NextProduce;
        TSGame._TSGame._CurProduce.OnEnter();
    }
    Run() {
        TSGame.ChangeProduce(new LoginProduce_1.LoginProduce());
    }
    static GetWorld() {
        return this._GameInstance.GetCurrentWorld();
    }
}
exports.TSGame = TSGame;
//# sourceMappingURL=TSGame.js.map