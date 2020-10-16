import * as UE from 'ue'
import { SubSystemLocator } from '../Logic/SubSystemLocator';
import { IProduce } from '../Procedure/IProduce';
import {ITicker} from "../Utility/ITicker"
import {LoginProduce} from "../Procedure/LoginProduce"; 
import {NullProduce} from "../Procedure/NullProduce";

export class TSGame{
 
    private static  _GameInstance : UE.MyPreciousGameInstance;
    private static _TSGame : TSGame;

    private _CurProduce : IProduce;

    constructor(GameInstance : UE.MyPreciousGameInstance){
        TSGame._GameInstance = GameInstance; 
        this._CurProduce = new NullProduce();
        TSGame._TSGame = this;
    }

    // 初始化游戏化境并启动游戏 
    Initialize()
    {
        // Init SubSystem Locator
        SubSystemLocator.Initialize();     
    }

    static ChangeProduce(NextProduce : IProduce){
        TSGame._TSGame._CurProduce.OnExit();
        TSGame._TSGame._CurProduce = NextProduce;
        TSGame._TSGame._CurProduce.OnEnter();
    } 

    Run(){
        TSGame.ChangeProduce(new LoginProduce());
    }

    static GetWorld():UE.World{
        return this._GameInstance.GetCurrentWorld();
    }
}