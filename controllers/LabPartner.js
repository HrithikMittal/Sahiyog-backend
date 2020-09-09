var _ = require("underscore");
const LabPartner = require("../modals/LabPartner");

const createLabPartner = (req, res) => {
  const newLab = new LabPartner(req.body);
  newLab
    .save()
    .then((lab) => {
      return res.json({ message: "Lab created successfully!", lab });
    })
    .catch((err) => {
      console.log("Error in creating lab partner", err);
      return res.json({ error: err });
    });
};

const updateLabPartner = (req, res) => {
  const labPartner = req.labPartner;
  labPartner = _.extend(labPartner, req.body);
  labPartner
    .save()
    .then((lab) => {
      return res.json({ message: "Lab update successfully!", lab });
    })
    .catch((err) => {
      console.log("Error in update lab partner", err);
      return res.json({ error: err });
    });
};

const deleteLabPartner = (req, res) => {
  LabPartner.deleteOne({ name: req.body.name })
    .then((lab) => {
      return res.json({ message: "Lab Deleted successfully!", lab });
    })
    .catch((err) => {
      console.log("Error in delete lab partner", err);
      return res.json({ error: err });
    });
};

const labPartnerById = (req, res, next, id) => {
  LabPartner.findById(id).exec((err, labPartner) => {
    if (err || !labPartner) {
      return res.json({ error: "Lab Not Found!" });
    }
    req.labPartner = labPartner;
    next();
  });
};

module.exports = {
  createLabPartner,
  labPartnerById,
  updateLabPartner,
  deleteLabPartner,
};
