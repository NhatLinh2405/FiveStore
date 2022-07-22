const authRouter = require("express").Router();

const { register, login } = require("../controllers/auth.controller.js");

// đăng ký
authRouter.post("/register", register);
// đăng nhập
authRouter.post("/login", login);

module.exports = authRouter;
