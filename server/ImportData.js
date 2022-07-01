const express = require("express");
const data = require("./data/data.js");

const Product = require("./Models/ProductModel.js");

const asyncHandler = require("express-async-handler");

const ImportData = express.Router();

// post user lên mongodb
// ImportData.post(
//     "/user",
//     asyncHandler(async (req, res) => {
//         await User.remove({});
//         const importUser = await User.insertMany(users);
//         res.send({ importUser });
//     })
// );

// post products lên mongodb
ImportData.post(
    "/products",
    asyncHandler(async (req, res) => {
        await Product.remove({});
        const importProduct = await Product.insertMany(data.popularProducts);
        res.send({ importProduct });
    })
);

module.exports = ImportData;
