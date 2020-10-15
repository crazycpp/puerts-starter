import { blueprint } from "puerts";
import * as UE from "ue";
import { TSGame } from "../App/TSGame";

export class Panel{
    protected _Widget : UE.UserWidget;

    LoadUI<T>(FileName : string){
        const UIClass = blueprint<typeof UE.UserWidget>(`/Game/MyPreciousImmortal/Core/UI/${FileName}.${FileName}_C`);
        this._Widget = UE.UMGManager.CreateWidget(TSGame.GetWorld(), UIClass.StaticClass());
    }

    SetVisible(Visible:boolean){
        this._Widget.SetVisibility(Visible ? UE.ESlateVisibility.Visible :  UE.ESlateVisibility.Hidden);
    }
}