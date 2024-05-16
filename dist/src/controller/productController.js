"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let data = await this.productService.findAll();
            res.json(data);
        };
        this.add = async (req, res) => {
            let data = await this.productService.add(req.body);
            res.json(data);
        };
        this.update = async (req, res) => {
            let data = await this.productService.update(req.params.id, req.body);
            res.json(data);
        };
        this.productService = productService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map