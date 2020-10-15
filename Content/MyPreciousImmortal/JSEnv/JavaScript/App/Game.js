"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSGame = void 0;
const SubSystemLocator_1 = require("../Logic/SubSystemLocator");
class TSGame {
    constructor(GameInstance) {
        this._GameInstance = GameInstance;
    }
    // 初始化游戏化境并启动游戏
    StartGame() {
        // Init SubSystem Locator
        SubSystemLocator_1.SubSystemLocator.Initialize();
    }
    Run() {
        // Go to Login 
        // procedure
    }
}
exports.TSGame = TSGame;
//# sourceMappingURL=Game.js.map