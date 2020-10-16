import { UE4RetargettingRefs } from "ue"
import * as Proto from "../../Proto/msg_pb"
import * as UE from "ue"
import { ISubSystem } from "./ISubSystem";
import { MsgId } from "../../Proto/proto_id_pb";

export class NetworkSubSystem implements ISubSystem{

    private _NetWorkProxy : UE.NetworkSubsystem;

    private _MsgHandleMap : { [MessageID:number]: any; }  = {};

    Initialize():void{
        // 获取UE中的SubSystem
        this._NetWorkProxy = UE.SubSystemUtil.GetNetworkSubSystem();
        // 注册相关回调
        this._NetWorkProxy.OnConnectedDelegate.Bind(this.OnConnected.bind(this));
        this._NetWorkProxy.OnDisConnectedDelegate.Bind(this.OnDisConnected.bind(this));
        this._NetWorkProxy.OnRecvMsgDelegate.Bind(this.OnRecvMsgDelegate.bind(this));
    }

    Reset():void{

    }

    Connect(HostAddress:string, Port:number){
        this._NetWorkProxy.Connect(HostAddress, Port);
    }

    Send(MsgType:number, MsgID:number, MsgContent: ArrayBuffer):void{
        this._NetWorkProxy.SendMessage(MsgType, MsgID, MsgContent);
    }

    RegisterMessageHandler(MessageID : number, Handler:Function, Target? :any){
        this._MsgHandleMap[MessageID ] = {
            HandlerFunc : Handler,
            Target : Target
        }
    }

    private OnConnected():void{
        this.ProcessMessage(MsgId.MI_NETWORKCONNECTED);
    }

    private OnDisConnected():void{
        this.ProcessMessage(MsgId.MI_NETWORKDISCONNECT);
    }

    private OnRecvMsgDelegate(MessageID:number , MsgBuffer?:ArrayBuffer):void{
        this.ProcessMessage(MessageID, MsgBuffer);
    }

    private ProcessMessage(MessageID:number , MsgBuffer?:ArrayBuffer){
        let HandleInfo = this._MsgHandleMap[MessageID];
        if (HandleInfo){
            HandleInfo.HandlerFunc.call(HandleInfo.Target, MsgBuffer);
        }
        else
        {
            console.warn("客户端未处理的的消息ID: " + MessageID.toString());
        }
    }
}