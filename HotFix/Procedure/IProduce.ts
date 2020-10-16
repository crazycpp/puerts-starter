
export enum ProduceType{
    Empty = 0,
    Login = 1,
    CreateRole = 2,
}

export interface IProduce{
    OnEnter():void;
    OnTick(DeltaTime : number):void;
    OnExit():void;
    GetProduceType():ProduceType;
}