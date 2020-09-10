const express = require("express");
const router = express.Router();

const medicineOrderController = require("../controllers/MedicineOrder");
const medicineController = require("../controllers/Medicine");
const productController = require("../controllers/Product");
const userController = require("../controllers/User");

router.post(
  "/createMedicineOrder/:userId/:medicineId",
  medicineOrderController.createMedicineOrder
);

router.post(
  "/createProductOrder/:userId/:productId",
  medicineOrderController.createProductOrder
);

router.put(
  "/updateMedicineOrder/:medicineOrderId",
  medicineOrderController.updateMedicineOrder
);
router.put(
  "/updateProductOrder/:medicineOrderId",
  medicineOrderController.updateMedicineOrder
);

router.param("userId", userController.userById);
router.param("medicineId", medicineController.medicineById);
router.param("productId", productController.productById);
router.param("medicineOrderId", medicineOrderController.medicineOrderById);

module.exports = router;
