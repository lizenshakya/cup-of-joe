const user = require("../../model/user");
const { sendSuccessResponse } = require("../../utils/response");
const { hashedPassword } = require("../../utils/bycrypt");

const create = async (req, res, next) => {
  try {
    const { name, address, phoneNumber, role, password, email } = req.body;
    const hashPassword = await hashedPassword(password);
    const newUser = await user.post({
      data: {
        name,
        address,
        phoneNumber,
        role,
        password: hashPassword,
        email
      },
    });

    return sendSuccessResponse({
      res,
      message: "User Created Successfully",
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  create,
};
