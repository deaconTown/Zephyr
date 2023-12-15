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

    getRoleById = async (id) => {
        console.log(`entered getRoleById method`)

        // let roles = [];

        try {
            console.log(`attempting to get get role with ${id}`);
            const role = await prisma.role.findUnique({
                where: {
                    id: parseInt(id),
                },
            });

            console.log("roles", role)

            console.log(`existing getRoleById method`);
            return role;

        } catch (error) {
            console.log(`Error: ${error.message}`)
            throw error;
        }

        // return roles;
    }


    updateRole = async (updatedRoleData) => {
        console.log(`entered updateRole method`)

        try {
            // const newUserRole = this.userRole.create(roleId, userId);
            // let ur;

            // if (newUserRole) {
            // console.log(`new user role found ${newUserRole}`)

            console.log(`attempting to updated role with id ${updatedRoleData.id}`);

            const updatedRole = await prisma.role.update({
                where: {
                    id: parseInt(updatedRoleData.id),
                },
                data: {
                    name: updatedRoleData.name,
                    description: updatedRoleData.description
                },
            })

            console.log(`existing updateRole method`)
            return updatedRole;

        } catch (error) {

            console.log(`Error: ${error.message}`);
            throw error;
        }


        // return {};
    }

    deleteRole = async (id) => {
        console.log(`entered deleteRole method`)

        try {
            // const newUserRole = this.userRole.create(roleId, userId);
            // let ur;

            // if (newUserRole) {
            // console.log(`new user role found ${newUserRole}`)

            console.log(`attempting to delete role with id ${id}`);

            const updatedRole = await prisma.role.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    isDeleted: true
                },
            })

            console.log(`existing deleteRole method`)
            return updatedRole;

        } catch (error) {

            console.log(`Error: ${error.message}`);
            throw error;
        }


        // return {};
    }

    deactiveRole = async (id) => {
        console.log(`entered deactiveRole method`)

        try {
            // const newUserRole = this.userRole.create(roleId, userId);
            // let ur;

            // if (newUserRole) {
            // console.log(`new user role found ${newUserRole}`)

            console.log(`attempting to  delete role with id ${id}`);

            const deactivatedRole = await prisma.role.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    isActive: false
                },
            })

            console.log(`existing deleteRole method`)
            return deactivatedRole;

        } catch (error) {

            console.log(`Error: ${error.message}`);
            throw error;
        }


        // return {};
    }

    activeRole = async (id) => {
        console.log(`entered deactiveRole method`)

        try {
            // const newUserRole = this.userRole.create(roleId, userId);
            // let ur;

            // if (newUserRole) {
            // console.log(`new user role found ${newUserRole}`)

            console.log(`attempting to  delete role with id ${id}`);

            const deactivatedRole = await prisma.role.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    isActive: true
                },
            })

            console.log(`existing deleteRole method`)
            return deactivatedRole;

        } catch (error) {

            console.log(`Error: ${error.message}`);
            throw error;
        }


        // return {};
    }

}

module.exports = RoleService;