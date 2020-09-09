var mongoose = require("mongoose");
const uuid = require("uuid");
const crypto = require("crypto");

var adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
  },
  salt: String,
  hashed_password: {
    type: String,
    required: true,
  },
});

// virtual field
adminSchema
  .virtual("password")
  .set(function (password) {
    // create temporary variable called _password
    this._password = password;
    // generate a timestamp
    this.salt = uuid.v1();
    // encryptPassword()
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// methods
adminSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
