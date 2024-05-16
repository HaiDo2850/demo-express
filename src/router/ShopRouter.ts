import {Router} from "express";
import shopController from "../controller/ShopController";

const ShopRouter = Router();
ShopRouter.get('/', shopController.findAll);
ShopRouter.post('/', shopController.add);
ShopRouter.put(`/:id`, shopController.update);
export default ShopRouter;