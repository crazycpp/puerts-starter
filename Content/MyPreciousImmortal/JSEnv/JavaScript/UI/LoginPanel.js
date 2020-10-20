"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPanel = void 0;
const SubSystemLocator_1 = require("../Logic/SubSystemLocator");
const BasePanel_1 = require("./BasePanel");
class LoginPanel extends BasePanel_1.BasePanel {
    constructor() {
        super();
        this._PanelLevelType = BasePanel_1.PanelLevelType.HUD;
        let FileName = "WBP_LoginPanel";
        this.LoadUI(FileName);
        this.BindProperty();
    }
    BindProperty() {
        let LoginBP = this._Widget;
        LoginBP.BtnLogin.OnClicked.Add(this.OnLoginBtnClick.bind(this));
        this._Account = LoginBP.Account;
        this._Host = LoginBP.HostAddress;
        this._Port = LoginBP.Port;
    }
    OnLoginBtnClick() {
        console.warn("host:", this._Host.GetText());
        console.warn("port", this._Port.GetText());
        SubSystemLocator_1.SubSystemLocator.GetLoginSubSystem().Login(this._Host.GetText(), Number(this._Port.GetText()), this._Account.GetText());
    }
    OnOpen(Data) {
        console.warn("打开登录界面");
    }
    OnClose() {
        console.warn("关闭登录界面");
    }
}
exports.LoginPanel = LoginPanel;
//# sourceMappingURL=LoginPanel.js.map