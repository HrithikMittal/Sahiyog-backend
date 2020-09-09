var User = require("../modals/User");
var expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");

const signup = (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user) {
        return res.json({ error: "User already exists wih this username" });
      }
      var newUser = new User(req.body);
      newUser
        .save()
        .then((result) => {
          return res.json({ message: "Successfully created!", result });
        })
        .catch((err) => {
          console.log("error in signup controller of user ", err);
          return res.json({ error: err });
        });
    })
    .catch((err) => {
      console.log("error in signup controller of user ", err);
      return res.json({ error: err });
    });
};

const login = (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.json({ error: "User doesn't exists wih this username" });
      }
      const response = user.authenticate(req.body.password);
      if (!response) {
        return res.json({ error: "UnAuthorized Access!" });
      }
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      res.cookie("t", token, { expire: new Date() + 9999 });
      user.hashed_password = undefined;
      res.json({ token, user });
    })
    .catch((err) => {
      console.log("error in login controller of user ", err);
      return res.json({ error: err });
    });
};

const requireSignInUser = expressJwt({});

module.exports = { signup, login };
