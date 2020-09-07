var mongoose = require("mongoose");
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

mongoose.model = addressSchema = mongoose.model("AddressSchema", addressSchema);

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNo: {
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

module.exports = User = mongoose.model("User", userSchema);
