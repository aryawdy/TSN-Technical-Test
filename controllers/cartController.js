const Cart = require("../models/cart");

class CartController {
  static async postCart(req, res, next) {
    try {
      const { name, price, imageUrl, size, gender } = req.body;
      const User = req.userLogin.id;

      await Cart.create({ name, price, imageUrl, size, gender, User });
      res.status(201).json({ message: "Product has been added to cart" });
    } catch (error) {
      next(error);
    }
  }

  static async getCarts(req, res, next) {
    try {
      let carts = await Cart.where("User")
        .equals(req.userLogin.id)
        .populate("User");

      res.status(200).json(carts);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = CartController;
