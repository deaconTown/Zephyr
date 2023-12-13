const Products = require('../models/products')
const products = new Products();

class ProductService{
    getAll = () =>{
        return products.getAllProducts();
    }
    
    createProduct = (product) =>{
        return products.createProduct(product);
    }

    getProduct = (productId) => {
        return products.getProduct(productId);
    }

    updateProduct = (product) => {
        products.updateProduct(product);
    }

    deleteProduct = (productId) => {
        return products.deleteProduct(productId);
    }

    getProductsByMerchant = (merchantId) => {
        return products.getProductsByMerchant(merchantId);
    }
} 

module.exports = ProductService;