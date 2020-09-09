var express = require("express");
var router = express.Router();

var userController = require("../controllers/User");

router.post("/signup", userController.signup);
router.post("/login", adminController.login);

module.exports = router;
