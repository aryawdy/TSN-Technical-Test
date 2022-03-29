const router = require("express").Router();
const userRoute = require("./userRoute");
const productRoute = require("./productRoute");
const cartRoute = require("./cartRoute");
const Authentication = require("../middlewares/auth");

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use(Authentication);
router.use("/carts", cartRoute);

module.exports = router;
