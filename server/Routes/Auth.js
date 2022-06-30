import express from "express";
import User from "../Models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

import accessToken from "../utils/accessToken.js";
const authRouter = express.Router();

// đăng ký
authRouter.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,

        // mã hóa password
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SECRET
        ).toString(),
    });
    try {
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

// đăng nhập
authRouter.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
        });

        !user && res.status(401).json("Wrong User Name");

        // giải mã password
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SECRET
        );

        const originPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        originPassword !== req.body.password &&
            res.status(401).json("Wrong password!");

        const { password, ...others } = user._doc;
        res.status(200).json({
            ...others,
            token: accessToken(user._id, user.admin),
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

export default authRouter;
