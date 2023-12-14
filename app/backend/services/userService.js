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

        const userRoles = this.userRoleService.getUserRolesByRoleId(roleId);

        const users = this.getAllUser();

        let usersByRole = [];
        if ( userRoles && userRoles.length > 0 && users.length > 0) {
            let foundUser;
            userRoles.forEach(userRole => {

                foundUser = users.find(x => x.id === userRole.userId);

                if (foundUser) {
                    usersByRole.push(foundUser);
                }
            });

        }

        return usersByRole;
    }

    deleteUser = (userId) => {
        this.user.delete(userId);
    }

    deactivateUser = (userId) => {
        const user = this.user.getUserById(userId);
        if (user.isDeleted) {
            return;
        }
        this.user.deactivate(userId);
    }

    activateUser = (userId) => {
        const user = this.user.getUserById(userId);
        if (user.isDeleted) {
            return;
        }
        this.user.activate(userId);
    }

    verifyUserEmail = (userId) => {
        const user = this.user.getUserById(userId);
        if (user.isDeleted) {
            return;
        }
        this.user.verifyEmail(userId);
    }

    getActiveUsers = () => {
        return this.user.getActiveUsers();
    }

    updateUser = (userId, updatedUser) => {
        const user = this.user.getUserById(userId);
        if (user.isDeleted) {
            return;
        }

        console.log("userId", userId)
        console.log("user.id", user.id)

        updatedUser = {
            id: user.id,
            name: updatedUser.name ?? user.name,
            email: updatedUser.email ?? user.email,
            password: updatedUser.password ?? user.password,
            location: updatedUser.location ?? user.location,
            logoUrl: updatedUser.logoUrl ?? user.logoUrl,
            isActive: user.isActive,
            isDeleted: user.isDeleted,
            isEmailVerified: user.isEmailVerified
        }
        
        return this.user.update(updatedUser);
    }
}

module.exports = UserService;