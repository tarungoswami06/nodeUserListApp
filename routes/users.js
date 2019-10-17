var express = require('express');
var router = express.Router();
var UserController = require('../Controllers/UserController');
/* GET users listing. */
router.get('/', 
  UserController.getUsers
);

module.exports = router;
