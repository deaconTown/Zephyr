var express = require('express');
const RoleService = require('../services/roleService');
var router = express.Router();


const roleService = new RoleService();

// router.get('/', function (req, res, next) {
//     const userRoles = roleService.getAllUserRoles();
//     res.send(userRoles);
//   });

router.post('/create', function (req, res, next) {
  const newRole = req.body;
  const createdRole = roleService.createNewRole(newRole);
  res.send(createdRole);
});

// router.get('/:id', function (req, res, next) {
//   const userRoleId = req.params.id;

//   const userRole = roleService.getUserRoleById(userRoleId);
//   res.send(userRole);
// });

module.exports = router;