const _ = require("underscore");
const Package = require("../modals/Package");

const createPackage = (req, res) => {
  var newPackage = new Package(req.body);
  Package.findOne({ name: req.body.name })
    .then((package) => {
      if (package) {
        return res.json({ error: "Package already exists in database" });
      }
      newPackage
        .save()
        .then((result) => {
          return res.json({
            message: "Package successfully added into DB.",
            result,
          });
        })
        .catch((err) => {
          console.log("ERRor in creating package controller", err);
          return res.json({ error: err });
        });
    })
    .catch((err) => {
      console.log("ERRor in creating package controller", err);
      return res.json({ error: err });
    });
};

const updatePackage = (req, res) => {
  let package = req.package;
  package = _.extend(package, req.body);
  package
    .save()
    .then((result) => {
      res.json({ message: "Successfully updated!", result });
    })
    .catch((err) => {
      console.log("ERROR in updating package controller", err);
      return res.json({ error: err });
    });
};

const deletePackage = (req, res) => {
  Package.deleteOne({ _id: req.package._id })
    .then((result) => {
      res.json({ message: "Package deleted successfully!", result });
    })
    .catch((err) => {
      console.log("ERRRor in deleting the package controller", err);
      res.json({ error: err });
    });
};

const packageById = (req, res, next, id) => {
  Package.findById(id).exec((err, package) => {
    if (!package || err) {
      return res.json({ error: "Package Not Found!" });
    }
    req.package = package;
    next();
  });
};

const getAllPackages = (req, res) => {
  Package.find()
    .then((package) => {
      return res.json({ package });
    })
    .catch((err) => {
      console.log("ERROr in getting all package controller", err);
      res.json({ error: err });
    });
};

const getPackage = (req, res) => {
  return res.json(req.package);
};

module.exports = {
  createPackage,
  updatePackage,
  deletePackage,
  packageById,
  getAllPackages,
  getPackage,
};
