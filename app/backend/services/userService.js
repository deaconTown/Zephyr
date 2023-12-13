const User = require("../models/User");

class UserService {

    user;

    constructor() {
        this.user = new User();
    }


    createNewUser = (user) => {
        this.user.create(user);
    }

    getAllUser = () => {
        return this.user.getAll();
    }

    getUserById = (id) => {
        return this.user.getUserById(id);
    }
}

module.exports = UserService;