const {describe, expect, test} = require('@jest/globals');
const ProductService = require('../services/products');
const Products = require('../models/products');

describe('Product Service', () => {
  let product;
  let productService;
  beforeEach(() => {
    product = new Products();
    productService = new ProductService();
  });

  test('should create new product', () => {
    let newProduct = {
      id: 1,
      merchantId: 1,
      name: 'Satisfaction',
      unitCost: 1200,
      stockLevel: 100,
      imageUrl: '',
      description: 'Rice and Peas with Jerk Chicken',
      isActive: true,
      isDeleted: false
  }

  productService.createProduct(newProduct);

  const result = productService.getAll();

  expect(result.length).toEqual(3);
  });

  test('should not recreate existing product', () => {
    expect.assertions(1);
  });

  test('should get all products', () => {
    expect.assertions(1);
  });

  test('should get all active products', () => {
    expect.assertions(1);
  });

  test('should get product by id', () => {
    expect.assertions(1);
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