import {Request, Response} from "express";
import productService from "../service/productService";
import * as fs from "fs";

class ProductController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    findAll = async (req: Request, res: Response) => {
        let data = await this.productService.findAll();
        res.json(data);
    }

    add = async (req: Request, res: Response) => {
        let data = await this.productService.add(req.body);
        res.json(data);
    }

    update = async (req: Request, res: Response) => {
        let data = await this.productService.update(req.params.id, req.body);
        res.json(data);
    }

}

export default new ProductController();
