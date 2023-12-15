const {describe, expect, test} = require('@jest/globals');
const ProductService = require('../services/products');
const Products = require('../models/products');

describe('Product Service', () => {
  let product;
  let productService;
  let existingProducts;
  let newProduct;
  beforeEach(() => {
    product = new Products();
    productService = new ProductService();
  });

  test('should create new product', () => {
    var newProduct = {
      id: 5,
      merchantId: 2,
      name: 'Big Deal',
      unitCost: 1250,
      stockLevel: 100,
      imageUrl: '',
      description: '3 pieace fried chicken with fries and soda',
      isActive: true,
      isDeleted: false
    }
    productService.createProduct(newProduct);

    const result = productService.getAll();

    expect(result.length).toEqual(5);
  });

  test('should not recreate existing product', () => {    
    newProduct = {
      id: 6,
      merchantId: 2,
      name: 'Zinger Box',
      unitCost: 1700,
      stockLevel: 100,
      imageUrl: '',
      description: 'Zinger with one piece chicken with fries and soda',
      isActive: true,
      isDeleted: false
    }

    var productId = productService.createProduct(newProduct);  
    var exists = false;

    if(productId == 0){
      exists = true;
    }  

    expect(exists).toEqual(false);
  });

  test('should get all products', () => {
    var allProducts = productService.getAll();

    expect(allProducts.length).toEqual(6);
  });

  test('should get all active products', () => {
    var allProducts = productService.getAll();
    var allActiveProducts = allProducts.filter(prod => prod.isActive === true);
    expect(allActiveProducts.length).toEqual(6);
  });

  test('should get product by id', () => {
    var product = productService.getProduct(2);
    expect(product.id).toEqual(2);    
  });

  test('should increase product stock level when the same product is added', () => {
    newProduct = {
      "id": 2,
      "merchantId": 1,
      "name": "Just Nuff",
      "unitCost": 900,
      "stockLevel": 10,
      "imageUrl": "",
      "description": "Festival with Jerk Chicken",
      "isActive": true,
      "isDeleted": false
   }
    var productId = productService.createProduct(newProduct);
    var stockLevelIncreased = false;

    if(productId == 0){
      stockLevelIncreased = true;
    }

    expect(stockLevelIncreased).toEqual(true);
  });

  test('product stock level should not go below zero', () => {
    newProduct = {
      "id": 2,
      "merchantId": 1,
      "name": "Just Nuff",
      "unitCost": 900,
      "stockLevel": -2,
      "imageUrl": "",
      "description": "Festival with Jerk Chicken",
      "isActive": true,
      "isDeleted": false
   }

    let productId = productService.updateProduct(newProduct);
    let product = productService.getProduct(productId);
    let isUpdated = false;

    if(product.stockLevel <= 0){
      isUpdated = true;
    }

    expect(isUpdated).toEqual(true);

  });

  test('should get all products by merchant id', () => {
    let products = productService.getProductsByMerchant(2); 
    let isFound = false;

    if(products.length == 3){
      isFound = true;
    }
     
    expect(isFound).toEqual(true);
  });

  test('should delete a specific product', () => {    
    let isDeleted = false;
    let productDeletedId = productService.deleteProduct(2);

    if(productDeletedId == 2){
      isDeleted = true;
    }

    expect(isDeleted).toEqual(true);
  });

});