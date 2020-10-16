"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduce = void 0;
const SubSystemLocator_1 = require("../Logic/SubSystemLocator");
const UIConfig_1 = require("../UI/UIConfig");
const IProduce_1 = require("./IProduce");
class CreateProduce {
    OnEnter() {
        SubSystemLocator_1.SubSystemLocator.GetUISubSystem().OpenPanel(UIConfig_1.UIType.CreateRole);
    }
    OnTick() {
    }
    OnExit() {
    }
    GetProduceType() {
        return IProduce_1.ProduceType.CreateRole;
    }
}
exports.CreateProduce = CreateProduce;
//# sourceMappingURL=CreateRoleProduce.js.map