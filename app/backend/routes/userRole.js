var express = require('express');
const UserRoleService = require('../services/userRoleService');
var router = express.Router();


const userRoleService = new UserRoleService();

router.get('/', async function (req, res, next) {
  const userRoles = await userRoleService.getAllUserRoles();
  res.send(userRoles);
});

router.post('/create', async function (req, res, next) {
  const newUserRole = req.body;
  const createdUserRole = await userRoleService.createNewUserRole(newUserRole.roleId, newUserRole.userId);
  res.send(createdUserRole);
});

router.get('/:id', async function (req, res, next) {
  const userRoleId = req.params.id;

  const userRole = await userRoleService.getUserRoleById(userRoleId);
  res.send(userRole);
});

router.get('/roles/:roleId', async function(req, res, next){
  const userRoles = await userRoleService.getUserRolesByRoleId(req.params.roleId);
  res.send(userRoles);
})

module.exports = router;
