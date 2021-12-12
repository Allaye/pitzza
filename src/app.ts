import express, {Application} from "express";
import menuRouter from "./routes/menu";
import orderRouter from "./routes/order";
require("./db/mongoose");


const app: Application = express();
app.use(express.json());
app.use(menuRouter);
app.use(orderRouter);

const PORT: number = Number(process.env.PORT) || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});