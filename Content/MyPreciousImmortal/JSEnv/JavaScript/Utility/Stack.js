"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.arr = [];
    }
    get Count() {
        return this.arr.length;
    }
    Clear() {
        this.arr = [];
    }
    Contains(item) {
        return this.arr.indexOf(item) >= 0;
    }
    Peek() {
        if (this.arr.length <= 0)
            return null;
        return this.arr[0];
    }
    Pop() {
        if (this.arr.length <= 0)
            return null;
        return this.arr.pop();
    }
    Push(item) {
        this.arr.push(item);
    }
    ToArray() {
        let result = [];
        result.concat(this.arr);
        return result;
    }
    ToString() {
        let result = "";
        for (let item of this.arr) {
            result += item + "";
        }
        return result;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map