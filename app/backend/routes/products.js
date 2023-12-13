var express = require('express');
var router = express.Router();
const products = require('../services/products')

router.get('/getall', function(req, res, next) {
    // const p = {
    //     "id": 1,
    //     "merchantId": 1,
    //     "name": "Satisfaction",
    //     "unitCost": 1200,
    //     "stockLevel": 100,
    //     "imageUrl": "",
    //     "description": "Rice and Peas with Jerk Chicken",
    //     "isActive": true,
    //     "isDeleted": false
    // }

    // products.createProduct(p);

  res.send(products.getAll());
});

router.post('/createproduct', function(req, res, next){
    products.createXroduct(req.body);
    res.send(products.getAll());
})

module.exports = router;
