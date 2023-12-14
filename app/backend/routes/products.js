let express = require('express');
let router = express.Router();
const ProductService = require('../services/products')
const productService = new ProductService();

router.get('/getall', function(req, res, next) {
  res.send(productService.getAll());
});

router.post('/createproduct', function(req, res, next){
    productService.createProduct(req.body);
    res.send(productService.getAll());
});

router.get('/:productId', function(req, res, next){
    res.send(productService.getProduct(req.params.productId));
});

router.put('/updateproduct', function(req, res, next){
    productService.updateProduct(req.body);
    res.send(productService.getAll());
});

router.delete('/:productId', function(req, res, next){
    productService.deleteProduct(req.params.productId);
    res.send(productService.getAll());
});

router.get('/merchant/:merchantId', function(req, res, next){    
    res.send(productService.getProductsByMerchant(req.params.merchantId));
});

router.patch('/deactivate/:productId', function(req, res, next){    
    res.send(productService.deactivateProduct(req.params.productId));
});

module.exports = router;
