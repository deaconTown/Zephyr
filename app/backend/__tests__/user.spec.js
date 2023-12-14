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
    const newUser = {
      name: "Frank Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = userService.createNewUser(newUser);

    userService.deleteUser(user1.id);
    const result = userService.getAllUser();
    const actualResult = result[0].isDeleted;

    expect(actualResult).toEqual(true);
  });

  
  test('should set user as inActive', () => {
    const newUser = {
      name: "Frank Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = userService.createNewUser(newUser);

    userService.deactivateUser(user1.id);
    const result = userService.getUserById(user1.id).isActive;

    expect(result).toEqual(false);
  });
  
  
  test('should set user as active', () => {
    const newUser = {
      name: "Frank Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = userService.createNewUser(newUser);

    userService.deactivateUser(user1.id);

    userService.activateUser(user1.id);
    const result = userService.getUserById(user1.id).isActive;

    expect(result).toEqual(true);
  });
  
  test('should get all active users only', () => {
    const newUser = {
      name: "Frank Doe",
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

    userService.deactivateUser(user1.id);
    userService.deactivateUser(user2.id);

    const sut = userService.getActiveUsers();
    const result = sut.length;

    expect(result).toEqual(1);
  });

    
  test('should set user email as verified', () => {
    const newUser = {
      name: "Frank Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = userService.createNewUser(newUser);

    console.log(user1)

    userService.verifyUserEmail(user1.id);

    const result = userService.getUserById(user1.id).isEmailVerified;

    expect(result).toEqual(true);
  });

});