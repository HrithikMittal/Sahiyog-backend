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

module.exports = { createLabPartner };
