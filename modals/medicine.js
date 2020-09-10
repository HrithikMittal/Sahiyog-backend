// var mongoose = require("mongoose");

// var medicineSchema = mongoose.Schema({
//   // name: {
//   //   type: String,
//   //   required: [true, "A medicine must have a name"],
//   //   unique: true,
//   //   trim: true,
//   //   maxlength: [
//   //     40,
//   //     "A medicine name must have less or equal then 40 characters",
//   //   ],
//   //   minlength: [5, "A medicine name must have more or equal then 5 characters"],
//   // },
//   // rxRequired: {
//   //   type: Boolean,
//   //   default: false,
//   // },
//   // price: {
//   //   type: Number,
//   //   required: true,
//   //   default: 0,
//   // },
//   // packing: {
//   //   type: String,
//   // },
//   // discount: {
//   //   type: Number,
//   //   default: 0,
//   // },
//   // composition: {
//   //   type: String,
//   // },
//   // brandName: {
//   //   type: String,
//   //   required: true,
//   // },
//   // image: {
//   //   type: String,
//   // },
//   // validated: {
//   //   type: Boolean,
//   //   default: false,
//   // },
// });

// const Medicine = mongoose.model("Medicine", medicineSchema);
// module.exports = Medicine;
const mongoose = require("mongoose");
var { ObjectId } = mongoose.Schema;

const checkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A test must have a name"],
    unique: true,
    trim: true,
    maxlength: [40, "A test name must have less or equal then 40 characters"],
    minlength: [5, "A test name must have more or equal then 5 characters"],
  },
  tests: [
    {
      type: ObjectId,
      ref: "LabPartner",
    },
  ],
});

var Check = mongoose.model("Check", checkSchema);
module.exports = Check;
