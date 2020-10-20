import { BasePanel } from "./BasePanel";
import { CreateRolelanel } from "./CreateRolePanel";
import { LoginPanel } from "./LoginPanel";

export enum UIType{
    
    LOGIN, // 登录界面
    CreateRole, // 创建角色界面
    GameMain,   // 游戏主界面
    RolePanel,  // 角色界面
    RoleDetail, // 角色详情界面
    PackagePanel, // 背包界面
    PetPanel,     // 宠物界面
    
}


export class UIConfig{

    static GetUIResName(Type:UIType):string{
        switch(Type){
            case UIType.LOGIN:
                return "WBP_LoginPanel"
            case UIType.CreateRole:
                return "WBP_CreateRolePanel";
                    
        }

        return "";
    }

    static CreateUI(Type : UIType):BasePanel{
        switch(Type){
            case UIType.LOGIN:
                return new LoginPanel();
            case UIType.CreateRole:
                return new CreateRolelanel();
        }
    }
} 