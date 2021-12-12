import {Router} from "express";
import {addOrder, getOrders, getOrderById, updateOrder, deleteOrder} from "../controllers/order";
import {auth} from "../middleware/auth";
const orderRouter: Router = Router();

orderRouter.post("/create/order", auth, addOrder);
orderRouter.get("/get/orders", auth, getOrders);
orderRouter.get("/get/order/:id", auth, getOrderById);
orderRouter.patch("/update/order/:id", auth, updateOrder);
orderRouter.delete("/delete/order/:id", auth, deleteOrder);

export = orderRouter;