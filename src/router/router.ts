import {Router} from "express";
import productRouter from "./productRouter";
import ShopRouter from "./ShopRouter";

const router = Router();
router.use('/products', productRouter);
router.use('/shops', ShopRouter);
export default router;
