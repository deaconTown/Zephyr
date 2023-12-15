let express = require('express');
let router = express.Router();
const ProductService = require('../services/products')
const productService = new ProductService();

router.get('/getall', async function(req, res, next) {
    let prods = await productService.getAll()
  res.send(prods);
});

router.post('/createproduct', async function(req, res, next){
    const prod = await productService.createProduct(req.body);
    res.send(prod);
    //res.send(productService.getAll());
});

router.get('/:productId', async function(req, res, next){
    let prod = await productService.getProduct(req.params.productId)
    res.send(prod);
});

router.put('/:productId', async function(req, res, next){
    let prod = await productService.updateProduct(req.params.productId,req.body);
    //productService.updateProduct(req.body);
    res.send(prod);
    //res.send(productService.getAll());
});

router.delete('/:productId', async function(req, res, next){
    let prod = await productService.deleteProduct(req.params.productId);
    res.send(prod);
    //res.send(productService.getAll());
});

router.get('/merchant/:merchantId', async function(req, res, next){   
    let prod = await productService.getProductsByMerchant(req.params.merchantId);
    res.send(prod);
    //res.send(productService.getProductsByMerchant(req.params.merchantId));
});

router.patch('/deactivate/:productId', async function(req, res, next){    
    let prod = await productService.deactivateProduct(req.params.productId);
    res.send(prod);
});

module.exports = router;
