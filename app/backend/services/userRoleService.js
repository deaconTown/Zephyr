const UserRole = require("../models/userRole");

class UserRoleService {

    userRole;

    constructor() {
        this.userRole = new UserRole();
    }


    createNewUserRole = (roleId, userId) => {
        const newUserRole = this.userRole.create(roleId, userId);

        console.log('this is being called')

        return newUserRole;
    }

    getAllUserRoles = () => {
        return this.userRole.getAll();
    }

    getUserRoleById = (id) => {
        return this.userRole.getUserRoleById(id);
    }

    getUserRolesByRoleId = (id) => {
        return this.userRole.getUserRolesByRoleId(id);
    }
}

module.exports = UserRoleService;