const express = require("express");
const router = express.Router();

const medicineController = require("../controllers/Medicine");

// router.post("/createMedicine", medicineController.createMedicine);
// router.put("/updateMedicine/:medicineId", medicineController.updateMedicine);
// router.delete("/deleteMedicine/:medicineId", medicineController.deleteMedicine);

// router.get("/getAllMedicines", medicineController.getAllMedicines);
// router.get("/getMedicine/:medicineId", medicineController.getMedicine);

// router.param("medicineId", medicineController.medicineById);

module.exports = router;
