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

const updateMedicineOrder = (req, res) => {
  var order = req.medicineOrder;
  order.paymentResponse.push(...req.body.paymentResponse);
  order.status = req.body.status;
  order
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("ERROR in updating product order", err);
      res.json({ error: err });
    });
};

const medicineOrderById = (req, res, next, id) => {
  MedicineOrder.findOne(id).exec((err, medicineorder) => {
    if (!medicineorder || err) {
      res.json({ error: "NO order found with this id!" });
    }
    req.medicineOrder = medicineorder;
    next();
  });
};

module.exports = {
  createMedicineOrder,
  createProductOrder,
  updateMedicineOrder,
  medicineOrderById,
};
