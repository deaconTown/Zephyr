const {describe, expect, test} = require('@jest/globals');

describe('Regisration Service', () => {

  test('should register new merchant', () => {
    expect.assertions(1);
  });

  test('should register new customer', () => {
    expect.assertions(1);
  });

  test('should not register with existing user email', () => {
    expect.assertions(1);
  });

});