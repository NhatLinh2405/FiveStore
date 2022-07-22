const User = require("../Models/UserModel");
const { userResponse } = require("../utils/userResponse");

exports.register = async (req, res) => {
  try {
    const saveUser = await User.create(req.body);
    res.status(201).json({
      message: "Create user successfully",
      data: {
        user: userResponse(saveUser),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }
    if (!(await user.comparePassword(password))) {
      throw new Error("Password is incorrect");
    }
    const token = user.signToken();
    return res.status(200).json({
      message: "Login successfully",
      data: {
        token,
        user: userResponse(user),
      },
    });
  } catch (error) {
    res.status(401).json({ message: error.message || error });
  }
};
