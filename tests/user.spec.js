const { create } = require("../controller/user/user.controller");
const user = require("../model/user");
const { hashedPassword } = require("../utils/bycrypt");
const { sendSuccessResponse } = require("../utils/response");

jest.mock("../utils/bycrypt", () => ({
  hashedPassword: jest.fn((x) => "$2a$12$hash"),
}));
jest.mock("../model/user");

jest.mock("../utils/response", () => ({
  sendSuccessResponse: jest.fn((x) => x),
}));

const request = {
  body: {
    name: "Check",
    address: "check",
    phoneNumber: 1213,
    password: "test",
    role: "admin",
    email: "check@gmail.com",
  },
};

const response = {
  status: jest.fn((x) => x),
  send: jest.fn((x) => x),
  next: jest.fn((x) => x),
};

describe("user controller", () => {
  it("should create user", async () => {
    user.post.mockResolvedValueOnce({
      name: "Test",
      address: "test",
      phoneNumber: 1213,
      password: "test",
      role: "admin",
      email: "test@gmail.com",
    });
    await create(request, response, jest.fn(x => x));
    expect(hashedPassword).toHaveBeenCalledWith("test");
    expect(user.post).toHaveBeenCalledWith({
      data: {
        name: "Check",
        address: "check",
        phoneNumber: 1213,
        password: "$2a$12$hash",
        role: "admin",
        email: "check@gmail.com",
      },
    });
    expect(sendSuccessResponse).toHaveBeenCalledWith({
      res: response,
      message: "User Created Successfully",
    });
  });
});
