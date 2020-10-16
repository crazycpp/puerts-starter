import { SubSystemLocator } from "../Logic/SubSystemLocator";
import { UIType } from "../UI/UIConfig";
import { IProduce, ProduceType } from "./IProduce";

export class NullProduce implements IProduce{

    OnEnter():void{
        SubSystemLocator.GetUISubSystem().OpenPanel(UIType.CreateRole);
    }

    OnTick(DeltaTime : number):void{

    }

    OnExit():void{

    }

    GetProduceType():ProduceType{
        return ProduceType.Empty;
    }
}