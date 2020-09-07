const mongoose = require("mongoose");
var { ObjectId } = mongoose.Schema;

const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A test must have a name"],
    unique: true,
    trim: true,
    maxlength: [40, "A test name must have less or equal then 40 characters"],
    minlength: [5, "A test name must have more or equal then 5 characters"],
  },
  price: {
    type: Number,
    required: [true, "A test must have a price"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  labs: [
    {
      type: ObjectId,
      ref: "LabPartner",
    },
  ],
  test: [
    {
      type: ObjectId,
      ref: "Test",
    },
  ],
  fastingRequired: {
    type: String,
  },
  sampleType: [
    {
      type: String,
    },
  ],
});

var Test = mongoose.model("Test", TestSchema);
module.exports = Test;
