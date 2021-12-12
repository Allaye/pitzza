import {Router} from "express";
import {addOrder, getOrders, getOrderById, updateOrder, deleteOrder} from "../controllers/order";

const orderRouter: Router = Router();

orderRouter.post("/create/order", addOrder);
orderRouter.get("/get/orders", getOrders);
orderRouter.get("/get/order/:id", getOrderById);
orderRouter.patch("/update/order/:id", updateOrder);
orderRouter.delete("/delete/order/:id", deleteOrder);

export = orderRouter;