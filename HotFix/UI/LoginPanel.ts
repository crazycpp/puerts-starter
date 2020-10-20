import {$ref, $unref, $set, argv, requestJitModuleMethod, makeUClass, blueprint} from 'puerts';
import * as UE from 'ue'
import { TSGame } from '../App/TSGame';
import { SubSystemLocator } from '../Logic/SubSystemLocator';
import {BasePanel, PanelLevelType} from "./BasePanel";

export class LoginPanel extends BasePanel{



    private _Account : UE.EditableTextBox;
    private _Host : UE.EditableTextBox;
    private _Port : UE.EditableTextBox;
    
    constructor(){
        super();
        this._PanelLevelType = PanelLevelType.HUD;
        let FileName = "WBP_LoginPanel";
        this.LoadUI(FileName);
        this.BindProperty();
    }
 
    BindProperty(){
        let LoginBP = this._Widget as UE.WBP_LoginPanel_C;

        LoginBP.BtnLogin.OnClicked.Add(this.OnLoginBtnClick.bind(this));

        this._Account = LoginBP.Account;
        this._Host = LoginBP.HostAddress;
        this._Port = LoginBP.Port;
    
    }


    OnLoginBtnClick(){

        console.warn("host:", this._Host.GetText());
        console.warn("port", this._Port.GetText());

        SubSystemLocator.GetLoginSubSystem().Login(this._Host.GetText(), Number(this._Port.GetText()), this._Account.GetText());
    }

    OnOpen(Data?:any){
        console.warn("打开登录界面");
    }

    OnClose(){
        console.warn("关闭登录界面");
    }
}