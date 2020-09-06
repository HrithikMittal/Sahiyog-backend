const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("📦DB is connected successfully!");
  })
  .catch((err) => {
    console.log("Error in connecting to DB", err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var port = process.env.PORT;
app.listen(port, () => {
  console.log(`🚀Server is listening on ${port}`);
});
