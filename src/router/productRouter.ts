import {Router} from "express";
import productController from "../controller/productController";

const productRouter = Router();
productRouter.get('/', productController.findAll);
productRouter.post('/', productController.add);
productRouter.put(`/:id`, productController.update);
export default productRouter;
