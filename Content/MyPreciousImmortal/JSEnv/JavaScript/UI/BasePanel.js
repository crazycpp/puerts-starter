"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePanel = void 0;
const puerts_1 = require("puerts");
const UE = require("ue");
const TSGame_1 = require("../App/TSGame");
class BasePanel {
    LoadUI(FileName) {
        const UIClass = puerts_1.blueprint(`/Game/MyPreciousImmortal/Core/UI/${FileName}.${FileName}_C`);
        this._Widget = UE.UMGManager.CreateWidget(TSGame_1.TSGame.GetWorld(), UIClass.StaticClass());
    }
    SetVisible(Visible) {
        this._Widget.SetVisibility(Visible ? UE.ESlateVisibility.Visible : UE.ESlateVisibility.Hidden);
    }
    OnOpen(Data) {
    }
    OnClose() {
    }
}
exports.BasePanel = BasePanel;
//# sourceMappingURL=BasePanel.js.map