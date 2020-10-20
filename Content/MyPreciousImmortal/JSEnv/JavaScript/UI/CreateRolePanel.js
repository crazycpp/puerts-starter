"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRolelanel = void 0;
const BasePanel_1 = require("./BasePanel");
const UE = require("ue");
const SubSystemLocator_1 = require("../Logic/SubSystemLocator");
class CreateRolelanel extends BasePanel_1.BasePanel {
    constructor() {
        super();
        this._PanelLevelType = BasePanel_1.PanelLevelType.HUD;
        let FileName = "WBP_CreateRolePanel";
        this.LoadUI(FileName);
        this.BindProperty();
    }
    OnOpen(Data) {
        console.warn("打开登录界面");
    }
    OnClose() {
        console.warn("关闭登录界面");
    }
    BindProperty() {
        let CreateRolePanelBP = this._Widget;
        CreateRolePanelBP.BtnCreate.OnClicked.Add(this.OnBtnCreateClick.bind(this));
        CreateRolePanelBP.CheckBox_male.CheckedState = UE.ECheckBoxState.Checked; // 默认选中
        CreateRolePanelBP.CheckBox_female.CheckedState = UE.ECheckBoxState.Unchecked;
        CreateRolePanelBP.CheckBox_female.OnCheckStateChanged.Add(this.OnFemalCheckStateChanged.bind(this));
        CreateRolePanelBP.CheckBox_male.OnCheckStateChanged.Add(this.OnMaleCheckStateChange.bind(this));
        this._Name = CreateRolePanelBP.EditableTextBoxName;
        this._FemaleCheckBox = CreateRolePanelBP.CheckBox_female;
        this._MaleCheckBox = CreateRolePanelBP.CheckBox_male;
    }
    OnBtnCreateClick() {
        SubSystemLocator_1.SubSystemLocator.GetCreateRoleSubSystem().CreateRole(this._Name.GetText());
    }
    OnFemalCheckStateChanged(Checked) {
        console.warn("男被选中了");
        if (Checked) {
            this._MaleCheckBox.CheckedState = UE.ECheckBoxState.Unchecked;
        }
    }
    OnMaleCheckStateChange(Checked) {
        console.warn("女的被选中了");
        if (Checked) {
            this._FemaleCheckBox.CheckedState = UE.ECheckBoxState.Unchecked;
        }
    }
}
exports.CreateRolelanel = CreateRolelanel;
//# sourceMappingURL=CreateRolePanel.js.map