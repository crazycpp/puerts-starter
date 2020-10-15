"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
class List {
    constructor(arr) {
        this.arr = [];
        if (arr) {
            this.arr = arr;
        }
    }
    Get(index) {
        return this.arr[index];
    }
    get Count() {
        return this.arr.length;
    }
    Add(data) {
        if (data)
            this.arr.push(data);
    }
    AddRange(arr) {
        if (arr)
            this.arr = this.arr.concat(arr);
    }
    Clear() {
        while (this.arr.length > 0) {
            this.arr.pop();
        }
    }
    Remove(data) {
        if (data) {
            let index = this.arr.indexOf(data);
            if (index >= 0)
                this.arr.splice(index, 1);
        }
        return false;
    }
    RemoveAt(index) {
        if (index < 0 || index >= this.arr.length)
            return false;
        this.arr.splice(index, 1);
    }
    Insert(index, item) {
        this.arr.splice(index, 0, item);
    }
    Sort() {
        this.arr.sort();
    }
    Reverse() {
        this.arr.reverse();
    }
    ToArray() {
        let result = [];
        result.concat(this.arr);
        return result;
    }
    Contains(item) {
        return this.arr.indexOf(item) >= 0;
    }
    IndexOf(item) {
        return this.arr.indexOf(item);
    }
    LastIndexOf(item) {
        return this.arr.lastIndexOf(item);
    }
    ToString() {
        let result = "";
        for (let item of this.arr) {
            result += item + " ";
        }
        return result;
    }
}
exports.List = List;
//# sourceMappingURL=List.js.map