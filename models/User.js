var mongoose = require("mongoose");
const uuid = require("uuid");
const crypto = require("crypto");
var { ObjectId } = mongoose.Schema;

var addressSchema = mongoose.Schema({
  addr1: {
    type: String,
    required: true,
  },
  addr2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
});

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  salt: String,
  hashed_password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
    default: 1,
  },
  address: [
    {
      type: addressSchema,
    },
  ],
  orders: [
    {
      type: ObjectId,
      ref: "Order",
    },
  ],
  prescription: [
    {
      type: String,
    },
  ],
});

// virtual field
userSchema
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
userSchema.methods = {
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

const User = mongoose.model("User", userSchema);
module.exports = User;
