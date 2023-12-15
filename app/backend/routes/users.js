var express = require('express');
const UserService = require('../services/userService');
const UserRoleService = require('../services/userRoleService');
var router = express.Router();

const userRoleService = new UserRoleService();
const userService = new UserService(userRoleService);

/* GET users listing. */
router.get('/', function (req, res, next) {
  const users = userService.getAllUser();
  if(users.length > 0)
  {
    res.send(users);

  }
  else{
    res.status(404).send({errorMessage: "No user found"})
  }
});

router.post('/create', function (req, res, next) {
  const newUser = req.body;
  const createdUser = userService.createNewUser(newUser);
  res.send(createdUser);
});

router.get('/:id', function (req, res, next) {
  const userId = req.params.id;

  const user = userService.getUserById(userId);
  res.send(user);
});

router.delete('/:id', function (req, res, next) {
  const userId = req.params.id;

  userService.deleteUser(userId);
  res.status(204).send();
});

router.patch('/deactivateUser/:id', function (req, res, next) {
  const userId = req.params.id;

  userService.deactivateUser(userId);
  res.status(204).send();
});

router.patch('/activateUser/:id', function (req, res, next) {
  const userId = req.params.id;

  userService.activateUser(userId);
  res.status(204).send();
});

router.patch('/verifyEmail/:id', function (req, res, next) {
  const userId = req.params.id;

  userService.verifyUserEmail(userId);
  res.status(204).send();
});

router.get('/usersByRole/:userTypeId', function (req, res, next) {
  const userTypeId = req.params.userTypeId;

  const usersByRole = userService.getAllUsersByRoleId(userTypeId);
  res.send(usersByRole);
});

router.put('/update', function (req, res, next) {
  const updatedUserData = req.body

  const updatedUser = userService.updateUser(updatedUserData);
  res.send(updatedUser);
});

// router.get('/activeUsers', function (req, res, next) {
//   const users = userService.getActiveUsers();

//   console.log(users)
//   if(users.length > 0)
//   {
//     res.send(users);
//   }
//   else{
//     res.status(404).send({errorMessage: "No active user found"})
//   }
// });


module.exports = router;
