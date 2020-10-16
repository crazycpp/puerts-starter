import { NiagaraActor } from "ue";
import { ISubSystem } from "./SubSystem/ISubSystem";
import { LoginSubSystem } from "./SubSystem/LoginSubSystem";
import { UISubSystem } from "../UI/UISubSystem";
import { NetworkSubSystem } from "./SubSystem/NetworkSubSystem";
import { CreateRoleSubSystem } from "./SubSystem/CreateRoleSubSystem";


// 这里先按朴素的方式实现，等进一步熟习TS了，引入语法糖来精简代码

export class SubSystemLocator{

    private constructor()
    {
    }

    ////////////  SubSystem 对象/////////////////
    private static _NetworkSystem : NetworkSubSystem;
    private static _LoginSubSystem : LoginSubSystem;
    private static _UISubSystem : UISubSystem;
    private static _CreateRoleSubSystem : CreateRoleSubSystem;

    ////////////  SubSystem 对象/////////////////
    private static _SubSystemArray : Array<ISubSystem>;

    private static constructorSubSystem()
    {
        this._SubSystemArray = new Array<ISubSystem>();

        // construct the loginsubsystem
        this._LoginSubSystem = new LoginSubSystem();
        this._SubSystemArray.push(this._LoginSubSystem);

        // construct the UISubSystem
        this._UISubSystem = new UISubSystem();
        this._SubSystemArray.push(this._UISubSystem);

        // construct the NetworkSubSystem
        this._NetworkSystem = new NetworkSubSystem();
        this._SubSystemArray.push(this._NetworkSystem);


        this._CreateRoleSubSystem = new CreateRoleSubSystem();
        this._SubSystemArray.push(this._CreateRoleSubSystem);
    }

    static Initialize()
    {
        this.constructorSubSystem();

        for(let i=0; i<this._SubSystemArray.length; i++)
        {
            this._SubSystemArray[i].Initialize();
        }
    }

    static Reset()
    {
        for(let i=0; i<this._SubSystemArray.length; i++)
        {
            this._SubSystemArray[i].Reset();
        }
    }

    static GetLoginSubSystem():LoginSubSystem
    {
        return this._LoginSubSystem;
    }

    static GetUISubSystem():UISubSystem{
        return this._UISubSystem;
    }

    static GetNetworkSubSystem():NetworkSubSystem{
        return this._NetworkSystem;
    }

    static GetCreateRoleSubSystem():CreateRoleSubSystem{
        return this._CreateRoleSubSystem;
    }
}
