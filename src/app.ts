import express, {Application} from "express";
import menuRouter from "./routes/menu";
import orderRouter from "./routes/order";
import userRouter from "./routes/user";


const app: Application = express();
app.use(express.json());
app.use(menuRouter);
app.use(orderRouter);
app.use(userRouter);


export default app;