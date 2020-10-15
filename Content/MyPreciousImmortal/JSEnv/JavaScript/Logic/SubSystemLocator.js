"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubSystemLocator = void 0;
const LoginSubSystem_1 = require("./SubSystem/LoginSubSystem");
const UISubSystem_1 = require("./SubSystem/UISubSystem");
// 这里先按朴素的方式实现，等进一步熟习TS了，引入语法糖来精简代码
class SubSystemLocator {
    constructor() {
    }
    static constructorSubSystem() {
        this._SubSystemArray = new Array();
        // construct the loginsubsystem
        this._LoginSubSystem = new LoginSubSystem_1.LoginSubSystem();
        this._SubSystemArray.push(this._LoginSubSystem);
        // construct the UISubSystem
        this._UISubSystem = new UISubSystem_1.UISubSystem();
        this._SubSystemArray.push(this._UISubSystem);
    }
    static Initialize() {
        this.constructorSubSystem();
        for (let i = 0; i < this._SubSystemArray.length; i++) {
            this._SubSystemArray[i].Initialize();
        }
    }
    static Reset() {
        for (let i = 0; i < this._SubSystemArray.length; i++) {
            this._SubSystemArray[i].Reset();
        }
    }
    static GetLoginSubSystem() {
        return this._LoginSubSystem;
    }
}
exports.SubSystemLocator = SubSystemLocator;
//# sourceMappingURL=SubSystemLocator.js.map