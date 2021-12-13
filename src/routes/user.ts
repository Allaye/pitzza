import {Router} from "express";
import UserController from "../controllers/user";
import AuthController from "../middleware/auth";
const userRouter: Router = Router();

userRouter.post("/registration",  UserController.register);
userRouter.post("/login", UserController.login);
userRouter.post("/logout", AuthController.auth, UserController.logout);
userRouter.patch("/update/user", AuthController.auth, UserController.updateUser);
// userRouter.delete("/delete/user", UserController.deleteUser);

export = userRouter;