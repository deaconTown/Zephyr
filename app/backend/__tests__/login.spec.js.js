const {describe, expect, test} = require('@jest/globals');

describe('Login Service', () => {

  test('should login user valid', () => {
    expect.assertions(1);
  });

  test('should not login invalid user', () => {
    expect.assertions(1);
  });

});