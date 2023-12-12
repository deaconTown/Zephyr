const {describe, expect, test} = require('@jest/globals');

describe('User Service', () => {

  test('should get all active mechants', () => {
    expect.assertions(1);
  });

  test('should get all active customers', () => {
    expect.assertions(1);
  });

  test('should get a merchant by id', () => {
    expect.assertions(1);
  });

  test('should get a customer by id', () => {
    expect.assertions(1);
  });

  test('should delete a specific user', () => {
    expect.assertions(1);
  });

});