var express = require('express');
const RoleService = require('../services/roleService');
var router = express.Router();


const roleService = new RoleService();

router.get('/', function (req, res, next) {

  try {
    const userRoles = roleService.getAllRoles();
    console.log("roles again", roles)
    res.send(userRoles);
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});

router.post('/create', async function (req, res, next) {
  console.log(`entered the create role endpoint`)
  const { name, description } = req.body;
  try {
    const createdRole = await roleService.createNewRole(name, description);
    res.send(createdRole);

  } catch (error) {
    res.status(500).send({ errormessage: "Internal Server Error" })
  }
  console.log(`exiting the create role endpoint`)
});

// router.get('/:id', function (req, res, next) {
//   const userRoleId = req.params.id;

//   const userRole = roleService.getUserRoleById(userRoleId);
//   res.send(userRole);
// });

module.exports = router;