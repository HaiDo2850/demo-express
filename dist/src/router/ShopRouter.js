"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ShopController_1 = __importDefault(require("../controller/ShopController"));
const ShopRouter = (0, express_1.Router)();
ShopRouter.get('/', ShopController_1.default.findAll);
ShopRouter.post('/', ShopController_1.default.add);
ShopRouter.put(`/:id`, ShopController_1.default.update);
exports.default = ShopRouter;
//# sourceMappingURL=ShopRouter.js.map