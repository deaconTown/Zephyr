const prisma = require('../data/prismaClient');
const Products = require('../models/products')
const products = new Products();

class ProductService{
    getAll = async () =>{
        let prods = await prisma.product.findMany()
        return prods;
    }
    
    createProduct = async (product) =>{
        const prod = await prisma.product.create({
            data:product
        });
        return prod;
        //return products.createProduct(product);
    }

    getProduct = async (productId) => {
        let prod = await prisma.product.findUnique({
            where: {
                id: parseInt(productId)         
              }
        });
        return prod;
        //return products.getProduct(productId);
    }

    updateProduct = async (productId,product) => {
        let prod = await prisma.product.update({
            where: {
                id: parseInt(productId)
            },
            data: { ...product }
        })
        return prod;
        //return products.updateProduct(product);
    }

    deleteProduct = async (productId) => {
        let product = await this.getProduct(productId);
        product.isDeleted = true;
        let prod = await prisma.product.update({
            where: {
                id: parseInt(productId)
            },
            data: {                 
                "isDeleted": true
             }
        })
        return prod;
        //return products.deleteProduct(productId);
    }

    getProductsByMerchant = async (merchantId) => {
        let prods = await prisma.product.findMany({
            where: {
                merchantId: parseInt(merchantId),
                isDeleted: false,
                isActive: true
            }
        })
        return prods;
        //return products.getProductsByMerchant(merchantId);
    }

    deactivateProduct = async (productId) => {
        let prod = await prisma.product.update({
            where: {
                id: parseInt(productId)
            },
            data: { 
                "isActive": false
             }
        })
        return prod;
        //return products.deactivateProduct(productId);
    }
} 

module.exports = ProductService;