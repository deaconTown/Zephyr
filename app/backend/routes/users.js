var express = require('express');
const UserService = require('../services/userService');
var router = express.Router();


const userService = new UserService();

/* GET users listing. */
router.get('/getAll', function (req, res, next) {
  const users = userService.getAllUser();
  res.send(users);
});

router.post('/create', function (req, res, next) {
  const newUser = req.body;
  userService.createNewUser(newUser);
  const users = userService.getAllUser();
  res.send(users);
});

module.exports = router;
