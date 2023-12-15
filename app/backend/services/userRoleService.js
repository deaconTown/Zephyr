const prisma = require("../data/prismaClient");
const UserRole = require("../models/userRole");
const UserRoleRepository = require("../repository/userRoleRepository");

class UserRoleService {
    constructor(){
        this.userRole = new UserRole();
        this.userRoleRepository = new UserRoleRepository();
    }

    createNewUserRole = async (roleId, userId) => { 
        console.log(`entered createNewUserRole method in UserRoleService`);
        try { 
            console.log(`attempting to create a new user role with role id ${roleId}`); 
            const newUserRole = await this.userRoleRepository.createNewUserRole(roleId, userId); 
            console.log(`exiting createNewUserRole method`); 
            return newUserRole; 
        } catch (error) { 
            console.log(`Error: ${error.message}`); 
            throw error; 
        } 
    } 

    getAllUserRoles = async () => {
        console.log('entered getAllUserRoles in UserRoleService');
        try{
            console.log('attempting to get all users roles');
            const allUserRoles = await this.userRoleRepository.getAllUserRoles();
            return allUserRoles;
        }catch(error){
            console.log(`Error: ${error.message}`);
            throw error;
        }
        
    }

    getUserRoleById = async (id) => {
        console.log('entered getUserRoleById method in UserRoleService');
        try{
            console.log(`attempting to get user roles with id: ${id}`);
            const userRole  = await this.userRoleRepository.getUserRoleById(id);
            return userRole;
        }catch(error){
            console.log(`Error: ${error.message}`);
            throw error;
        }        
    }

    getUserRolesByRoleId = async (roleId) => {
        console.log('entered getUserRolesByRoleId method in UserRoleService');
        try{
            console.log(`attempting to get user roles by role id`);
            const userRoles = await this.getUserRolesByRoleId(roleId);
            return userRoles;
        }catch(error){
            console.log(`Error: ${error.message}`);
            throw error;
        }
    }
}

module.exports = UserRoleService;