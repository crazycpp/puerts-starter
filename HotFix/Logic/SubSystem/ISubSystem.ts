import { AnimGraphNode_ResetRoot } from "ue";

export interface ISubSystem{

    // SubSystem 初始化
    Initialize():void;

    // 提供一个重置数据的操作，用于从游戏中返回登录界面，然后在进入游戏时的重置操作，避免脏数据
    Reset():void;

}