var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("User", userSchema);
