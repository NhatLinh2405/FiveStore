const express = require("express");

const Cart = require("../Models/CartModel.js");

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../utils/verifyToken.js");

const cartRouter = express.Router();

// create
cartRouter.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const saveCart = await newCart.save();
        res.status(200).json(saveCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get
cartRouter.get(
    "/find/:userId",
    verifyTokenAndAuthorization,
    async (req, res) => {
        try {
            const cart = await Cart.findOne({ userId: req.params.userId });
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json(error);
        }
    }
);

// get all cart for admin
cartRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update
cartRouter.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );

        res.status(200).json(updateCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete
cartRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted!");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = cartRouter;
