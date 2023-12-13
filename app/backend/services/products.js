const Products = require('../models/products')
const products = new Products();

class ProductService{
    getAll = () =>{
        return products.getAllProducts();
    }
    
    createProduct = (product) =>{
        products.createProduct(product);
    }
} 


// app.get('/api/productService/getAllProducts', (req, res) => {
//     res.json(products.getAllProducts());
// });

module.exports = ProductService;