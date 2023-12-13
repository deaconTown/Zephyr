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
    //arrange
    const newUser = {
      name: "John Doe",
      email: "jd@email.com",
      password: "password123",
    }

    //act
    userService.createNewUser(newUser);

    const result = userService.getAllUser();

    //assert
    expect(result.length).toEqual(1);
  });

  test('should get all users', () => {
    const newUser = {
      name: "John Doe",
      email: "jd@email.com",
      password: "password123",
    }
    const newUser2 = {
      name: "Jane Doe",
      email: "jd@email.com",
      password: "password123",
    }

    userService.createNewUser(newUser);
    userService.createNewUser(newUser2);

    const sut = userService.getAllUser();
    const result = sut.length;
    expect(result).toEqual(2);
  });

  test('should get a user by id', () => {
    //arrange

    const newUser = {
      id: "1",
      name: "John Doe",
      email: "jd@email.com",
      password: "password123",
    }
    const newUser2 = {
      id: "2",
      name: "Jane Doe",
      email: "jd@email.com",
      password: "password123",
    }


    //act 
    userService.createNewUser(newUser);
    userService.createNewUser(newUser2);

    const sut = userService.getUserById("2");

    const result = sut.name;

    //assert
    expect(result).toEqual("Jane Doe");
  });

  test('should delete a specific user', () => {
    expect.assertions(1);
  });

});