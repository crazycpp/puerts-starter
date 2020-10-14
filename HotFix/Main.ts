import { prototype } from 'mocha';
import {$ref, $unref, $set, argv, requestJitModuleMethod, makeUClass, blueprint} from 'puerts';
import * as UE from 'ue'

import * as Proto from "./Proto/msg_pb"
import * as MsgID from "./Proto/proto_id_pb"

console.log("-----------------------Game Start-----------------------------");


class GameApp {
    constructor(){}

    Init():void{
        console.log("-----------------------Game Init-----------------------------");


    }

    Run():void{
        console.log("-----------------------Game Start Running-----------------------------");
    }
}

let app : GameApp = new GameApp();

// 初始化执行环境
app.Init();

// 开始进入热更代码的执行逻辑
app.Run();
   

let GameInstance = argv.getByName("GameInstance") as UE.MyPreciousGameInstance;
 

console.warn("to change Map......");

// for test
UE.GameplayStatics.OpenLevel(GameInstance.GetCurrentWorld(), "Start", true, "");  

console.warn("打印类型:",typeof(UE.MyPreciousGameInstance).name.toString()); 

let loginMsg =  new Proto.PlayerLogin();
loginMsg.setChannel("cty");
loginMsg.setServerId(111111);
loginMsg.setUuid("windknife");

let buff = loginMsg.serializeBinary();

let loingRet = Proto.PlayerLogin.deserializeBinary(buff);

console.warn("message : ", loingRet.getUuid());

let networkSubSystem :UE.NetworkSubsystem = UE.SubSystemUtil.GetNetworkSubSystem();



networkSubSystem.OnConnectedDelegate.Bind(()=>{
    console.warn("from script: connect to the server success");

     networkSubSystem.SendMessage(MsgID.MsgTypeId.MI_LOGIC, MsgID.MsgId.C2S_PLAYERLOGIN, buff);


});

networkSubSystem.OnDisConnectedDelegate.Bind(()=>{
    console.warn("from script: disconnect from the servert");
});

networkSubSystem.OnRecvMsgDelegate.Bind((msgID, msgBuffer)=>{
    console.warn("receive message id :", msgID);
    let bytes = new Uint8Array(msgBuffer);

    for(var i=0; i<bytes.length; i++){
        console.warn(i, bytes[i]);
    }
    let loginRet = Proto.PlayerLoginRet.deserializeBinary(bytes);
    console.log("LoginRET:", loginRet.getRet());

})
 
networkSubSystem.Connect("192.168.0.100", 5401);
 