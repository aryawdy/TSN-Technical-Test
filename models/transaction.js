const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    productId: {
      type: String,
    },
    origin_details: {
      city_id: String,
      province_id: String,
      province: String,
      type: String,
      city_name: String,
      postal_code: String,
    },
    destination_details: {
      city_id: String,
      province_id: String,
      province: String,
      type: String,
      city_name: String,
      postal_code: String,
    },
    service_ongkir: {
      service: String,
      description: String,
      cost: {
        value: Number,
        etd: String,
        note: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", transactionSchema);
