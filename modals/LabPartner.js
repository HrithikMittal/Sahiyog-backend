const mongoose = require("mongoose");
var { ObjectId } = mongoose.Schema;

const LabPartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A lab partner must have a name"],
    unique: true,
    trim: true,
    maxlength: [
      40,
      "A lab partner name must have less or equal then 40 characters",
    ],
    minlength: [
      5,
      "A lab partner name must have more or equal then 5 characters",
    ],
  },
  tests: {
    type: ObjectId,
    ref: "Test",
  },
  image: {
    type: String,
  },
  location: {
    type: String,
  },
  certificate: [
    {
      type: String,
    },
  ],
});

var LabPartner = mongoose.model("LabPartner", LabPartnerSchema);
module.exports = LabPartner;
