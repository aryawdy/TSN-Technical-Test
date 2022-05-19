const router = require("express").Router();
const XenditController = require("../controllers/xenditController");

router.get("/", XenditController.checkBalanceAxios);
router.post("/", XenditController.createInvoice);
router.get("/:invoiceId", XenditController.getInvoice);
module.exports = router;
