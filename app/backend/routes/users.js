var express = require('express');
const UserService = require('../services/userService');
var router = express.Router();


const userService = new UserService();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const users = userService.getAllUser();
  res.send(users);
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

  const user = userService.deleteUser(userId);
  res.status(201).send();
});

router.patch('/deactivateUser/:id', function (req, res, next) {
  const userId = req.params.id;

  const user = userService.deactivateUser(userId);
  res.status(201).send();
});

router.patch('/activateUser/:id', function (req, res, next) {
  const userId = req.params.id;

  const user = userService.activateUser(userId);
  res.status(201).send();
});

router.get('/getAllActiveUsers', function (req, res, next) {
  const users = userService.getActiveUsers();

  console.log(users)
  res.send(users);
});


module.exports = router;
