"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("../entity/Product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.add = async (product) => {
            await this.productRepository.save(product);
        };
        this.delete = async (id) => {
            await this.productRepository.delete(id);
        };
        this.findAll = async () => {
            return await this.productRepository.find({
                relations: {
                    shop: true
                }
            });
        };
        this.findById = async (id) => {
            await this.productRepository.find({ where: { id: id } });
        };
        this.update = async (id, product) => {
            await this.productRepository.update(id, product);
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(Product_1.ProductPro);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map