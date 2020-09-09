const express = require("express");
const router = express.Router();

const labPartnerController = require("../controllers/LabPartner");

router.post("/createLab", labPartnerController.createLabPartner);
router.put("/updateLab/:labPartnerId", labPartnerController.createLabPartner);
router.delete(
  "/deletePartner/:labPartnerId",
  labPartnerController.deleteLabPartner
);
router.get("/getAllLabPartner", labPartnerController.getAllLabPartner);
router.get("/getLabPartner/:labPartnerId", labPartnerController.getLabPartner);

router.param("labPartnerId", labPartnerController.labPartnerById);

module.exports = router;
