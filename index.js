const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var app = express();
dotenv.config();
var port = process.env.PORT;

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

var userRoute = require("./routes/User");

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`🚀Server is listening on ${port}`);
});
