const Xendit = require("xendit-node");
const x = new Xendit({
  secretKey: process.env.API,
});

module.exports = x;
