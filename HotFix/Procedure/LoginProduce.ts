import { IProduce } from "./IProduce";
import * as UE from "ue"
import { TSGame } from "../App/TSGame";
import { LoginPanel } from "../UI/LoginPanel";

export class LoginProduce implements IProduce{

    constructor(){
        console.warn("游戏进入登录流程");
    }

    OnEnter():void{
       //UE.GameplayStatics.OpenLevel(TSGame.GetWorld(), "Start", true, "");
       let CurPanel = new LoginPanel();

    }

    OnTick(DeltaTime : number):void{

    }

    OnExit():void{
        
    }
}