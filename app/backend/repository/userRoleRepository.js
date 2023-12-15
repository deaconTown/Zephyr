const prisma = require("../data/prismaClient");

class UserRoleRepository{
    createNewUserRole = async (roleId, userId) => { 
        console.log(`entered createNewUserRole method in UserRoleRepository`);
        try { 
            console.log(`attempting to create a new user role with roleid ${roleId} and userid ${userId}`); 
            const newUserRole = await prisma.userRole.create({
                 data: { 
                    roleId: roleId,
                    userId: userId 
                } 
            }); 
            console.log(`exiting createNewUserRole method in UserRoleRepository`); 
            return newUserRole; 
        } catch (error) { 
            console.log(`Error: ${error.message}`); 
            throw error; 
        } 
    } 

    getAllUserRoles = async () => {
        console.log('entered getAllUserRoles method in UserRolRepository');
        try{
            console.log('attempting to get all users roles');
            const allUserRoles = await prisma.userRole.findMany();
            console.log('exiting getAllUserRoles in UserRoleRepository')
            return allUserRoles;
        }catch(error){
            console.log(`Error: ${error.message}`)
            throw error;
        }
        
    }

    getUserRoleById = async (id) => {
        console.log('entered getUserRoleById method in UserRoleRepository');
        try{
            console.log(`attempting to get user roles by id: ${id}`);
            const userRole = await prisma.userRole.findUnique({
                where: {
                    id: parseInt(id)
                }
            });
            return userRole;
        }catch(error){
            console.log(`Error: ${error.message}`);
            throw error;
        }
    }

    getUserRolesByRoleId = async (roleId) => {
        console.log('entered getUserRolesbyRoleId method in UserRoleRepository');
        try{
            console.log(`attempting to get user roles by roleId: ${roleId}`);
            const userRoles = await prisma.userRole.findMany({
                where: {
                    roleId: roleId
                }
            })
            return userRoles
        }catch(error){
            console.log(`Error: ${error.message}`);
            throw error;
        }
    }
}

module.exports = UserRoleRepository;