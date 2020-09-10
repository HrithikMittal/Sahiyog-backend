const mongoose = require("mongoose");
var { ObjectId } = mongoose.Schema;

const PackageSchema = new mongoose.Schema({
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

var Package = mongoose.model("Package", PackageSchema);
module.exports = Package;
