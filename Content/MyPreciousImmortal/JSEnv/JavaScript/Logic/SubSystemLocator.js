"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubSystemLocator = void 0;
const LoginSubSystem_1 = require("./SubSystem/LoginSubSystem");
const UISubSystem_1 = require("../UI/UISubSystem");
const NetworkSubSystem_1 = require("./SubSystem/NetworkSubSystem");
const CreateRoleSubSystem_1 = require("./SubSystem/CreateRoleSubSystem");
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
        // construct the NetworkSubSystem
        this._NetworkSystem = new NetworkSubSystem_1.NetworkSubSystem();
        this._SubSystemArray.push(this._NetworkSystem);
        this._CreateRoleSubSystem = new CreateRoleSubSystem_1.CreateRoleSubSystem();
        this._SubSystemArray.push(this._CreateRoleSubSystem);
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
    static GetUISubSystem() {
        return this._UISubSystem;
    }
    static GetNetworkSubSystem() {
        return this._NetworkSystem;
    }
    static GetCreateRoleSubSystem() {
        return this._CreateRoleSubSystem;
    }
}
exports.SubSystemLocator = SubSystemLocator;
//# sourceMappingURL=SubSystemLocator.js.map