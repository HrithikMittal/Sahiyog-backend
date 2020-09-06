var express = require("express");
var router = express.Router();

var userController = require("../controllers/User");

router.post("/signup", userController.createUser);

module.exports = router;
