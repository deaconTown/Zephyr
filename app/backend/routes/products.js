var express = require('express');
var router = express.Router();
const ProductService = require('../services/products')
const productservice = new ProductService();

router.get('/getall', function(req, res, next) {
  res.send(productservice.getAll());
});

router.post('/createproduct', function(req, res, next){
    productservice.createProduct(req.body);
    res.send(productservice.getAll());
})

router.get('/:productId', function(req, res, next){
    res.send(productservice.getProduct(req.params.productId));
})

module.exports = router;
