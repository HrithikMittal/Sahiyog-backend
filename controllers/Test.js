const _ = require("underscore");
const Test = require("../modals/Test");

const createTest = (req, res) => {
  const newTest = new Test(req.body);
  newTest
    .save()
    .then((data) => {
      res.json({ message: "Test created successfully!", data });
    })
    .catch((err) => {
      console.log("Error in creating test", err);
      return res.json({ error: err });
    });
};

const updateTest = (req, res) => {
  var test = req.test;
  test = _.extend(test, req.body);
  test
    .save()
    .then((data) => {
      res.json({ message: "Test updated successfully!", data });
    })
    .catch((err) => {
      console.log("Error in updating test", err);
      return res.json({ error: err });
    });
};

const deleteTest = (req, res) => {
  Test.deleteOne({ _id: req.test._id })
    .then((lab) => {
      return res.json({ message: "Test Deleted successfully!", lab });
    })
    .catch((err) => {
      console.log("Error in delete test", err);
      return res.json({ error: err });
    });
};

const testById = (req, res, next, id) => {
  Test.findById(id).exec((err, test) => {
    if (err || !test) {
      return res.json({ error: "Test Not Found!" });
    }
    req.test = test;
    next();
  });
};

module.exports = {
  createTest,
  updateTest,
  deleteTest,
  testById,
};
