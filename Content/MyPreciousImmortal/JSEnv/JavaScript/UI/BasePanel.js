"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePanel = exports.PanelShowMode = exports.PanelLevelType = void 0;
const puerts_1 = require("puerts");
const UE = require("ue");
const TSGame_1 = require("../App/TSGame");
// 界面层及类型
var PanelLevelType;
(function (PanelLevelType) {
    PanelLevelType[PanelLevelType["UnKnow"] = 0] = "UnKnow";
    PanelLevelType[PanelLevelType["HUD"] = 1] = "HUD";
    PanelLevelType[PanelLevelType["Level1"] = 2] = "Level1";
    PanelLevelType[PanelLevelType["Level2"] = 3] = "Level2";
    PanelLevelType[PanelLevelType["Level3"] = 4] = "Level3";
    PanelLevelType[PanelLevelType["TextMessage"] = 5] = "TextMessage";
    PanelLevelType[PanelLevelType["Announcement"] = 6] = "Announcement";
    PanelLevelType[PanelLevelType["GamePlayGuide"] = 7] = "GamePlayGuide";
})(PanelLevelType = exports.PanelLevelType || (exports.PanelLevelType = {}));
// UI显示模式
var PanelShowMode;
(function (PanelShowMode) {
    PanelShowMode[PanelShowMode["Normal"] = 1] = "Normal";
    PanelShowMode[PanelShowMode["HideOther"] = 2] = "HideOther";
    PanelShowMode[PanelShowMode["ReverseBaseStack"] = 3] = "ReverseBaseStack";
})(PanelShowMode = exports.PanelShowMode || (exports.PanelShowMode = {}));
function GetZOrderByPanelType(Type) {
    switch (Type) {
        case PanelLevelType.HUD:
            return 10;
        case PanelLevelType.Level1:
            return 20;
        case PanelLevelType.Level2:
            return 30;
        case PanelLevelType.Level3:
            return 40;
        case PanelLevelType.TextMessage:
            return 50;
        case PanelLevelType.Announcement:
            return 60;
        case PanelLevelType.GamePlayGuide:
            return 70;
        default:
            return 0;
    }
}
class BasePanel {
    LoadUI(FileName) {
        const UIClass = puerts_1.blueprint(`/Game/MyPreciousImmortal/Core/UI/${FileName}.${FileName}_C`);
        this._Widget = UE.UMGManager.CreateWidget(TSGame_1.TSGame.GetWorld(), UIClass.StaticClass());
    }
    GetShowMode() {
        return this._ShowMode;
    }
    // 这个接口只是把界面设置为隐藏或者显示，不会把Widget从ViewPort中移除
    SetVisible(Visible) {
        this._Widget.SetVisibility(Visible ? UE.ESlateVisibility.Visible : UE.ESlateVisibility.Hidden);
    }
    // 打开界面
    Open() {
        this._Widget.AddToViewport(GetZOrderByPanelType(this._PanelLevelType));
    }
    // 关闭
    Close() {
        this._Widget.RemoveFromViewport();
    }
    IsInViewPort() {
        return this._Widget.IsInViewport();
    }
    OnOpen(Data) {
    }
    OnClose() {
    }
}
exports.BasePanel = BasePanel;
//# sourceMappingURL=BasePanel.js.map