"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPanel = void 0;
const Panel_1 = require("./Panel");
class LoginPanel extends Panel_1.Panel {
    constructor() {
        super();
        let FileName = "WBP_LoginPanel";
        this.LoadUI(FileName);
        this.BindBlueprint();
    }
    BindBlueprint() {
        let LoginBP = this._Widget;
        LoginBP.BtnLogin.OnClicked.Add(this.OnLoginBtnClick.bind(this));
        this._Account = LoginBP.Account;
        this._Widget.AddToViewport(0);
    }
    OnLoginBtnClick() {
        this._Account.SetText("set account info from script");
    }
}
exports.LoginPanel = LoginPanel;
//# sourceMappingURL=LoginPanel.js.map