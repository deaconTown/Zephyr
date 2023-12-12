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

  test('should not login invalid user', () => {
    expect.assertions(1);
  });

});