import express from "express";
import dotenv from "dotenv";
import productRouters from "./routers/productRouters.js";
import categoryRouters from "./routers/categoryRouters.js";


dotenv.config();

const app = express();
app.use(express.json());

app.use("/products", productRouters);
app.use("/categories", categoryRouters);

app.listen(process.env.PORT, () => {
    console.log(`SERVER BERJALAN DI http://localhost:${process.env.PORT}`);
});
