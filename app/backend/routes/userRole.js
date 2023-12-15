var express = require('express');
const UserRoleService = require('../services/userRoleService');
var router = express.Router();


const userRoleService = new UserRoleService();

router.get('/', function (req, res, next) {
  const userRoles = userRoleService.getAllUserRoles();
  res.send(userRoles);
});

router.post('/create', function (req, res, next) {
  const newUserRole = req.body;
  const createdUserRole = userRoleService.createNewUserRole(newUserRole);
  res.send(createdUserRole);
});

router.get('/:id', function (req, res, next) {
  const userRoleId = req.params.id;

  const userRole = userRoleService.getUserRoleById(userRoleId);
  res.send(userRole);
});

module.exports = router;
