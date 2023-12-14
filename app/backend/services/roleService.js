const prisma = require("../data/prismaClient");

class RoleService {


    createNewRole = async (name, description) => {
        console.log(`entered createNewRole method`)

        try {
            // const newUserRole = this.userRole.create(roleId, userId);
            // let ur;

            // if (newUserRole) {
            // console.log(`new user role found ${newUserRole}`)

            const newRole = await prisma.role.create({
                data:
                {
                    name : name,
                    description: description
                },
            });

            return newRole;

        } catch (error) {

            console.log(`Error: ${error.message}`)
        }

        console.log(`existing createNewRole method`)

        return {};
    }

}

module.exports = RoleService;