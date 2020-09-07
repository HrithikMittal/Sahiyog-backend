const mongoose = require('mongoose');

const testSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A test must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A test name must have less or equal then 40 characters'],
      minlength: [5, 'A test name must have more or equal then 5 characters']
    },
    number_of_subtest: Number,
    price: {
      type: Number,
      required: [true, 'A test must have a price']
    },
    Discount:Number,
    labs:[String],
    sub_tests:[String],
    fasting_required:String,
    sample_type: {
      type: String,
      required: [true, 'A test must have a sample type']
    }
);
