const Medicine = require("../modals/Medicine");
const _ = require("underscore");

const createMedicine = (req, res) => {
  var newMedicine = new Medicine(req.body);
  Medicine.findOne({ name: req.body.name })
    .then((medicine) => {
      if (medicine) {
        return res.json({ error: "Medicine already exists in database" });
      }
      newMedicine
        .save()
        .then((result) => {
          return res.json({
            message: "Medicine successfully added into DB.",
            result,
          });
        })
        .catch((err) => {
          console.log("ERRor in creating medicine controller", err);
          return res.json({ error: err });
        });
    })
    .catch((err) => {
      console.log("ERRor in creating medicine controller", err);
      return res.json({ error: err });
    });
};

// const updateMedicine = (req, res) => {
//   let medicine = req.medicine;
//   medicine = _.extend(medicine, req.body);
//   medicine
//     .save()
//     .then((result) => {
//       res.json({ message: "Successfully updated!", result });
//     })
//     .catch((err) => {
//       console.log("ERROR in updating medicine controller", err);
//       return res.json({ error: err });
//     });
// };

// const deleteMedicine = (req, res) => {
//   Medicine.deleteOne({ _id: req.medicine._id })
//     .then((result) => {
//       res.json({ message: "Medicine deleted successfully!", result });
//     })
//     .catch((err) => {
//       console.log("ERRRor in deleting the medicine controller", err);
//       res.json({ error: err });
//     });
// };

// const medicineById = (req, res, next, id) => {
//   Medicine.findById(id).exec((err, medicine) => {
//     if (!medicine || err) {
//       return res.json({ error: "Medicine Not Found!" });
//     }
//     req.medicine = medicine;
//     next();
//   });
// };

// const getAllMedicines = (req, res) => {
//   Medicine.find()
//     .then((medicine) => {
//       return res.json({ medicine });
//     })
//     .catch((err) => {
//       console.log("ERROr in getting all medicine controller", err);
//       res.json({ error: err });
//     });
// };

// const getMedicine = (req, res) => {
//   return res.json(req.medicine);
// };

module.exports = {
  createMedicine,
  // updateMedicine,
  // deleteMedicine,
  // medicineById,
  // getAllMedicines,
  // getMedicine,
};
