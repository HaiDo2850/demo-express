import { ProductPro } from "../entity/Product";
import { Service } from "./Service";
declare class ProductService implements Service<ProductPro> {
    private productRepository;
    constructor();
    add: (product: any) => Promise<void>;
    delete: (id: any) => Promise<void>;
    findAll: () => Promise<any>;
    findById: (id: any) => Promise<void>;
    update: (id: any, product: any) => Promise<void>;
}
declare const _default: ProductService;
export default _default;
