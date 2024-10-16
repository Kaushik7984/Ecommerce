const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controller/paymentController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/stripeapikey").get(sendStripeApiKey);

module.exports = router;
