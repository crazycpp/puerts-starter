import { ISubSystem } from "./ISubSystem";

export class LoginSubSystem implements ISubSystem{

    constructor()
    {

    }

    Initialize():void
    {
        console.log("yes I got it!");
    }

    Reset():void
    {

    }
}