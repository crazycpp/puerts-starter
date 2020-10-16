import { IProduce, ProduceType } from "./IProduce";
import * as UE from "ue"
import { TSGame } from "../App/TSGame";
import { LoginPanel } from "../UI/LoginPanel";
import { SubSystemLocator } from "../Logic/SubSystemLocator";
import { UIType } from "../UI/UIConfig";

export class LoginProduce implements IProduce{

    constructor(){
        console.warn("游戏进入登录流程");
    }

    OnEnter():void{
       //UE.GameplayStatics.OpenLevel(TSGame.GetWorld(), "Start", true, "");
       //let CurPanel = new LoginPanel();

       SubSystemLocator.GetUISubSystem().OpenPanel(UIType.LOGIN);
    }

    OnTick(DeltaTime : number):void{

    }

    OnExit():void{
        
    }

    GetProduceType():ProduceType{
        return ProduceType.Login;
    }
}