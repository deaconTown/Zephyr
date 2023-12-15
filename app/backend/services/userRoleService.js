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
            // const newUserRole = this.userRole.create(roleId, userId);
            // let ur;

            // if (newUserRole) {
                // console.log(`new user role found ${newUserRole}`)
                
                await prisma.userRole.create({
                    data:
                    {
                        userId: userId,
                        roleId: roleId
                    },
                });

                // console.log(`user role created in db ${ur}`)

            // }
            // else {
            //     //throw exception
            //     console.log(`user role not created`)
            // }
        } catch (error) {

            console.log(`Error: ${error.message}`)
        }


        console.log(`existing createNewUserRole method`)

        return {};
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