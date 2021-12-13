import {Router} from "express";
// import {addOrder, getOrders, getOrderById, updateOrder, deleteOrder} from "../controllers/order";
import { register, login, logout, updateUser } from "../controllers/user";
import {auth} from "../middleware/auth";
const userRouter: Router = Router();

userRouter.post("/registration",  register);
userRouter.post("/login", login);
userRouter.post("/logout", auth, logout);
userRouter.patch("/update/user/:id", updateUser);
// orderRouter.delete("/delete/order/:id", deleteOrder);

export = userRouter;