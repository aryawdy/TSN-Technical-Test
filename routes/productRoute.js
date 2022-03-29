const router = require("express").Router();
const ProductController = require("../controllers/productController");
router.get("/", ProductController.getProducts);
router.get("/:_id", ProductController.getProduct);
module.exports = router;
