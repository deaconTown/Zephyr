class User {

    users = [{
        id: "1",
        name: "John Doe",
        email: "jd@email.com",
        password: "password123",
        isActive: true,
        isDeleted: false,
    }];

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


}

module.exports = User;