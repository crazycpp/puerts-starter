
import { SubSystemLocator } from "../SubSystemLocator";
import { ISubSystem } from "./ISubSystem";
import { PlayerLogin, PlayerLoginRet, LoginRetCode} from "../../Proto/msg_pb"
import { MsgId, MsgTypeId} from "../../Proto/proto_id_pb";
import { TSGame } from "../../App/TSGame";
import { ProduceType } from "../../Procedure/IProduce";
import { CreateProduce } from "../../Procedure/CreateRoleProduce";

export class LoginSubSystem implements ISubSystem{

    private _HostAddress : string;
    private _Port : number;
    private _UUID : string;

    Initialize():void{

        SubSystemLocator.GetNetworkSubSystem().RegisterMessageHandler(MsgId.S2C_PLAYERLOGINRS, this.OnPlayerLoginHandle);
    }

    Reset():void
    {

    }

    // For UI
    Login(HostAddress:string, Port:number, UUID:string):void{
        this._HostAddress = HostAddress;
        this._Port = Port;
        this._UUID = UUID;

        SubSystemLocator.GetNetworkSubSystem().RegisterMessageHandler(MsgId.MI_NETWORKCONNECTED, this.OnConnectedServer, this);

        SubSystemLocator.GetNetworkSubSystem().Connect(HostAddress, Port);
    }

    private OnPlayerLoginHandle(MsgBuffer : ArrayBuffer){
        let LoginAck : PlayerLoginRet = PlayerLoginRet.deserializeBinary(new Uint8Array(MsgBuffer));
        switch(LoginAck.getRet()){
            case LoginRetCode.LRC_OK:
                console.log("登录成功");
                break;
            case LoginRetCode.LRC_NOT_FOUND_ACCOUNT:
                console.log("账号未注册");
                // 切换到创建角色流程
                TSGame.ChangeProduce(new CreateProduce());
                break;
        }
    }

    
    // 连接到登陆服务器
    private OnConnectedServer():void{
        let loginMsg =  new PlayerLogin();
        loginMsg.setChannel("cty");
        loginMsg.setServerId(111111);
        loginMsg.setUuid(this._UUID);
        SubSystemLocator.GetNetworkSubSystem().Send(MsgTypeId.MI_LOGIC, MsgId.C2S_PLAYERLOGIN, loginMsg.serializeBinary());
    }

    // 连接服务器错误
    private OnConnectserverError():void{

    }
} 