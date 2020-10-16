"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIConfig = exports.UIType = void 0;
const CreateRolePanel_1 = require("./CreateRolePanel");
const LoginPanel_1 = require("./LoginPanel");
var UIType;
(function (UIType) {
    UIType[UIType["LOGIN"] = 0] = "LOGIN";
    UIType[UIType["CreateRole"] = 1] = "CreateRole";
})(UIType = exports.UIType || (exports.UIType = {}));
class UIConfig {
    static GetUIResName(Type) {
        switch (Type) {
            case UIType.LOGIN:
                return "WBP_LoginPanel";
            case UIType.CreateRole:
                return "WBP_CreateRolePanel";
        }
        return "";
    }
    static CreateUI(Type) {
        switch (Type) {
            case UIType.LOGIN:
                return new LoginPanel_1.LoginPanel();
            case UIType.CreateRole:
                return new CreateRolePanel_1.CreateRolelanel();
        }
    }
}
exports.UIConfig = UIConfig;
//# sourceMappingURL=UIConfig.js.map