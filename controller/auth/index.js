const express = require('express');
const router = express.Router();

const authController = require('./auth.controller');


router.post('/signIn', authController.signIn);
module.exports = router;