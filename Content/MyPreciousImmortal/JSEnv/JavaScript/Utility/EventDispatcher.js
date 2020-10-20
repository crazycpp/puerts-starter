"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDispatcher = void 0;
class EventDispatcher {
    /**
     * 添加事件监听者
     * @description:
     * @param {type}
     * @return {type}
     */
    static AddEventListener(EventNames, Callback, target) {
        if (Array.isArray(EventNames) == false) {
            EventNames = [EventNames];
        }
        for (var i = 0, len = EventNames.length; i < len; i++) {
            let name = EventNames[i];
            this._EventHandlerMap[name] = this._EventHandlerMap[name] || [];
            this._EventHandlerMap[name].push({
                callback: Callback,
                target: target
            });
        }
    }
    /**
     * 移除事件监听者
     * @description:
     * @param {type}
     * @return {type}
     */
    static RemoveEventListener(EventNames, Callback, target) {
        let event = this._EventHandlerMap[EventNames];
        if (!event)
            return;
        if (target == undefined) {
            target = Callback;
            Callback = undefined;
        }
        if (Array.isArray(EventNames) == false) {
            EventNames = [EventNames];
        }
        for (var idx in EventNames) {
            var eventName = EventNames[idx];
            for (var i = 0; i < this._EventHandlerMap[eventName].length; i++) {
                var handler = this._EventHandlerMap[eventName][i];
                if (target == handler.target &&
                    (Callback.toString() == handler.callback.toString() || Callback == undefined)) {
                    this._EventHandlerMap[eventName].splice(i, 1);
                }
            }
        }
    }
    ;
    /**
     * 触发事件
     * @description:
     * @param {type}
     * @return {type}
     */
    static TriggerEvent(EventName, Data) {
        let ReturnValues = []; //返回值
        Data = Data || {};
        let name = EventName;
        //Data.eventName = name; //保存一下事件名字
        if (this._EventHandlerMap[EventName] && this._EventHandlerMap[EventName].length > 0) {
            for (var i = 0; i < this._EventHandlerMap[EventName].length; i++) {
                var handler = this._EventHandlerMap[EventName][i];
                var returnValue = handler.callback.call(handler.target, Data);
                ReturnValues.push(returnValue);
            }
        }
        else {
            console.warn("EventDispatcher: can not find EventName:" + EventName);
        }
        return ReturnValues;
    }
}
exports.EventDispatcher = EventDispatcher;
EventDispatcher._EventHandlerMap = {};
//# sourceMappingURL=EventDispatcher.js.map