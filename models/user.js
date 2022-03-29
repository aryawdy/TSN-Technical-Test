// const { getDatabase } = require("../config/mongoConnection");

// class User {
//   static async created(obj) {
//     const db = getDatabase();
//     db.collection("Users").createIndex({ email: 1 }, { unique: true });
//     let create = db.collection("Users").insertOne({
//       namaLengkap: obj.namaLengkap,
//       email: obj.email,
//       password: obj.password,
//       noHp: obj.noHp,
//     });
//     return create;
//   }

//   static findOne(email) {
//     const db = getDatabase();
//     let find = db.collection("Users").findOne({ email });
//     return find;
//   }
// }
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

module.exports = mongoose.model("User", userSchema);
