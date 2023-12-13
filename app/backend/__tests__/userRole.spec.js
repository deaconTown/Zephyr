const {describe, expect, test} = require('@jest/globals');

describe('UserRole Service', () => {

  test('should set user as a merchant', () => {
    expect.assertions(1);
  });
  
  test('should set user as a customer', () => {
    expect.assertions(1);
  });

});