"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UISubSystem = void 0;
const IProduce_1 = require("../Procedure/IProduce");
const Stack_1 = require("../Utility/Stack");
const BasePanel_1 = require("./BasePanel");
const UIConfig_1 = require("./UIConfig");
class UISubSystem {
    Initialize() {
        this._UIResMap = new Map();
        this._CurInViewportPanel = new Map();
        this._StackInViewportPanel = new Stack_1.Stack();
    }
    Reset() {
    }
    SetAllPanelVisible(Visible) {
        this._CurInViewportPanel.forEach((v, k) => {
            v.Close();
        });
    }
    // 切换游戏流程
    ChangeProduce(CurProduce) {
        this._CurInViewportPanel.forEach((v, k) => {
            v.Close();
        });
        this._CurInViewportPanel.clear();
        // 进入新的游戏流程后，关闭当前所有界面，同时开启属于当前游戏流程中的HUD界面
        // 例如：
        // LoginProduce: LoginPanel
        // CreateProduce: CreateRolePanel
        switch (CurProduce) {
            case IProduce_1.ProduceType.Login:
                this.OpenPanel(UIConfig_1.UIType.LOGIN);
                break;
            case IProduce_1.ProduceType.CreateRole:
                this.OpenPanel(UIConfig_1.UIType.CreateRole);
                break;
        }
    }
    OpenPanel(PanelID, Data) {
        let UIPanel = this._UIResMap[PanelID];
        if (UIPanel == null) {
            UIPanel = UIConfig_1.UIConfig.CreateUI(PanelID);
        }
        // 如果界面正在显示中
        if (UIPanel.IsInViewPort()) {
            console.log("PanelID:" + PanelID.toString() + "is ");
            return;
        }
        switch (UIPanel.GetShowMode()) {
            case BasePanel_1.PanelShowMode.Normal:
                {
                    this._CurInViewportPanel[PanelID] = UIPanel;
                }
                break;
            case BasePanel_1.PanelShowMode.HideOther:
                {
                    // 先隐藏其他界面
                    this._CurInViewportPanel.forEach((v, k) => {
                        v.Close();
                    });
                    this._StackInViewportPanel.Foreach((v) => {
                        v.Close();
                    });
                    // 然后显示当前界面
                    this._CurInViewportPanel[PanelID] = UIPanel;
                }
                break;
            case BasePanel_1.PanelShowMode.ReverseBaseStack:
                {
                    // 先关闭栈中的界面
                    if (this._StackInViewportPanel.Count > 0) {
                        let topPanel = this._StackInViewportPanel.Peek();
                        topPanel.Close();
                    }
                    // 将界面入栈
                    this._StackInViewportPanel.Push(UIPanel);
                }
                break;
        }
        UIPanel.Open();
        UIPanel.OnOpen(Data);
    }
    ClosePanel(PanelID) {
        let UIPanel = this._UIResMap[PanelID];
        UIPanel.Close();
        switch (UIPanel.GetShowMode()) {
            case BasePanel_1.PanelShowMode.Normal:
                {
                    this._CurInViewportPanel.delete(PanelID);
                }
                break;
            case BasePanel_1.PanelShowMode.HideOther:
                {
                    // 从已显示Map的列表中
                    this._CurInViewportPanel.delete(PanelID);
                    // 重新恢复恢复所有界面的显示
                    this._CurInViewportPanel.forEach((v, k) => {
                        v.Open();
                    });
                    this._StackInViewportPanel.Foreach((v) => {
                        v.Open();
                    });
                }
                break;
            case BasePanel_1.PanelShowMode.ReverseBaseStack:
                {
                    this._StackInViewportPanel.Pop(); // 弹出当前栈顶被关闭的界面
                    let TopPanel = this._StackInViewportPanel.Peek();
                    if (TopPanel != null) {
                        TopPanel.Open();
                    }
                }
                break;
        }
    }
}
exports.UISubSystem = UISubSystem;
//# sourceMappingURL=UISubSystem.js.map