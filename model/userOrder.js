const userOrder = require("../schemas/userOrder");
const helperFunc = require("./helper");

const query = helperFunc(userOrder);

const getAllOrders = async () => {
  return userOrder.find().populate("userId");
};

module.exports = {
  get: query.find,
  getOne: query.findOne,
  post: query.create,
  postMany: query.insertMany,
  delete: query.deleteOne,
  deleteMany: query.deleteMany,
  put: query.update,
  getAllOrders: getAllOrders,
};
