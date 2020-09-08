const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the username'],
    unique:true
  },
  password:{
    type:String,
    required:[true,'Please enter the password'],
    minlength:6
  },
  role:{
    type:Number,
    default:1
  }
});


userSchema.pre('save',async function(next){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});



userSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
};


userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
