"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UISubSystem = void 0;
const UIConfig_1 = require("./UIConfig");
class UISubSystem {
    Initialize() {
        this._UIResMap = new Map();
    }
    Reset() {
    }
    SetAllPanelVisible(bool) {
    }
    OpenPanel(PanelID, Data) {
        let UIPanel = this._UIResMap[PanelID];
        if (UIPanel == null) {
            UIPanel = UIConfig_1.UIConfig.CreateUI(PanelID);
        }
        UIPanel.OnOpen(Data);
    }
}
exports.UISubSystem = UISubSystem;
//# sourceMappingURL=UISubSystem.js.map