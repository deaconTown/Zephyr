const prisma = require("../data/prismaClient");
const UserRole = require("../models/userRole");

class UserRoleService {

    userRole;

    constructor() {
        this.userRole = new UserRole();
    }


    createNewUserRole = async (roleId, userId) => {
        console.log(`entered createNewUserRole method`)
        try {
            console.log(`attempting to create a new user role with role id ${roleId}`);
            const newUserRole = await prisma.userRole.create({ data: { roleId: roleId, userId: userId } })
            console.log(`exiting createNewUserRole method`)
            return newUserRole;
        } catch (error) {
            console.log(`Error: ${error.message}`);
            throw error;
        }


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