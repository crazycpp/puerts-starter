import { blueprint } from "puerts";
import * as UE from "ue";
import { TSGame } from "../App/TSGame";
import { Stack } from "../Utility/Stack";


// 界面层及类型
export enum PanelLevelType{
    UnKnow = 0,
    HUD    = 1, // 定级界面               Z Order 为10 往下依次按10累加
    Level1 = 2, // 功能1级界面         由主界面打开的功能界面，例如背包，角色属性，布阵
    Level2 = 3, // 功能2级界面         由1级界面打开的二级界面，例如通过背包打开的道具属性详情界面 ，弹幕归属在二级界面
    Level3 = 4, // 功能3级界面         通用的弹窗，二次确认框
    TextMessage = 5, // 通用提示信息        
    Announcement = 6,    // 全服公告，走马灯界面
    GamePlayGuide = 7 ,  // 新手引导
}

// UI显示模式
export enum PanelShowMode{
    Normal = 1, 
    HideOther = 2,         // 隐藏其他界面
    ReverseBaseStack = 3,  // 基于栈的回退
}

function GetZOrderByPanelType(Type : PanelLevelType){
    switch(Type){
        case PanelLevelType.HUD:
            return 10;  
        case PanelLevelType.Level1:
            return 20;
        case PanelLevelType.Level2:
            return 30;
        case PanelLevelType.Level3:
            return 40;
        case PanelLevelType.TextMessage:
            return 50;
        case PanelLevelType.Announcement:
            return 60;
        case PanelLevelType.GamePlayGuide:
            return 70;    
        default:
            return 0;
    }
}

export class BasePanel{
    protected _Widget : UE.UserWidget;
    protected _PanelLevelType : PanelLevelType;
    protected _ShowMode : PanelShowMode;

    protected LoadUI<T>(FileName : string){
        const UIClass = blueprint<typeof UE.UserWidget>(`/Game/MyPreciousImmortal/Core/UI/${FileName}.${FileName}_C`);
        this._Widget = UE.UMGManager.CreateWidget(TSGame.GetWorld(), UIClass.StaticClass());
    }

    GetShowMode():PanelShowMode{
        return this._ShowMode;
    }

    // 这个接口只是把界面设置为隐藏或者显示，不会把Widget从ViewPort中移除
    SetVisible(Visible:boolean){
        this._Widget.SetVisibility(Visible ? UE.ESlateVisibility.Visible :  UE.ESlateVisibility.Hidden);
    }

    // 打开界面
    Open(){
        this._Widget.AddToViewport(GetZOrderByPanelType(this._PanelLevelType));
    }

    
    // 关闭
    Close(){
        this._Widget.RemoveFromViewport();
    }

    IsInViewPort():boolean{
        return this._Widget.IsInViewport();
    }

    OnOpen(Data? : any){
        
    }

    OnClose(){

    }
}