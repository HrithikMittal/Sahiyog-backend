const mongoose = require('mongoose');

const labPartnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A medicine must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A medicine name must have less or equal then 40 characters'],
      minlength: [5, 'A medicine name must have more or equal then 5 characters']
    },
    rx_required:Boolean,
    price:Number,
    packing:String,
    discount:Number,
    composition:String,
    Brand_name:String,
    image:String,
    validated:Boolean
);
