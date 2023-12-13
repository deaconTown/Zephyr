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

    newProduct = {
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
  });

  test('should create new product', () => {
    productService.createProduct(newProduct);

    const result = productService.getAll();

    expect(result.length).toEqual(5);
  });

  test('should not recreate existing product', () => {    
    productService.createProduct(newProduct);
    exists = false;

    if(productService.getAll()[0].id == newProduct.id){
      exists = true;
    }

    expect(exists).toEqual(false);
  });

  test('should get all products', () => {
    var allProducts = productService.getAll();

    expect(allProducts.length).toEqual(5);
  });

  test('should get all active products', () => {
    var allProducts = productService.getAll();
    var allActiveProducts = allProducts.filter(prod => prod.isActive === true);
    expect(allActiveProducts.length).toEqual(4);
  });

  test('should get product by id', () => {
    var product = productService.getProduct(1);
    expect(product.id).toEqual(1);    
  });

  test('should increase product stock level when the same product is added', () => {
    expect.assertions(1);
  });

  test('should decrease product stock level when the product is removed', () => {
    expect.assertions(1);
  });

  test('product stock level should not go below zero', () => {
    expect.assertions(1);
  });

  test('should get all products by merchant id', () => {
    expect.assertions(1);
  });

  test('should delete a specific product', () => {
    expect.assertions(1);
  });

});