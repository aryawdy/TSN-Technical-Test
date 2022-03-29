const jwt = require("jsonwebtoken");
const SECRET_KEY = "ji9yu18h*(UY@*#j9";

const signToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY);
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

module.exports = {
  signToken,
  verifyToken,
};
