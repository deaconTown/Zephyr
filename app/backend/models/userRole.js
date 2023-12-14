class UserRole {

    userRoles = [{
        id: "1",
        roleId: "1",
        userId: "1"
    }];

    id;
    roleId;
    userId;


    constructor() {
    }


    create = (roleId, userId) => {
        const newUserRole = {
            id: Math.random(),
            roleId: roleId,
            userId: userId
        }
        this.userRoles.push(newUserRole);

        return newUserRole;
    }

    getAll = () => {
        return this.userRoles;
    }

    getUserRoleById = (id) => {
        return this.userRoles.find(x => x.id === id);
    }

    getUserRolesByRoleId = (roleId) => {
        return this.userRoles.filter(x => x.roleId === roleId);
    }

}

module.exports = UserRole;