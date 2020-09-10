const express = require("express");
const router = express.Router();

const productController = require("../controllers/Product");

router.post("/createProduct", productController.createProduct);
router.put("/updateProduct/:productId", productController.updateProduct);
router.delete("/deleteProduct/:productId", productController.deleteProduct);
router.get("/getAllProducts", productController.getAllProducts);
router.get("/getProduct/:productId", productController.getProduct);

router.param("productId", productController.productById);

module.exports = router;
