const express = require("express");
const router = express.Router();

const packageController = require("../controllers/Package");

router.post("/createLab", packageController.createPackage);
router.put("/updateLab/:packageId", packageController.createPackage);
router.delete("/deletePartner/:packageId", packageController.deletePackage);
router.get("/getAllPackage", packageController.getAllPackages);
router.get("/getPackage/:packageId", packageController.getPackage);

router.param("packageId", packageController.packageById);

module.exports = router;
