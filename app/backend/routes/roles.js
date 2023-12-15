var express = require('express');
const RoleService = require('../services/roleService');
var router = express.Router();


const roleService = new RoleService();

router.get('/', async function (req, res, next) {

  try {
    const roles = await roleService.getAllRoles();
    console.log("roles again", roles)
    res.send(roles);
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
    res.status(500).send({ errormessage: error.message })
  }
  console.log(`exiting the create role endpoint`)
});

router.get('/:id', async function (req, res, next) {
  const roleId = req.params.id;

  try {
    const role = await roleService.getRoleById(roleId);
    console.log("roleing ", role)
    res.send(role);
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});

router.put('/updateRole', async function (req, res, next) {
  const roleToUpdate = req.body;

  try {
    const role = await roleService.updateRole(roleToUpdate);
    res.send(role);
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});


router.patch('/deactivate/:id', async function (req, res, next) {
  const {id} = req.params;

  try {
    const role = await roleService.deactiveRole(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});


router.patch('/activate/:id', async function (req, res, next) {
  const {id} = req.params;

  try {
    const role = await roleService.activeRole(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});

router.delete('/:id', async function (req, res, next) {
  const { id } = req.params;

  try {
    await roleService.deleteRole(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});

module.exports = router;