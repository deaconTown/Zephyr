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






}

module.exports = User;