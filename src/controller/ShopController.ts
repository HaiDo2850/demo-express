import {Request, Response} from "express";
import shopService from "../service/ShopService";

class ShopController {
    private shopService;

    constructor() {
        this.shopService = shopService;
    }

    findAll = async (req: Request, res: Response) => {
        let data = await this.shopService.findAll();
        res.json(data);
    }

    add = async (req: Request, res: Response) => {
        let data = await this.shopService.add(req.body);
        res.json(data);
    }

    update = async (req: Request, res: Response) => {
        let data = await this.shopService.update(req.params.id, req.body);
        res.json(data);
    }

}

export default new ShopController();
