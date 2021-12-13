import {Router} from "express";
import OrderController from "../controllers/order";
import {auth} from "../middleware/auth";
const orderRouter: Router = Router();

orderRouter.post("/create/order", auth, OrderController.addOrder);
orderRouter.get("/get/orders", auth, OrderController.getOrders);
orderRouter.get("/get/order/:id", auth, OrderController.getOrderById);
orderRouter.patch("/update/order/:id", auth, OrderController.updateOrder);
orderRouter.delete("/delete/order/:id", auth, OrderController.deleteOrder);

export = orderRouter;