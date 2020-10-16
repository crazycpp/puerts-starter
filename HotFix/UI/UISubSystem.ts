
import { PanelExtensionSubsystem } from "ue";
import { ISubSystem } from "../Logic/SubSystem/ISubSystem";
import { BasePanel } from "./BasePanel";
import { UIConfig, UIType } from "./UIConfig";


export class UISubSystem implements ISubSystem{

    private _UIResMap : Map<UIType, BasePanel>;
    
    Initialize(){
        this._UIResMap = new Map<UIType, BasePanel>();
    }

    Reset(){

    }

    SetAllPanelVisible(bool:boolean){

    } 

    OpenPanel(PanelID : UIType, Data?:any){
        let UIPanel = this._UIResMap[PanelID] as BasePanel;
        if (UIPanel == null){
            UIPanel = UIConfig.CreateUI(PanelID);
        }

        UIPanel.OnOpen(Data);
    }
}  