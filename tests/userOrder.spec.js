const {
  viewAllIndividualOrder,
  viewAll,
  createOrder,
  updateOrder,
} = require("../controller/userOrder/userOrder.controller");
const userOrder = require("../model/userOrder");
const { sendSuccessResponse } = require("../utils/response");

jest.mock("../utils/bycrypt", () => ({
  hashedPassword: jest.fn((x) => "$2a$12$hash"),
}));
jest.mock("../model/userOrder");

jest.mock("../utils/response", () => ({
  sendSuccessResponse: jest.fn((x) => x),
}));

const createOrderRequest = {
  body: {
    userId: "647440b9550c04740da9293e",
    userOrderList: [
      {
        productName: "fake",
        productType: "latte",
        quantity: 2,
        additionalInfo: "Need coffee",
      },
    ],
  },
};

const individualOrderRequest = {
  params: {
    userId: "647440b9550c04740da9293e",
  },
};

const updateOrderRequest = {
  params: {
    orderId: "647440b9550c04740da9293e",
  },
  body: {
    status: "done",
  },
};

const request = {};

const response = {
  status: jest.fn((x) => x),
  send: jest.fn((x) => x),
  next: jest.fn((x) => x),
};

describe("user order controller", () => {
  it("should create user order", async () => {
    await createOrder(createOrderRequest, response);
    expect(userOrder.post).toHaveBeenCalledWith({
      data: {
        userId: "647440b9550c04740da9293e",
        userOrderList: [
          {
            productName: "fake",
            productType: "latte",
            quantity: 2,
            additionalInfo: "Need coffee",
          },
        ],
      },
    });
    expect(sendSuccessResponse).toHaveBeenCalledWith({
      res: response,
      message: "Order created successfully",
    });
  });

  it("should view all user order", async () => {
    userOrder.getAllOrders.mockImplementationOnce(() => []);
    await viewAll(request, response);
    expect(userOrder.getAllOrders).toHaveBeenCalledWith();
    expect(sendSuccessResponse).toHaveBeenCalledWith({
      res: response,
      data: [],
    });
  });

  it("should view all individual orders", async () => {
    userOrder.get.mockImplementationOnce(() => []);
    await viewAllIndividualOrder(individualOrderRequest, response);
    expect(userOrder.get).toHaveBeenCalledWith({
      query: { userId: "647440b9550c04740da9293e" },
    });
    expect(sendSuccessResponse).toHaveBeenCalledWith({
      res: response,
      data: [],
    });
  });

  it("should view update individual orders", async () => {
    userOrder.put.mockImplementationOnce(() => []);
    await updateOrder(updateOrderRequest, response);
    expect(userOrder.put).toHaveBeenCalledWith({
      query: { _id: "647440b9550c04740da9293e" },
      data: { status: "done" },
    });
    expect(sendSuccessResponse).toHaveBeenCalledWith({
      res: response,
      message: "Order updated successfully",
    });
  });
});
