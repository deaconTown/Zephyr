const { describe, expect, test } = require('@jest/globals');
const UserRoleService = require('../services/userRoleService');

describe('UserRole Service', () => {
  let userRoleService;
  let merchantRoleId;
  let customerRoleId;

  beforeEach(() => {
    userRoleService = new UserRoleService();
    merchantRoleId = "1";
    customerRoleId = "2";
  })

  test('should create a new user role', () => {
    //arrange
    const newUserRole = {
      roleId: merchantRoleId,
      userId: "41"
    }

    //act
    const sut = userRoleService.createNewUserRole(newUserRole.roleId, newUserRole.userId);

    //assert
    expect(sut.userId).toEqual("41");
  });

  test('should create a new user role with merchant role id', () => {
    //arrange
    const newUserRole = {
      roleId: merchantRoleId,
      userId: "41"
    }

    //act
    const sut = userRoleService.createNewUserRole(newUserRole.roleId, newUserRole.userId);

    //assert
    expect(sut.roleId).toEqual("1");
  });

  test('should create a new user role with customer customer id', () => {
    //arrange
    const newUserRole = {
      roleId: customerRoleId,
      userId: "41"
    }

    //act
    const sut = userRoleService.createNewUserRole(newUserRole.roleId, newUserRole.userId);

    //assert
    expect(sut.roleId).toEqual("2");
  });

  test('should get all user roles', () => {
    //arrange
    const newUserRole = {
      roleId: customerRoleId,
      userId: "41"
    }
    const newUserRole2 = {
      roleId: customerRoleId,
      userId: "51"
    }

    //act
    userRoleService.createNewUserRole(newUserRole.roleId, newUserRole.userId);
   userRoleService.createNewUserRole(newUserRole2.roleId, newUserRole2.userId);


    const sut = userRoleService.getAllUserRoles();

    const result = sut.length;

    //assert
    expect(result).toEqual(3);
  });

  test('should get all user roles of type merchant', () => {
    //arrange
    const newUserRole = {
      roleId: merchantRoleId,
      userId: "41"
    }
    const newUserRole2 = {
      roleId: merchantRoleId,
      userId: "51"
    }
    const newUserRole3 = {
      roleId: customerRoleId,
      userId: "61"
    }

    //act
    userRoleService.createNewUserRole(newUserRole.roleId, newUserRole.userId);
   userRoleService.createNewUserRole(newUserRole2.roleId, newUserRole2.userId);
   userRoleService.createNewUserRole(newUserRole3.roleId, newUserRole3.userId);



   const sut = userRoleService.getUserRolesByRoleId(merchantRoleId);

   const result = sut.length;

   //assert
   expect(result).toEqual(3);
  });

  test('should get all user roles of type customer', () => {
    //arrange
    const newUserRole = {
      roleId: merchantRoleId,
      userId: "41"
    }
    const newUserRole2 = {
      roleId: merchantRoleId,
      userId: "51"
    }
    const newUserRole3 = {
      roleId: customerRoleId,
      userId: "61"
    }

    //act
    userRoleService.createNewUserRole(newUserRole.roleId, newUserRole.userId);
   userRoleService.createNewUserRole(newUserRole2.roleId, newUserRole2.userId);
   userRoleService.createNewUserRole(newUserRole3.roleId, newUserRole3.userId);


    const sut = userRoleService.getUserRolesByRoleId(customerRoleId);

    const result = sut.length;

    //assert
    expect(result).toEqual(1);
  });

});