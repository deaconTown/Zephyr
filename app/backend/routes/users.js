var express = require('express');
const UserService = require('../services/userService');
var router = express.Router();


const userService = new UserService();

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
