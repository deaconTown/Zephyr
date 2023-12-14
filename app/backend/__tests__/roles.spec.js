const { describe, expect, test } = require('@jest/globals');
const RoleService = require('../services/roleService');


describe('Role Service', () => {
  let roleService;
  let userRoleService;
  let merchantRoleId;
  let customerRoleId;
  merchantRoleId = "1";
  customerRoleId = "2";

  beforeEach(async () => {

    // const module = await Test.createTestingModule({
    //   providers: [UserRoleService]
    // }).compile();

    userRoleService = new userRoleService();
    roleService = new RoleService();
  });


  test('should create a new role', () => {
    //arrange
    const newRole = {
      name: "Merchant",
      description: "This is the merchant role",
    }

    //act
    roleService.createNewRole(newRole);

    const result = roleService.getAllRoles();

    //assert
    expect(result.length).toEqual(1);
  });

  test('should get all roles', () => {
    const newRole1 = {
        name: "Merchant",
        description: "This is the merchant role",
      }

      const newRole2 = {
        name: "Customer",
        description: "This is the customer role",
      }

    roleService.createNewRole(newRole1);
    roleService.createNewRole(newRole1);

    const sut = roleService.getAllRoles();
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
      email: "jd2@email.com",
      password: "password123",
    }


    //act 
    const user1 = roleService.createNewUser(newUser);
    const user2 = roleService.createNewUser(newUser2);

    const sut = roleService.getUserById(user2.id);

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
      email: "jd2@email.com",
      password: "password123",
    }
    const newUser3 = {
      name: "Mary Doe",
      email: "jd3@email.com",
      password: "password123",
    }

    const user1 = roleService.createNewUser(newUser);
    const user2 = roleService.createNewUser(newUser2);
    const user3 = roleService.createNewUser(newUser3);

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

    const sut = roleService.getAllUsersByRoleId(merchantRoleId);
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
      email: "jd2@email.com",
      password: "password123",
    }
    const newUser3 = {
      name: "Mary Doe",
      email: "jd3@email.com",
      password: "password123",
    }

    const user1 = roleService.createNewUser(newUser);
    const user2 = roleService.createNewUser(newUser2);
    const user3 = roleService.createNewUser(newUser3);

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

    const sut = roleService.getAllUsersByRoleId(customerRoleId);
    const result = sut.length;
    expect(result).toEqual(3);
  });


  test('should delete a specific user', () => {
    const newUser = {
      name: "Frank Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = roleService.createNewUser(newUser);

    roleService.deleteUser(user1.id);
    const result = roleService.getAllUser();
    const actualResult = result[0].isDeleted;

    expect(actualResult).toEqual(true);
  });


  test('should set user as inActive', () => {
    const newUser = {
      name: "Frank Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = roleService.createNewUser(newUser);

    roleService.deactivateUser(user1.id);
    const result = roleService.getUserById(user1.id).isActive;

    expect(result).toEqual(false);
  });


  test('should set user as active', () => {
    const newUser = {
      name: "Frank Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = roleService.createNewUser(newUser);

    roleService.deactivateUser(user1.id);

    roleService.activateUser(user1.id);
    const result = roleService.getUserById(user1.id).isActive;

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
      email: "jd2@email.com",
      password: "password123",
    }
    const newUser3 = {
      name: "Mary Doe",
      email: "jd3@email.com",
      password: "password123",
    }

    const user1 = roleService.createNewUser(newUser);
    const user2 = roleService.createNewUser(newUser2);
    const user3 = roleService.createNewUser(newUser3);

    roleService.deactivateUser(user1.id);
    roleService.deactivateUser(user2.id);

    const sut = roleService.getActiveUsers();
    const result = sut.length;

    expect(result).toEqual(1);
  });


  test('should set user email as verified', () => {
    const newUser = {
      name: "Frank Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = roleService.createNewUser(newUser);

    roleService.verifyUserEmail(user1.id);

    const result = roleService.getUserById(user1.id).isEmailVerified;

    expect(result).toEqual(true);
  });

  test('should update the user name', () => {
    const oldUser = {
      name: "Frank Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = roleService.createNewUser(oldUser);

    const updatedUser = {
      id: user1.id,
      name: "Frank Doe Poe",
      email: "fdp@email.com",
      password: "password2023",
    }

    const updateUserResult = roleService.updateUser(updatedUser);

    expect(updateUserResult.name).toEqual("Frank Doe Poe");
  });

  test('should not update the user id', () => {
    const oldUser = {
      name: "Frank Doe",
      email: "jd@email.com",
      password: "password123",
    }

    const user1 = roleService.createNewUser(oldUser);

    const updatedUser = {
      id: user1.id,
      name: "Frank Doe Poe",
      email: "fdp@email.com",
      password: "password2023",
    }

    const updateUserResult = roleService.updateUser(updatedUser);

    expect(updateUserResult.id).toEqual(user1.id);
  });

  test('should not create multiple users with same email address', () => {
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

    const user1 = roleService.createNewUser(newUser);
    const user2 = roleService.createNewUser(newUser2);

    const users = roleService.getAllUser();

    const result = users.length;

    expect(result).toEqual(1);
  });

});