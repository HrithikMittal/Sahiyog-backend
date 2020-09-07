const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
    unique: true,
    trim: true,
    maxlength: [
      40,
      "A product name must have less or equal then 40 characters",
    ],
    minlength: [5, "A product name must have more or equal then 5 characters"],
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  product_brand: {
    type: String,
    required: [true, "A product must have a brand"],
  },
  description: {
    type: String,
  },
  packing: {
    type: String,
  },
  image: {
    type: String,
  },
});

var Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
