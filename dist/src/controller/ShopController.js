"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShopService_1 = __importDefault(require("../service/ShopService"));
class ShopController {
    constructor() {
        this.findAll = async (req, res) => {
            let data = await this.shopService.findAll();
            res.json(data);
        };
        this.add = async (req, res) => {
            let data = await this.shopService.add(req.body);
            res.json(data);
        };
        this.update = async (req, res) => {
            let data = await this.shopService.update(req.params.id, req.body);
            res.json(data);
        };
        this.shopService = ShopService_1.default;
    }
}
exports.default = new ShopController();
//# sourceMappingURL=ShopController.js.map