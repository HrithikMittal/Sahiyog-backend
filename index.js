const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("📦 DB is connected successfully!");
  })
  .catch((err) => {
    console.log("Error in connecting to DB", err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRoute = require("./routes/User");
const adminRoute = require("./routes/Admin");
const medicineRoute = require("./routes/Medicine");
// const labPartnerRoute = require("./routes/LabPartner");
// const productRoute = require("./routes/Product");
// const testRoute = require("./routes/Test");
// const packageRoute = require("./routes/Package");

app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/medicine", medicineRoute);
// app.use("/labpartner", labPartnerRoute);
// app.use("/product", productRoute);
// app.use("/test", testRoute);
// app.use("/package", packageRoute);

var data = require("./docs/home.json");
app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`🚀 Server is listening on ${port}`);
});
