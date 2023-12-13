const { describe, expect, test } = require('@jest/globals');
const UserService = require('../services/userService');
const User = require('../models/User');

describe('User Service', () => {
  let userService;
  beforeEach(() => {
    product = new User();
    userService = new UserService();
  });


  test('should create a new user', () => {
    const newUser = {
      name: "John Doe",
      email: "jd@email.com",
      password: "password123",
    }

    userService.createNewUser(newUser);

    result = userService.getAllUser();
    expect(result.length).toEqual(1);
  });

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