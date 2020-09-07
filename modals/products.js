const mongoose = require('mongoose');

const labPartnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A product name must have less or equal then 40 characters'],
      minlength: [5, 'A product name must have more or equal then 5 characters']
    },
    price:{
      type:Number,
      required: [true, 'A product must have a price'],
    },
    discount:Number,
    product_brand:{
      type:String,
      required:[true,'A product must have a brand']
    },
    description:String,
    packing:String,
    image:String
);
