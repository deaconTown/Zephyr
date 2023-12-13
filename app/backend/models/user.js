class User {

    users = [];
    name;
    email;
    password;
    location;
    logoUrl;

    constructor() {

    }


    create = (newUser) => {
        this.users.push(newUser);
    }

    getAll = () => {
        return this.users;
    }

    getUserById = (id) => {
        return this.users.find(x => x.id === id);
    }






}

module.exports = User;