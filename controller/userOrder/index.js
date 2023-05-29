const express = require('express');
const router = express.Router();

const userOrderController = require('./userOrder.controller');


router.post('/', userOrderController.createOrder);
router.get('/', userOrderController.viewAll);
router.get('/:userId', userOrderController.viewAllIndividualOrder);
router.put('/:orderId', userOrderController.updateOrder);

module.exports = router;