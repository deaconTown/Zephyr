const user = require("../models/user");

class UserService {

    createNewUser = (user) => {
        user.create(user);
    }

    getAllUser = () => {
        return User.getAll();
    }
}

module.exports = UserService;