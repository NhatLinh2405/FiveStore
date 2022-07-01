const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDatabase = require("./Config/MongoDB.js");

const userRouter = require("./Routes/UserRoute.js");
const authRouter = require("./Routes/AuthRoute.js");
const productRouter = require("./Routes/ProductRoute.js");
const cartRouter = require("./Routes/CartRoute.js");
const orderRouter = require("./Routes/OrderRoute.js");
const stripeRouter = require("./Routes/Stripe.js");
const ImportData = require("./ImportData");

const app = express();

app.use(cors());

dotenv.config();
connectDatabase();

app.use(express.json());

// api
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/carts", cartRouter);
app.use("/api/checkout", stripeRouter);

//imort data
app.use("/api/import", ImportData);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000");
});
