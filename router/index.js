const express = require('express');
const router = express.Router();

const authController = require('../controller/auth');
const userController = require('../controller/user');
const userOrderController = require('../controller/userOrder');

router.use('/auth', authController);
router.use('/user', userController);
router.use('/userOrder', userOrderController);

module.exports = router;