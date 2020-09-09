const express = require("express");
const router = express.Router();

const labPartnerController = require("../controllers/LabPartner");
router.post("/createLab", labPartnerController.createLabPartner);

module.exports = router;
