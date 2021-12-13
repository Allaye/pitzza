import {Router} from "express";
import OrderController from "../controllers/order";
import AuthController from "../middleware/auth";
const orderRouter: Router = Router();

orderRouter.post("/create/order", AuthController.auth, OrderController.addOrder);
orderRouter.get("/get/orders", AuthController.auth, OrderController.getOrders);
orderRouter.get("/get/order/:id", AuthController.auth, OrderController.getOrderById);
orderRouter.patch("/update/order/:id", AuthController.auth, OrderController.updateOrder);
orderRouter.delete("/delete/order/:id", AuthController.auth, OrderController.deleteOrder);

export = orderRouter;