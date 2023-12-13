class user {

    users = [];
    name;
    email;
    password;
    location;
    logoUrl;

    // constructor(name, email, password, location, logoUrl) {
    //     this.name = name;
    //     this.email = email;
    //     this.password = password;
    //     this.location = location;
    //     this.logoUrl = logoUrl;
    // }


    create = (newUser) => {
        this.users.push(newUser);
    }

    getAll = () => {
        return this.users;
    }






}

module.exports = user;