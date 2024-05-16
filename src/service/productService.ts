import {ProductPro} from "../entity/Product";
import {AppDataSource} from "../data-source";
import {Service} from "./Service";

class ProductService implements Service<ProductPro>{
    private productRepository;
    constructor() {
        this.productRepository = AppDataSource.getRepository(ProductPro);
    }

    add = async (product) => {
        await this.productRepository.save(product)
    }

    delete = async (id) => {
        await this.productRepository.delete(id)
    }

    findAll = async () => {
        return await this.productRepository.find({
            relations:{
                shop: true
            }
        });
    }

    findById = async (id) => {
        await this.productRepository.find({where:{id:id}})
    }
    update= async (id , product) => {
        await this.productRepository.update(id , product)
    }

}

export default new ProductService();
