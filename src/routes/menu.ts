import {Router} from "express";
import MenuController from "../controllers/menu"

const menuRouter: Router = Router();

menuRouter.post("/create/menu", MenuController.addMenu);
menuRouter.get("/get/menus", MenuController.getMenus);
menuRouter.get("/get/menu/:id", MenuController.getMenu);
menuRouter.patch("/update/menu/:id", MenuController.updateMenu);
menuRouter.delete("/delete/menu/:id", MenuController.deleteMenu);

export = menuRouter;