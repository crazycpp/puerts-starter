"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
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
    Dequeue() {
        if (this.arr.length <= 0)
            return null;
        let result = this.arr[0];
        this.arr.splice(0, 1);
        return result;
    }
    Enquque(item) {
        this.arr.push(item);
    }
    Peek() {
        if (this.arr.length <= 0)
            return null;
        let result = this.arr[0];
        return result;
    }
    ToArray() {
        let result = [];
        result.concat(this.arr);
        return result;
    }
    ToString() {
        let result = "";
        for (let item of this.arr) {
            result += item + " ";
        }
        return result;
    }
    Foreach(Callback) {
        this.arr.forEach(Callback);
    }
}
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map