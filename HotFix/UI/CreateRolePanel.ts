import { BasePanel } from "./BasePanel";
import * as UE from "ue";
import { SubSystemLocator } from "../Logic/SubSystemLocator";

export class CreateRolelanel extends BasePanel{

    private _Name : UE.EditableTextBox;
    private _FemaleCheckBox : UE.CheckBox;
    private _MaleCheckBox : UE.CheckBox;

    constructor(){
        super();
        let FileName = "WBP_CreateRolePanel";
        this.LoadUI(FileName);
        this.BindProperty();
    }

    
    OnOpen(Data?:any){
        console.warn("打开登录界面");
    }

    OnClose(){
        console.warn("关闭登录界面");
    }

    BindProperty(){
        let CreateRolePanelBP = this._Widget as UE.WBP_CreateRolePanel_C;

        CreateRolePanelBP.BtnCreate.OnClicked.Add(this.OnBtnCreateClick.bind(this));
        CreateRolePanelBP.CheckBox_male.CheckedState = UE.ECheckBoxState.Checked;     // 默认选中
        CreateRolePanelBP.CheckBox_female.CheckedState = UE.ECheckBoxState.Unchecked;
        CreateRolePanelBP.CheckBox_female.OnCheckStateChanged.Add(this.OnFemalCheckStateChanged.bind(this));
        CreateRolePanelBP.CheckBox_male.OnCheckStateChanged.Add(this.OnMaleCheckStateChange.bind(this));
        this._Name = CreateRolePanelBP.EditableTextBoxName;
        this._FemaleCheckBox = CreateRolePanelBP.CheckBox_female;
        this._MaleCheckBox = CreateRolePanelBP.CheckBox_male;

        this._Widget.AddToViewport(0);
    }

    OnBtnCreateClick(){
        SubSystemLocator.GetCreateRoleSubSystem().CreateRole(this._Name.GetText());
    }

    OnFemalCheckStateChanged(Checked : boolean){
        console.warn("男被选中了");
        if(Checked){
            this._MaleCheckBox.CheckedState = UE.ECheckBoxState.Unchecked;
        }
    }

    OnMaleCheckStateChange(Checked:boolean){
        console.warn("女的被选中了");
        if (Checked){
            this._FemaleCheckBox.CheckedState = UE.ECheckBoxState.Unchecked;
        }
    }
}