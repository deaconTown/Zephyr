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
        return products.updateProduct(product);
    }

    deleteProduct = (productId) => {
        return products.deleteProduct(productId);
    }

    getProductsByMerchant = (merchantId) => {
        return products.getProductsByMerchant(merchantId);
    }

    deactivateProduct = (productId) => {
        return products.deactivateProduct(productId);
    }
} 

module.exports = ProductService;