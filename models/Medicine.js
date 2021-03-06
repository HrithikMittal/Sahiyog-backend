const mongoose = require("mongoose");
var medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A medicine must have a name"],
    unique: true,
    trim: true,
    maxlength: [
      40,
      "A medicine name must have less or equal then 40 characters",
    ],
    minlength: [5, "A medicine name must have more or equal then 5 characters"],
  },
  rxRequired: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  packing: {
    type: String,
  },
  discount: {
    type: Number,
    default: 0,
  },
  composition: {
    type: String,
  },
  brandName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  validated: {
    type: Boolean,
    default: false,
  },
});

var Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;
