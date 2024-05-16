import { Service } from "./Service";
import { Shop } from "../entity/Shop";
declare class ShopService implements Service<Shop> {
    private shopRepository;
    constructor();
    add: (shop: any) => Promise<void>;
    delete: (id: any) => Promise<void>;
    findAll: () => Promise<any>;
    findById: (id: any) => Promise<void>;
    update: (id: any, shop: any) => Promise<void>;
}
declare const _default: ShopService;
export default _default;
