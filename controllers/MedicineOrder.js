const MedicineOrder = require("../modals/MedicineOrder");

const createMedicineOrder = (req, res) => {
  var newMedicineOrder = new MedicineOrder(req.body);
  newMedicineOrder.user = req.user;
  newMedicineOrder.medicine = req.medicine;
  newMedicineOrder
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("ERROR in saving medicine order", err);
      res.json({ error: err });
    });
};

const createProductOrder = (req, res) => {
  var newMedicineOrder = new MedicineOrder(req.body);
  newMedicineOrder.user = req.user;
  newMedicineOrder.product = req.product;
  newMedicineOrder
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("ERROR in saving product order", err);
      res.json({ error: err });
    });
};

module.exports = { createMedicineOrder, createProductOrder };
