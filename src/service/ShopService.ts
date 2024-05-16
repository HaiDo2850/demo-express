import {Service} from "./Service";
import {AppDataSource} from "../data-source";
import {Shop} from "../entity/Shop";


class ShopService implements Service<Shop>{
    private shopRepository;
    constructor() {
        this.shopRepository = AppDataSource.getRepository(Shop);
    }

    add = async (shop) => {
        await this.shopRepository.save(shop)
    }

    delete = async (id) => {
        await this.shopRepository.delete(id)
    }

    findAll = async () => {
        return await this.shopRepository.find({
            relations:{
                product: true
            }
        });
    }

    findById = async (id) => {
        await this.shopRepository.find({where:{id:id}})
    }
    update= async (id , shop) => {
        await this.shopRepository.update(id , shop)
    }

}

export default new ShopService();
