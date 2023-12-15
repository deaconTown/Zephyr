class Role {

    roles = [];

    id;
    name;
    description;
    isActive;
    isDeleted;

    constructor() {
    }


    create = (newRole) => {
        //check if user email exist 

        const foundRoleIndex = this.roles.findIndex(x => x.name === newRole.name);

        if (foundRoleIndex >= 0) {
            //throw exception
            return;
        }
        else {
            newRole.isActive = true;
            newRole.isDeleted = false;
            newRole.isEmailVerified = false;
            this.roles.push(newRole);

            return newRole;
        }

    }

    getAll = () => {
        return this.roles;
    }

    getUserById = (id) => {
        const foundUser = this.roles.find(x => x.id == id && x.isDeleted == false);

        return foundUser;
    }

    delete = (userId) => {

        let userToDelete = this.roles.find(x => x.id === userId);
        const index = this.roles.findIndex(x => x.id === userId);

        userToDelete.isDeleted = true;

        this.roles[index] = userToDelete;

    }

    deactivate = (userId) => {

        let userToDeactivate = this.roles.find(x => x.id === userId);
        const index = this.roles.findIndex(x => x.id === userId);

        userToDeactivate.isActive = false;

        this.roles[index] = userToDeactivate;
    }

    activate = (userId) => {

        let userToActivate = this.roles.find(x => x.id === userId);
        const index = this.roles.findIndex(x => x.id === userId);

        userToActivate.isActive = true;

        this.roles[index] = userToActivate;
    }

    verifyEmail = (userId) => {

        let userToValidate = this.roles.find(x => x.id === userId);
        const index = this.roles.findIndex(x => x.id === userId);

        userToValidate.isEmailVerified = true;

        this.roles[index] = userToValidate;
    }

    getActiveUsers = () => {
        console.log("users", this.roles)
        console.log("active user", this.roles.filter(x => x.isActive === true))
        console.log("delete filtered user", this.roles.filter(x => x.isDeleted === true))
        console.log("delete an active filtered user", this.roles.filter(x => x.isActive === true && x.isDeleted === false))
        const activeUsers = this.roles.filter(x => x.isActive === true && x.isDeleted === false);
        console.log("activeUsers", activeUsers)

        return activeUsers
    }

    update = (updateUser) => {

        const updatedUserId = updateUser.id;
        const index = this.roles.findIndex(x => x.id === updatedUserId);

        this.roles[index] = updateUser;

        return this.roles[index];
    }


}

module.exports = Role;