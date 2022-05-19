const validateEmail = require("../helpers/validateEmail");
const mongoose = require("mongoose");
const { hashPassword } = require("../helpers/bcrypt");

const userSchema = new mongoose.Schema({
  namaLengkap: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, "Invalid email"],
  },
  password: {
    type: String,
    required: true,
  },
  noHp: {
    type: String,
    required: true,
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

userSchema.pre("save", function (next) {
  this.password = hashPassword(this.password);
  next();
});

userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("User", userSchema);
