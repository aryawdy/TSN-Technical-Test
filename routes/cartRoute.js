const router = require("express").Router();
const CartController = require("../controllers/cartController");

router.get("/", CartController.getCarts);
router.post("/", CartController.postCart);
module.exports = router;
