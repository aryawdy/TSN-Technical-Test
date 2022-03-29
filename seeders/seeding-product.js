const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://arya:TXazVM1fJ5XHzcPC@cluster0.ngdjf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
let products = require("../product.json");
let Product = require("../models/product");
// users.forEach()

async function run() {
  try {
    await Product.insertMany(products);
  } catch (error) {
    console.log(error);
  }
}

run();
