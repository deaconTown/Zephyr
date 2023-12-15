let express = require('express');
const OrderService = require('../services/orderService');
let router = express.Router();

const orderService = new OrderService();

router.post('/create',async function (req, res, next) {
    const newOrder = req.body;
    let status = 400;
    const createdUser = orderService.createOrder(newOrder);
    if(createdUser != null)
        status = 201
    res.status(status).send(createdUser);
  });

module.exports = router;