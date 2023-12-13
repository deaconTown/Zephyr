const User = require("../models/User");
const UserRoleService = require("./userRoleService");

class UserService {

    user;
    userRoleService;

    constructor(userRoleService) {
        this.user = new User();
        this.userRoleService = userRoleService;
    }


    createNewUser = (user) => {
        return this.user.create(user);
    }

    getAllUser = () => {
        return this.user.getAll();
    }

    getUserById = (id) => {
        return this.user.getUserById(id);
    }

    getAllUsersByRoleId = (roleId) => {

        console.log("roleid", roleId)

        const userRoles = this.userRoleService.getUserRolesByRoleId(roleId);
        console.log("userRoles", userRoles)
        const users = this.getAllUser();
        console.log("users", users)
        let usersByRole = [];
        if (userRoles.length > 0 && users.length > 0) {
            let foundUser;
            userRoles.forEach(userRole => {
                
                foundUser = users.find(x => x.id === userRole.userId);

                console.log("foundUser", foundUser)
                if (foundUser) {
                    usersByRole.push(foundUser);
                }
            });

        }

        console.log("usersByRole", usersByRole)
        return usersByRole;
    }
}

module.exports = UserService;