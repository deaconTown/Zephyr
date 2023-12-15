const prisma = require("../data/prismaClient");
const User = require("../models/User");
const UserRoleService = require("./userRoleService");

class UserService {

    user;
    userRoleService;

    constructor(userRoleService) {
        this.user = new User();
        // this.userRoleService = userRoleService;
    }


    createNewUser = async (user) => {
        console.log(`entered createNewUser method`)
        try {
            console.log(`attempting to find a user with an email ${user.email}`);

            const foundUser = await prisma.user.findUnique({
                where: {
                    email: user.email,
                },
            });

            if (foundUser) {
                console.log(`Error: user with email ${user.email} already exists`);
                throw new Error(`user with email ${user.email} already exists`);
            }
            else {
                console.log(`attempting to create a new user with name ${user.name}`);
                const newUser = await prisma.user.create({ data: user })
                console.log(`exiting createNewUser method`)
                return newUser;
            }


        } catch (error) {
            console.log(`Error: ${error.message}`);
            throw error;
        }


    }

    getAllUser = async () => {
        console.log(`entered getAllUser method`)

        // let roles = [];

        try {
            console.log(`attempting to get all users`);
            const users = await prisma.user.findMany();

            // console.log("roles", roles)

            console.log(`existing getAllUser method`);
            return users;

        } catch (error) {
            console.log(`Error: ${error.message}`)
            throw error;
        }

        // return roles;
    }

    getUserById = async (id) => {
        console.log(`entered getUserById method`)

        // let roles = [];

        try {
            console.log(`attempting to get user with id ${id}`);
            const user = await prisma.user.findUnique({
                where: {
                    id: parseInt(id),
                },
            });

            console.log("roles", user)

            console.log(`existing getUserById method`);
            return user;

        } catch (error) {
            console.log(`Error: ${error.message}`)
            throw error;
        }

        // return roles;
    }
    getUserByEmail = async(email) => {
        console.log(`UserService: Enter getUserByEmail method with params: ${email}`)
        let result = null;
        try {
            console.log("UserService:Attempting to fetch user")
            const response = await prisma.user.findUnique({
                where: {
                    email: email,
                },
            });
            if(response == null)
                throw new Error(`There is an issue fetching user: ${response}`)
            console.log(`User retrieved successfully`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderService: Exit getUserByEmail method ${result}}`)
        return result;
    }
    getAllUsersByRoleId = (roleId) => {

        const userRoles = this.userRoleService.getUserRolesByRoleId(roleId);

        const users = this.getAllUser();

        let usersByRole = [];
        if (userRoles && userRoles.length > 0 && users.length > 0) {
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

    deleteUser = async (id) => {
        console.log(`entered deleteUser method`)

        try {

            console.log(`attempting to delete user with id ${id}`);

            const updatedRole = await prisma.user.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    isDeleted: true
                },
            })

            console.log(`existing deleteUser method`)
            return updatedRole;

        } catch (error) {

            console.log(`Error: ${error.message}`);
            throw error;
        }


        // return {};
    }

    deactivateUser = async (userId) => {
        console.log(`entered deactivateUser method`)

        try {

            console.log(`attempting to deactivate user with id ${userId}`);

            const updatedRole = await prisma.user.update({
                where: {
                    id: parseInt(userId),
                },
                data: {
                    isActive: false
                },
            })

            console.log(`existing deactivateUser method`)
            return updatedRole;

        } catch (error) {

            console.log(`Error: ${error.message}`);
            throw error;
        }

    }

    activateUser = async (userId) => {
        console.log(`entered activateUser method`)

        try {

            console.log(`attempting to activate user with id ${userId}`);

            const updatedRole = await prisma.user.update({
                where: {
                    id: parseInt(userId),
                },
                data: {
                    isActive: true
                },
            })

            console.log(`existing activateUser method`)
            return updatedRole;

        } catch (error) {

            console.log(`Error: ${error.message}`);
            throw error;
        }

    }

    verifyUserEmail = async (userId) => {
        console.log(`entered verifyUserEmail method`)

        try {

            console.log(`attempting to verify User Email with id ${userId}`);

            const updatedRole = await prisma.user.update({
                where: {
                    id: parseInt(userId),
                },
                data: {
                    isEmailVerified: true
                },
            })

            console.log(`existing verifyUserEmail method`)
            return updatedRole;

        } catch (error) {

            console.log(`Error: ${error.message}`);
            throw error;
        }

    }

    getActiveUsers = () => {
        return this.user.getActiveUsers();
    }

    updateUser = async (updatedUserData) => {
        console.log(`entered updateUser method`)

        try {

            console.log(`attempting to updated user with id ${updatedUserData.id}`);

            const updatedData = await prisma.role.update({
                where: {
                    id: parseInt(updatedUserData.id),
                },
                data: {
                    name: updatedUserData.name,
                    email: updatedUserData.email,
                    password: updatedUserData.password,
                    location: updatedUserData.location,
                    logoUrl: updatedUserData.logoUrl
                },
            })

            console.log(`existing updateUser method`)
            return updatedData;

        } catch (error) {

            console.log(`Error: ${error.message}`);
            throw error;
        }


        // return {};
    }
}

module.exports = UserService;