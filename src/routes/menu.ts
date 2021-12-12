import {Router} from "express";
import {addMenu, getMenus, getMenu, updateMenu, deleteMenu} from "../controllers/menu.js"

const menuRouter: Router = Router();

menuRouter.post("/create/menu", addMenu);
menuRouter.get("/get/menus", getMenus);
menuRouter.get("/get/menu/:id", getMenu);
menuRouter.patch("/update/menu/:id", updateMenu);
menuRouter.delete("/delete/menu/:id", deleteMenu);

export = menuRouter;