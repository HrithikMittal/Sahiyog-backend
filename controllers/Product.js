const _ = require("underscore");
const Product = require("../modals/Product");

const createProduct = (req, res) => {
  var newProduct = new Product(req.body);
  Product.findOne({ name: req.body.name })
    .then((product) => {
      if (product) {
        return res.json({ error: "Product already exists in database" });
      }
      newProduct
        .save()
        .then((result) => {
          return res.json({
            message: "Product successfully added into DB.",
            result,
          });
        })
        .catch((err) => {
          console.log("ERRor in creating product controller", err);
          return res.json({ error: err });
        });
    })
    .catch((err) => {
      console.log("ERRor in creating product controller", err);
      return res.json({ error: err });
    });
};

const updateProduct = (req, res) => {
  let product = req.product;
  product = _.extend(product, req.body);
  product
    .save()
    .then((result) => {
      res.json({ message: "Successfully updated!", result });
    })
    .catch((err) => {
      console.log("ERROR in updating product controller", err);
      return res.json({ error: err });
    });
};

const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.product._id })
    .then((result) => {
      res.json({ message: "Product deleted successfully!", result });
    })
    .catch((err) => {
      console.log("ERRRor in deleting the product controller", err);
      res.json({ error: err });
    });
};

const productById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (!product || err) {
      return res.json({ error: "Product Not Found!" });
    }
    req.product = product;
    next();
  });
};

const getAllProducts = (req, res) => {
  Product.find()
    .then((product) => {
      return res.json({ product });
    })
    .catch((err) => {
      console.log("ERROr in getting all product controller", err);
      res.json({ error: err });
    });
};

const getProduct = (req, res) => {
  return res.json(req.product);
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  productById,
  getAllProducts,
  getProduct,
};
