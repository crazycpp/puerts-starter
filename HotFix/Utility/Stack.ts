export class Stack<T>{

    private arr: Array<T> = [];

    public get Count(): number {
        return this.arr.length;
    }

    public Clear() {
        this.arr = [];
    }

    public Contains(item: T): boolean {
        return this.arr.indexOf(item) >= 0;
    }

    public Peek(): T {
        if (this.arr.length <= 0)
            return null;
        return this.arr[0];
    }

    public Pop(): T {
        if (this.arr.length <= 0)
            return null;
        return this.arr.pop();
    }

    public Push(item: T) {
        this.arr.push(item);
    }

    public ToArray(): T[] {
        let result: Array<T> = [];
        result.concat(this.arr);
        return result;
    }

    public ToString():string{
        let result:string="";
        for(let item of this.arr){
            result += item + "";
        }
        return result;
    }
}