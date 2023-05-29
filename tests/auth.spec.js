const jwt = require("jsonwebtoken");

const { signIn } = require("../controller/auth/auth.controller");
const user = require("../model/user");
const { comparePassword } = require("../utils/bycrypt");
const { sendSuccessResponse } = require("../utils/response");
const { NotFoundError, UnauthorizedRequestError } = require("../utils/errors");

jest.mock("../utils/bycrypt", () => ({
  hashedPassword: jest.fn((x) => "$2a$12$hash"),
  comparePassword: jest.fn((x) => true),
}));

jest.mock("../model/user");
jest.mock("../utils/response", () => ({
  sendSuccessResponse: jest.fn((x) => x),
}));

jest.mock("jsonwebtoken");
const request = {
  body: {
    password: "test",
    email: "check@gmail.com",
  },
};

const response = {
  status: jest.fn((x) => x),
  send: jest.fn((x) => x),
  next: jest.fn((x) => x),
};

describe("auth controller", () => {
  it("should should throw not found user if user is not found", async () => {
    user.getOne.mockResolvedValueOnce(undefined);
    await signIn(
      request,
      response,
      jest.fn((x) => x)
    );
    expect(() => {
      throw new NotFoundError("User doesn't exist");
    }).toThrow();
  });

  it("should should throw invalid credentials if password does not match", async () => {
    user.getOne.mockImplementationOnce(() => ({
      id: 1,
      password: "test12",
      email: "check@gmail.com",
    }));
    comparePassword.mockResolvedValueOnce(false);
    await signIn(
      request,
      response,
      jest.fn((x) => x)
    );
    expect(comparePassword).toHaveBeenCalled();
    expect(() => {
      throw new UnauthorizedRequestError("Invalid credentials");
    }).toThrow();
  });

  it("should pass the user", async () => {
    user.getOne.mockImplementationOnce(() => ({
      id: 1,
      password: "test",
      email: "check@gmail.com",
    }));
    jwt.sign.mockImplementationOnce(() => ({
      token: "token",
    }));
    await signIn(request, response);
    expect(comparePassword).toHaveBeenCalled();
    expect(sendSuccessResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Login Sucessful",
        res: response,
      })
    );
  });
});
