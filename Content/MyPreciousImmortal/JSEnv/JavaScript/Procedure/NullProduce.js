"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullProduce = void 0;
const SubSystemLocator_1 = require("../Logic/SubSystemLocator");
const UIConfig_1 = require("../UI/UIConfig");
const IProduce_1 = require("./IProduce");
class NullProduce {
    OnEnter() {
        SubSystemLocator_1.SubSystemLocator.GetUISubSystem().OpenPanel(UIConfig_1.UIType.CreateRole);
    }
    OnTick(DeltaTime) {
    }
    OnExit() {
    }
    GetProduceType() {
        return IProduce_1.ProduceType.Empty;
    }
}
exports.NullProduce = NullProduce;
//# sourceMappingURL=NullProduce.js.map