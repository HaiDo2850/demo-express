import { Request, Response } from "express";
declare class ShopController {
    private shopService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ShopController;
export default _default;
