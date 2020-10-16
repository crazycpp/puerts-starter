import {$ref, $unref, $set, argv, requestJitModuleMethod, makeUClass, blueprint} from 'puerts';
import { createClass } from 'react';
import * as UE from 'ue'
import {TSGame} from "./App/TSGame"
import { LoginPanel } from './UI/LoginPanel';

import{EventDispatcher} from "./Utility/EventDispatcher"
 

let GameInstance = argv.getByName("GameInstance") as UE.MyPreciousGameInstance;
let Game : TSGame = new TSGame(GameInstance);

Game.Initialize();
Game.Run();


/*
class EventTest{
    _Array : Array<number>;
    
    constructor(){
        this._Array = new Array<number>();
        this._Array.push(100);
        EventDispatcher.AddEventListener("TestA", this.TestA, this);
    }

    TestA(Params :any){
        console.warn("array size:", this._Array.length);
        console.warn(Params);
        console.warn(Params.id);
        console.warn(Params.Name);

        EventDispatcher.RemoveEventListener("TestA", this.TestA, this);
    }
}

let eventTest = new EventTest();
 
let Params :any = {};
Params.id = 1;
Params.Name = "windknife"
EventDispatcher.TriggerEvent("TestA", Params);


EventDispatcher.TriggerEvent("TestA", Params);

*/

/*
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


let ScriptSubSystem = UE.SubSystemUtil.GetScriptSubSystem();

ScriptSubSystem.OnGameTick.Bind((DeltaTime)=>{
    console.log("tick in script", DeltaTime);
})
*/