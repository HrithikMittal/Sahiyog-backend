const mongoose = require("mongoose");

const MedicineSchema = new mongoose.Schema({
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
  rx_required: {
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
  Brand_name: {
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

var Medicines = mongoose.model("Medicines", MedicineSchema);
module.exports = Medicines;
