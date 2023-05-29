const jwt = require("jsonwebtoken");

const { comparePassword } = require("../../utils/bycrypt");
const {
  NotFoundError,
  UnauthorizedRequestError,
} = require("../../utils/errors");
const { sendSuccessResponse } = require("../../utils/response");
const user = require("../../model/user");

const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const oldUser = await user.getOne({ query: { email } });
    if (!oldUser) throw new NotFoundError("User doesn't exist");
    const isPasswordCorrect = await comparePassword(password, oldUser.password);
    if (!isPasswordCorrect)
      throw new UnauthorizedRequestError("Invalid credentials");
    const token = jwt.sign(
      {
        email: oldUser.email,
        userId: oldUser.id,
        role: oldUser.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE_TIME,
      }
    );

    return sendSuccessResponse({
      res,
      data: {
        userInfo: {
          email: oldUser.email,
          userId: oldUser.id,
          role: oldUser.role,
        },
        token,
      },
      message: "Login Sucessful",
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  signIn,
};
