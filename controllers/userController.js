const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const validateEmail = require("../helpers/validateEmail");
const { signToken } = require("../helpers/jwt");

class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        throw new Error("INVALID_USER");
      }
      let isValid = comparePassword(password, user.password);
      if (!isValid) {
        throw new Error("INVALID_USER");
      }
      let token = signToken({
        id: user._id,
        email: user.email,
      });
      res.status(200).json({ access_token: token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { email, password, noHp, namaLengkap } = req.body;
      let obj = {
        email,
        password,
        noHp,
        namaLengkap,
      };
      await User.create(obj);
      res.status(201).json({ message: "User has been created" });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }
}

module.exports = UserController;
