import {Router} from "express";
import UserController from "../controllers/user";
import {auth} from "../middleware/auth";
const userRouter: Router = Router();

userRouter.post("/registration",  UserController.register);
userRouter.post("/login", UserController.login);
userRouter.post("/logout", auth, UserController.logout);
userRouter.patch("/update/user", auth, UserController.updateUser);
// orderRouter.delete("/delete/order/:id", deleteOrder);

export = userRouter;