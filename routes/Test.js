const express = require("express");
const router = express.Router();

const testController = require("../controllers/Test");

router.post("/createTest", testController.createTest);
router.put("/updateTest/:testId", testController.updateTest);
router.delete("/deleteTest/:testId", testController.deleteTest);
router.get("/getAllTest", testController.getAllTest);
router.get("/getTest/:testId", testController.getTest);

router.param("testId", testController.testById);

module.exports = router;
