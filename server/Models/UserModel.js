const mongoose = require("mongoose");
const accessToken = require("../utils/accessToken");
const { hashPassword, comparePassword } = require("../utils/hashPassword");
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password") || this.isNew) {
      this.password = await hashPassword(this.password, 10);
    }
    next();
  } catch (error) {
    next(error);
  }
});
userSchema.methods.comparePassword = async function (password) {
  return await comparePassword(password, this.password);
};
userSchema.methods.signToken = function () {
  return accessToken(this._id, this.isAdmin);
};
const User = mongoose.models["User"] || mongoose.model("User", userSchema);

module.exports = User;
