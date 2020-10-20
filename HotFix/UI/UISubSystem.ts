
import { PanelExtensionSubsystem } from "ue";
import { ISubSystem } from "../Logic/SubSystem/ISubSystem";
import { IProduce, ProduceType } from "../Procedure/IProduce";
import { Stack } from "../Utility/Stack";
import { BasePanel, PanelShowMode } from "./BasePanel";
import { UIConfig, UIType } from "./UIConfig";

export class UISubSystem implements ISubSystem{

    private _UIResMap : Map<UIType, BasePanel>; // 已经加载的UI的Map
    private _CurInViewportPanel : Map<UIType, BasePanel>; // 当前显示中的界面
    private _StackInViewportPanel : Stack<BasePanel>;  // 栈结构的当前UI集合
    
    Initialize(){
        this._UIResMap = new Map<UIType, BasePanel>();
        this._CurInViewportPanel = new Map<UIType, BasePanel>();
        this._StackInViewportPanel = new Stack<BasePanel>();
    }

    Reset(){

    }

    SetAllPanelVisible(Visible:boolean){
        this._CurInViewportPanel.forEach((v, k)=>{
            v.Close();
        });

    }
    
    // 切换游戏流程
    ChangeProduce(CurProduce : ProduceType){

        this._CurInViewportPanel.forEach((v, k)=>{
            v.Close();
        });
        this._CurInViewportPanel.clear();

        // 进入新的游戏流程后，关闭当前所有界面，同时开启属于当前游戏流程中的HUD界面
        // 例如：
        // LoginProduce: LoginPanel
        // CreateProduce: CreateRolePanel
        switch(CurProduce){
            case ProduceType.Login:
                this.OpenPanel(UIType.LOGIN);
                break;
            case ProduceType.CreateRole:
                this.OpenPanel(UIType.CreateRole);
                break;            
        }
    }

    OpenPanel(PanelID : UIType, Data?:any){
        let UIPanel = this._UIResMap[PanelID] as BasePanel;
        if (UIPanel == null){
            UIPanel = UIConfig.CreateUI(PanelID);
        }

        // 如果界面正在显示中
        if (UIPanel.IsInViewPort()){
            console.log("PanelID:" + PanelID.toString() + "is ");            
            return ;
        }


        switch(UIPanel.GetShowMode()){
            case PanelShowMode.Normal:{
                this._CurInViewportPanel[PanelID] = UIPanel;                
            }
            break;
            case PanelShowMode.HideOther:{
                // 先隐藏其他界面
                this._CurInViewportPanel.forEach((v, k)=>{
                    v.Close();
                });
                this._StackInViewportPanel.Foreach((v)=>{
                    v.Close();
                })

                // 然后显示当前界面
                this._CurInViewportPanel[PanelID] = UIPanel;
            }
            break;
            case PanelShowMode.ReverseBaseStack:{
                // 先关闭栈中的界面
                if (this._StackInViewportPanel.Count>0){
                    let topPanel = this._StackInViewportPanel.Peek();
                    topPanel.Close();
                }

                // 将界面入栈
                this._StackInViewportPanel.Push(UIPanel);
            }
            break;
        }

        UIPanel.Open();
        UIPanel.OnOpen(Data);
    }

    ClosePanel(PanelID: UIType){
        let UIPanel = this._UIResMap[PanelID] as BasePanel;
        UIPanel.Close();
        switch(UIPanel.GetShowMode()){
            case PanelShowMode.Normal:{
                this._CurInViewportPanel.delete(PanelID);                
            }
            break;
            case PanelShowMode.HideOther:{
                // 从已显示Map的列表中
                this._CurInViewportPanel.delete(PanelID);
                // 重新恢复恢复所有界面的显示
                this._CurInViewportPanel.forEach((v, k)=>{
                    v.Open();
                });
                this._StackInViewportPanel.Foreach((v)=>{
                    v.Open();
                })
            }
            break;
            case PanelShowMode.ReverseBaseStack:{
                this._StackInViewportPanel.Pop(); // 弹出当前栈顶被关闭的界面
                let TopPanel = this._StackInViewportPanel.Peek();
                if (TopPanel != null){
                    TopPanel.Open();
                }
            }
            break;
        }
    }
}  