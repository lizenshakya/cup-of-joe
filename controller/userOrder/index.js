const express = require('express');
const router = express.Router();

const userOrderController = require('./userOrder.controller');
const {verifyToken, authorizeAccess} = require('../../utils/middleware/verifyJwt')


router.post('/', verifyToken, userOrderController.createOrder);
router.get('/', verifyToken, authorizeAccess(['admin']), userOrderController.viewAll);
router.get('/:userId', verifyToken, userOrderController.viewAllIndividualOrder);
router.put('/:orderId', verifyToken, authorizeAccess(['admin']),userOrderController.updateOrder);

module.exports = router;