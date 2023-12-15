var express = require('express');
const UserService = require('../services/userService');
const UserRoleService = require('../services/userRoleService');
var router = express.Router();

const userRoleService = new UserRoleService();
const userService = new UserService(userRoleService);

/* GET users listing. */
router.get('/', async function (req, res, next) {

  try {
    const users = await userService.getAllUser();
    console.log("users again", users)

    if (users.length > 0) {
      res.send(users);

    }
    else {
      res.status(404).send({ errorMessage: "No user found" })
    }
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});

router.post('/create', function (req, res, next) {
  const newUser = req.body;
  try {
    const createdUser = userService.createNewUser(newUser);
    res.send(createdUser);
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});

router.get('/:id', async function (req, res, next) {
  const userId = req.params.id;

  try {
    const user = await userService.getUserById(userId);
    res.send(user);
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});

router.delete('/:id', async function (req, res, next) {
  const { id } = req.params;

  try {
    await userService.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});

router.patch('/deactivate/:id', async function (req, res, next) {
  const {id} = req.params;

  try {
    const role = await userService.deactivateUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});

router.patch('/activate/:id', async function (req, res, next) {
  const {id} = req.params;

  try {
    const role = await userService.activateUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ errormessage: error.message })
  }

});

  router.patch('/verifyEmail/:id', async function (req, res, next) {
    const {id} = req.params;
  
    try {
      const role = await userService.verifyUserEmail(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ errormessage: error.message })
    }
  
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
