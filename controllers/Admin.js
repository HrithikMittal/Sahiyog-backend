var Admin = require("../modals/Admin");
var expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");

const signup = (req, res) => {
  Admin.findOne({ username: req.body.username })
    .then((admin) => {
      if (admin) {
        return res.json({ error: "Admin already exists wih this username" });
      }
      var newAdmin = new Admin(req.body);
      newAdmin
        .save()
        .then((result) => {
          return res.json({ message: "Successfully created!", result });
        })
        .catch((err) => {
          console.log("error in signup controller of admin ", err);
          return res.json({ error: err });
        });
    })
    .catch((err) => {
      console.log("error in signup controller of admin ", err);
      return res.json({ error: err });
    });
};

const login = (req, res) => {
  Admin.findOne({ username: req.body.username })
    .then((admin) => {
      if (!admin) {
        return res.json({ error: "Admin doesn't exists wih this username" });
      }
      const response = admin.authenticate(req.body.password);
      if (!response) {
        return res.json({ error: "UnAuthorized Access!" });
      }
      const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);

      res.cookie("t", token, { expire: new Date() + 9999 });
      admin.hashed_password = undefined;
      res.json({ token, admin });
    })
    .catch((err) => {
      console.log("error in login controller of admin ", err);
      return res.json({ error: err });
    });
};

// const requireSignInAdmin = expressJwt({});

module.exports = { signup, login };
