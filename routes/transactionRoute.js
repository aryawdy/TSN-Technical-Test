const router = require("express").Router();
const TransactionController = require("../controllers/transactionController");

router.get("/", TransactionController.getTransaction);
router.post("/", TransactionController.postTransaction);

module.exports = router;
