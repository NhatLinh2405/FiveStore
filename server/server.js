import express from "express";
import dotenv from "dotenv";

import connectDatabase from "./Config/MongoDB.js";

import userRouter from "./Routes/User.js";
import authRouter from "./Routes/Auth.js";
import orderRouter from "./Routes/Order.js";
import cartRouter from "./Routes/Cart.js";
import productRouter from "./Routes/Product.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// api
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/carts", cartRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000");
});
