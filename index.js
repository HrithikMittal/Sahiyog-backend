const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser= require('cookie-parser');
const errorHandler= require('./middleware/error');
const auth = require('./routes/auth');

const labpartner=require('./routes/labpartner');


var app = express();
dotenv.config({path:'./config/config.env'});
const PORT = process.env.PORT||9090;

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("📦DB is connected successfully!");
  })
  .catch((err) => {
    console.log("Error in connecting to DB", err);
  });



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.use('/',auth);
app.use('/labpartner',labpartner)

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀Server is running on ${process.env.NODE_ENV} mode on  ${PORT}`);
});
