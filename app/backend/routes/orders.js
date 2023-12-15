let express = require('express');
const OrderService = require('../services/orderService');
let router = express.Router();

const orderService = new OrderService();

router.post('/', async function (req, res, next) {
  const newOrder = req.body;
  let status = 400;
  const createdOrder = await orderService.createOrder(newOrder);
  if (createdOrder != null)
    status = 201
  res.status(status).send(createdOrder);
});

router.get('/', async function (req, res, next) {
  let status = 400;
  const fetchedOrders = await orderService.fetchOrders();
  if (fetchedOrders != null)
    status = 200
  res.status(status).send(fetchedOrders);
});
router.get('/customer/:id', async function (req, res, next) {
  const customerId = req.params.id;
  let status = 400;
  const fetchedOrders = await orderService.fetchOrdersByCustomerId(customerId);
  if (fetchedOrders != null)
    status = 200
  res.status(status).send(fetchedOrders);
});
router.get('/merchant/:id', async function (req, res, next) {
  const customerId = req.params.id;
  let status = 400;
  const fetchedOrders = await orderService.fetchOrdersByCustomerId(customerId);
  if (fetchedOrders != null)
    status = 200
  res.status(status).send(fetchedOrders);
});
router.put('/:id', async function (req, res, next) {
  const orderId = req.params.id;
  let status = 400;
  const deletedOrder = await orderService.deleteOrderById(orderId);
  if (deletedOrder != null)
    status = 200
  res.status(status).send(deletedOrder);
});

module.exports = router;