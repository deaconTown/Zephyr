const {describe, expect, test, jest} = require('@jest/globals');

describe('Order Service', () => {

    test('should create new order', () => {
        expect.assertions(1);
      });

      test('should get all orders', () => {
        jest.spyOn
        expect.assertions(1);
      });

      test('should get all orders by merchant id', () => {
        expect.assertions(1);
      });

      test('should get all orders by customer id', () => {
        expect.assertions(1);
      });

      test('should get all products in an order', () => {
        expect.assertions(1);
      });
    
      test('should not create order on product with stock level zero', () => {
        expect.assertions(1);
      });

      test('should delete a specific order', () => {
        expect.assertions(1);
      });    
      
      test('should get all orders by specific status', () => {
        expect.assertions(1);
      });

});