var mongoose = require("mongoose");
var { ObjectId } = mongoose.Schema;

var MedicineOrderSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  medicine: {
    type: ObjectId,
    ref: "LabPartner",
  },
  product: {
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

const MedicineOrder = mongoose.model("MedicineOrder", MedicineOrderSchema);
module.exports = MedicineOrder;
