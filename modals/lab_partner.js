const mongoose = require('mongoose');

const LabPartnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A lab partner must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A lab partner name must have less or equal then 40 characters'],
      minlength: [5, 'A lab partner name must have more or equal then 5 characters']
    },
    tests:[String],
    image:String,
    location:String,
    certificate:[String]
);
var labpartner = mongoose.model('LabPartner',LabPartnerSchema);
module.exports =labpartner;
