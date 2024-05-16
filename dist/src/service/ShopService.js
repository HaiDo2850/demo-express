"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Shop_1 = require("../entity/Shop");
class ShopService {
    constructor() {
        this.add = async (shop) => {
            await this.shopRepository.save(shop);
        };
        this.delete = async (id) => {
            await this.shopRepository.delete(id);
        };
        this.findAll = async () => {
            return await this.shopRepository.find({
                relations: {
                    product: true
                }
            });
        };
        this.findById = async (id) => {
            await this.shopRepository.find({ where: { id: id } });
        };
        this.update = async (id, shop) => {
            await this.shopRepository.update(id, shop);
        };
        this.shopRepository = data_source_1.AppDataSource.getRepository(Shop_1.Shop);
    }
}
exports.default = new ShopService();
//# sourceMappingURL=ShopService.js.map