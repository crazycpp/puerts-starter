import { BrainComponent, SwitchActor } from "ue";
import { PlayerCreate, PlayerCreateRet, CreateRetCode} from "../../Proto/msg_pb";
import { MsgId, MsgTypeId } from "../../Proto/proto_id_pb";
import { SubSystemLocator } from "../SubSystemLocator";
import { ISubSystem } from "./ISubSystem";

export class CreateRoleSubSystem implements ISubSystem{

    private _HostAddress : string;
    private _Port : number;
    private _UUID : string;

    public Initialize():void{
        SubSystemLocator.GetNetworkSubSystem().RegisterMessageHandler(MsgId.S2C_PLAYERCREATERS, this.OnPlayerCreateRet, this);
    }

    public Reset():void
    {

    }

    // TODO 协议中我看暂时只能填了名字的
    public CreateRole(Name:string){
        if (Name.length == 0){
            console.log("名字不能为空");
            return ;
        }
        let MsgCreateRole : PlayerCreate = new PlayerCreate();
        MsgCreateRole.setName(Name);
        MsgCreateRole.setTemplateId(1);
        SubSystemLocator.GetNetworkSubSystem().Send(MsgTypeId.MI_LOGIC,MsgId.C2S_PLAYERCREATE, MsgCreateRole.serializeBinary());        
    }

    private OnPlayerCreateRet(MsgBuffer: ArrayBuffer){
        let MsgCreateRoleAck : PlayerCreateRet = PlayerCreateRet.deserializeBinary(new Uint8Array(MsgBuffer));
        switch(MsgCreateRoleAck.getRet()){
            case CreateRetCode.CRC_CREATE_OK:{
                console.warn("创建角色成功");
            }
            break;
            case CreateRetCode.CRC_RENAME:{
                console.warn("名字重复啦");
            }
            break;
            case CreateRetCode.CRC_UNKONWN:{
                console.warn("未知");
            }
            break;            
        }
    }
}