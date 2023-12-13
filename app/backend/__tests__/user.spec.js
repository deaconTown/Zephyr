const { describe, expect, test } = require('@jest/globals');
const UserService = require('../services/userService');
const User = require('../models/User');
const UserRoleService = require('../services/userRoleService');

describe('User Service', () => {
  let userService;
  let userRoleService;
  let merchantRoleId;
  let customerRoleId;
  merchantRoleId = "1";
  customerRoleId = "2";
  
  beforeEach(async() => {

    // const module = await Test.createTestingModule({
    //   providers: [UserRoleService]
    // }).compile();

    user = new User();
    userRoleService = new UserRoleService();
    userService = new UserService(userRoleService);
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
    expect(result.length).toEqual(2);
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
    expect(result).toEqual(3);
  });

  test('should get a user by id', () => {
    //arrange

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


    //act 
    const user1 = userService.createNewUser(newUser);
    const user2 = userService.createNewUser(newUser2);

    const sut = userService.getUserById(user2.id);

    const result = sut.name;

    //assert
    expect(result).toEqual("Jane Doe");
  });

  test('should get all user of type merchant', () => {
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
    const newUser3 = {
      name: "Mary Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = userService.createNewUser(newUser);
    const user2 =  userService.createNewUser(newUser2);
    const user3 =  userService.createNewUser(newUser3);

    console.log("user1",user1)

    const newUserRole1 = {
      roleId: merchantRoleId,
      userId: user1.id
    }

    const newUserRole2 = {
      roleId: merchantRoleId,
      userId: user2.id
    }

    // const newUserRole3 = {
    //   roleId: customerRoleId,
    //   userId: user3.id
    // }

    const userRoles = [
      newUserRole1,
      newUserRole2
    ]


    jest.spyOn(userRoleService, 'getUserRolesByRoleId').mockImplementation((merchantRoleId) => userRoles);

    const sut = userService.getAllUsersByRoleId(merchantRoleId);
    const result = sut.length;
    expect(result).toEqual(2);
  });

  test('should get all user of type customer', () => {
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
    const newUser3 = {
      name: "Mary Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = userService.createNewUser(newUser);
    const user2 =  userService.createNewUser(newUser2);
    const user3 =  userService.createNewUser(newUser3);

    console.log("user1",user1)

    const newUserRole1 = {
      roleId: customerRoleId,
      userId: user1.id
    }

    const newUserRole2 = {
      roleId: customerRoleId,
      userId: user2.id
    }

    const newUserRole3 = {
      roleId: customerRoleId,
      userId: user3.id
    }

    const userRoles = [
      newUserRole1,
      newUserRole2,
      newUserRole3,
      
    ]

    jest.spyOn(userRoleService, 'getUserRolesByRoleId').mockImplementation((customerRoleId) => userRoles);

    const sut = userService.getAllUsersByRoleId(customerRoleId);
    const result = sut.length;
    expect(result).toEqual(3);
  });


  test('should delete a specific user', () => {
    expect.assertions(1);
  });


});