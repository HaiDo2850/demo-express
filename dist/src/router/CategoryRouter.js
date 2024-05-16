"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ShopController_1 = __importDefault(require("../controller/ShopController"));
const CategoryRouter = (0, express_1.Router)();
CategoryRouter.get('/', ShopController_1.default.findAll);
CategoryRouter.post('/', ShopController_1.default.add);
CategoryRouter.put(`/:id`, ShopController_1.default.update);
exports.default = CategoryRouter;
//# sourceMappingURL=ShopRouter.js.map