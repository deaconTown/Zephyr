const prisma = require("../data/prismaClient");

class RoleService {


    createNewRole = async (name, description) => {
        console.log(`entered createNewRole method`)

        try {
            // const newUserRole = this.userRole.create(roleId, userId);
            // let ur;

            // if (newUserRole) {
            // console.log(`new user role found ${newUserRole}`)

            console.log(`attempting to create a new role with name ${name} and description ${description}`);

            const newRole = await prisma.role.create({
                data:
                {
                    name: name,
                    description: description
                },
            });

            console.log(`existing createNewRole method`)
            return newRole;

        } catch (error) {

            console.log(`Error: ${error.message}`);
            throw error;
        }


        // return {};
    }

    getAllRoles = async () => {
        console.log(`entered getAllRoles method`)

        // let roles = [];

        try {
            console.log(`attempting to get all roles`);
            const roles = await prisma.role.findMany();

            // console.log("roles", roles)

            console.log(`existing getAllRoles method`);
            return roles;

        } catch (error) {
            console.log(`Error: ${error.message}`)
            throw error;
        }

        // return roles;
    }

}

module.exports = RoleService;