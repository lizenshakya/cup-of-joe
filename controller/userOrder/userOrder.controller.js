
const userOrder = require('../../model/userOrder');
const { sendSuccessResponse } = require("../../utils/response");

const viewAllIndividualOrder = async (req, res) => {
    try{
      const { userId } = req.params;
      const userOrders = await userOrder.get({ query: { userId } });
      return sendSuccessResponse({ res, data: userOrders })
    } catch (err) {
      return next(err)
    }
};

const viewAll = async (req, res, next) => {
    try{
      const userOrders = await userOrder.getAllOrders();
      return sendSuccessResponse({ res, data: userOrders })
    } catch (err) {
      return next(err)
    }
};

const createOrder = async (req, res, next) => {
    try{
      const { userId, userOrderList } = req.body;
      await userOrder.post({
        data: { userId, userOrderList }
      });
      return sendSuccessResponse({ res, message: "Order created successfully" })
    } catch (err) {
      return next(err)
    }
};

const updateOrder = async (req, res, next) => {
    try{
      const { orderId } = req.params;
      const { status } = req.body;
      await userOrder.put({ query: { _id: orderId }, data: { status } });
      return sendSuccessResponse({ res, message: "Order updated successfully" })

    } catch (err) {
      return next(err)
    }
};

module.exports = {
    viewAllIndividualOrder,
    viewAll,
    createOrder,
    updateOrder
}