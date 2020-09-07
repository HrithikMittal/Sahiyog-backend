var mongoose = require("mongoose");
var { ObjectId } = mongoose.Schema;

var orderSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  labPartner: {
    type: ObjectId,
    ref: "LabPartner",
  },
  test: {
    type: ObjectId,
    ref: "Test",
  },
  price: {
    type: Number,
    default: 0,
  },
  status: {
    type: Boolean,
    default: false,
  },
  paymentMode: {
    type: Boolean, // 0 -> offline and 1 -> online
    default: 0,
  },
  paymentResponse: [
    {
      type: String,
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
