const Transaction = require("../models/transaction");
const x = require("../config/xendit");
const axios = require("axios");
const User = require("../models/user");
const bufferObj = Buffer.from(process.env.API + ":", "utf8");
const base64String = bufferObj.toString("base64");

class XenditController {
  static async checkBalance(req, res, next) {
    try {
      console.log("TEST");
      const { Balance } = x;
      const b = new Balance({});
      const r = await b.getBalance({
        accountType: Balance.AccountType.Holding,
      });
      console.log(r);
      res.status(200).json(r);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async checkBalanceAxios(req, res, next) {
    try {
      const { data } = await axios.get("https://api.xendit.co/balance", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${base64String}`,
        },
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async createInvoice(req, res, next) {
    try {
      const { userId, amount, description } = req.body;
      const user = await User.findOne({ userId });

      console.log("TEST");
      const { data } = await axios.post(
        "https://api.xendit.co/v2/invoices",
        {
          external_id: userId + String(new Date() - 1),
          amount,
          description,
          payer_email: user.email,
          customer: {
            given_names: user.namaLengkap.split(" ")[0],
            surname: user.namaLengkap.split(" ")[1],
            email: user.email,
          },
          items: [
            {
              name: "Baju Dinas",
              quantity: 1,
              price: amount,
              category: "Baju",
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${base64String}`,
          },
        }
      );
      console.log(data);
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getInvoice(req, res, next) {
    try {
      const { invoiceId } = req.params;
      const { data } = await axios.get(
        `https://api.xendit.co/v2/invoices/${invoiceId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${base64String}`,
          },
        }
      );
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = XenditController;
