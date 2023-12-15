let express = require('express');
const OrderService = require('../services/orderService');
let router = express.Router();

const orderService = new OrderService();

router.post('/create', function (req, res, next) {
    const newOrder = req.body;
    const createdUser = orderService.createOrder(newOrder);
    res.send(createdUser);
  });

module.exports = router;