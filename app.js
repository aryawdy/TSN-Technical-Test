require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);
app.use(errorHandler);

const mongoose = require("mongoose");
const { config } = require("dotenv");
const mongoDB =
  "mongodb+srv://arya:TXazVM1fJ5XHzcPC@cluster0.ngdjf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
