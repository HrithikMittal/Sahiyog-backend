var User = require("../modals/User");

var createUser = (req, res) => {
  var newUser = new User(req.body);
  newUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("ERROR in creating user controller", err);
    });
};

module.exports = { createUser };
