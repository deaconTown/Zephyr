class User {

    users = [];

    id;
    name;
    email;
    password;
    location;
    logoUrl;
    isActive;
    isDeleted;
    isEmailVerified;

    constructor() {
        this.isActive = true;
        this.isDeleted = false;
    }


    create = (newUser) => {
        newUser.id = Math.random();
        newUser.isActive = true;
        newUser.isDeleted = false;
        this.users.push(newUser);

        return newUser;
    }

    getAll = () => {
        return this.users;
    }

    getUserById = (id) => {
        return this.users.find(x => x.id === id);
    }

    delete = (userId) => {

        let userToDelete = this.users.find(x => x.id === userId);
        const index = this.users.indexOf(x => x.id === userId);

        userToDelete.isDeleted = true;

        this.users[index] = userToDelete;

    }

    deactivate = (userId) => {

        let userToDeactivate = this.users.find(x => x.id === userId);
        const index = this.users.indexOf(x => x.id === userId);

        userToDeactivate.isActive = false;

        this.users[index] = userToDeactivate;
    }

    activate = (userId) => {

        let userToActivate = this.users.find(x => x.id === userId);
        const index = this.users.indexOf(x => x.id === userId);

        userToActivate.isActive = true;

        this.users[index] = userToActivate;
    }

    getActiveUsers = () => {
        return this.users.filter(x => x.isActive === true);
    }


}

module.exports = User;