const Products = require('../models/products')
const products = new Products();

class ProductService{
    getAll = () =>{
        return products.getAllProducts();
    }
    
    createProduct = (product) =>{
        products.createProduct(product);
    }

    getProduct = (productId) => {
        return products.getProduct(productId);
    }
} 

module.exports = ProductService;