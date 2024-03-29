const express = require("express");
// const Product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;