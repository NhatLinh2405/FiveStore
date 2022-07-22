const bcrypt = require("bcrypt");

const saltOrRounds = process.env.SALT_ROUNDS || 10;

const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltOrRounds);
};

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
module.exports = {
  hashPassword,
  comparePassword,
};
