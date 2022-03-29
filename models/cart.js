const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: String,
  price: Number,
  imageUrl: String,
  size: String,
  gender: String,
  User: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Cart", cartSchema);
