const router = require("express").Router();
const userRoute = require("./userRoute");
const productRoute = require("./productRoute");
const cartRoute = require("./cartRoute");
const transactionRoute = require("./transactionRoute");
const xenditRoute = require("./xenditRoute");
const Authentication = require("../middlewares/auth");

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/transactions", transactionRoute);
router.use("/xendit", xenditRoute);
router.use(Authentication);
router.use("/carts", cartRoute);

module.exports = router;
