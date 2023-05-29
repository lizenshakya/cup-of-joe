const bcrypt = require("bcryptjs");

const comparePassword = async (password, oldPassword) => {
  return bcrypt.compare(password, oldPassword);
};

const hashedPassword = async (password) => {
  return bcrypt.hash(password, parseInt(process.env.SALT_ROUND));
};

module.exports = {
    comparePassword,
    hashedPassword
};
