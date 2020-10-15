import {$ref, $unref, $set, argv, requestJitModuleMethod, makeUClass, blueprint} from 'puerts';
import * as UE from 'ue'
import { TSGame } from '../App/TSGame';
import {Panel} from "./Panel";

export class LoginPanel extends Panel{

    private _Account : UE.EditableTextBox;
    
    constructor(){
        super();
        let FileName = "WBP_LoginPanel";
        this.LoadUI(FileName);
        this.BindBlueprint();
    }

    BindBlueprint(){
        let LoginBP = this._Widget as UE.WBP_LoginPanel_C;

        LoginBP.BtnLogin.OnClicked.Add(this.OnLoginBtnClick.bind(this));

        this._Account = LoginBP.Account;

        this._Widget.AddToViewport(0);
    }


    OnLoginBtnClick(){
        this._Account.SetText("set account info from script");
    }
}