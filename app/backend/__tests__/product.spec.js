const {describe, expect, test} = require('@jest/globals');

describe('Product Service', () => {

  test('should create new product', () => {
    expect.assertions(1);
  });

  test('should not recreate existing product', () => {
    expect.assertions(1);
  });

  test('should get all products', () => {
    expect.assertions(1);
  });

  test('should get product by id', () => {
    expect.assertions(1);
  });

  test('should increase product stock level when the same product is added', () => {
    expect.assertions(1);
  });

  test('should decrease product stock level when the a product is removed', () => {
    expect.assertions(1);
  });

  test('product stock level should not go below zero', () => {
    expect.assertions(1);
  });

  test('should get product by merchant id', () => {
    expect.assertions(1);
  });

});