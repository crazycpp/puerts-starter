import * as UE from 'ue'
import { SubSystemLocator } from '../Logic/SubSystemLocator';
import { IProduce } from '../Procedure/IProduce';
import {ITicker} from "../Utility/ITicker"
import {LoginProduce} from "../Procedure/LoginProduce"; 
import {NullProduce} from "../Procedure/NullProduce";

export class TSGame{

    private static  _GameInstance : UE.MyPreciousGameInstance;

    private _CurProduce : IProduce;

    constructor(GameInstance : UE.MyPreciousGameInstance){
        TSGame._GameInstance = GameInstance;
        this._CurProduce = new NullProduce();
    }

    // 初始化游戏化境并启动游戏
    Initialize()
    {
        // Init SubSystem Locator
        SubSystemLocator.Initialize();     
    }

    ChangeProduce(NextProduce : IProduce){
        this._CurProduce.OnExit();
        this._CurProduce = NextProduce;
        this._CurProduce.OnEnter();
    }

    Run(){
        this.ChangeProduce(new LoginProduce());
    }

    static GetWorld():UE.World{
        return this._GameInstance.GetCurrentWorld();
    }
}