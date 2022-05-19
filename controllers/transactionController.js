const Transaction = require("../models/transaction");

class TransactionController {
  static async getTransaction(req, res, next) {
    try {
      const transactions = await Transaction.find();
      res.status(200).json({ transactions });
    } catch (error) {
      next(error);
    }
  }

  static async postTransaction(req, res, next) {
    try {
      const { userId, productId } = req.body;
      await Transaction.create({ userId, productId });
      res.status(201).json({ message: "New Transaction created" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TransactionController;
