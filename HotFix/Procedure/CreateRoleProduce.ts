import { ViewportDragOperation } from "ue";
import { SubSystemLocator } from "../Logic/SubSystemLocator";
import { UIType } from "../UI/UIConfig";
import { IProduce, ProduceType } from "./IProduce";

export class CreateProduce implements IProduce {
    OnEnter():void{
        SubSystemLocator.GetUISubSystem().OpenPanel(UIType.CreateRole);
    }

    OnTick():void{

    }

    OnExit():void{

    }

    GetProduceType():ProduceType{
        return ProduceType.CreateRole;
    }
}
