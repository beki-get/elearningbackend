const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// POST /api/payments/checkout
router.post("/checkout", paymentController.createCheckoutSession);

module.exports = router;
