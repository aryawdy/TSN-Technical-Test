const Product = require("../models/product");
const { ObjectId } = require("mongodb");
const User = require("../models/user");
class ProductController {
  static async getProducts(req, res, next) {
    try {
      let products = await Product.find();
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  static async getProduct(req, res, next) {
    try {
      const { _id } = req.params;
      let products = await Product.findOne({ _id: ObjectId(_id) });
      if (!products) {
        throw new Error("PRODUCT_NOT_FOUND");
      }
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
