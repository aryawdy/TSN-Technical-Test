const { verifyToken } = require("../helpers/jwt");
const User = require("../models/user");

const Authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    let payload = verifyToken(access_token);
    let user = await User.findOne({ email: payload.email });
    if (!user) {
      throw new Error("INVALID_TOKEN");
    }
    req.userLogin = {
      id: user._id,
      email: user.email,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = Authentication;
