const express = require("express");
const OrderController = require("../controllers/OrderController");
const {
  accessTokenAutoRefresh,
} = require("../middleware/accessTokenAutoRefresh");
const router = express.Router();
const passport = require("passport");

// Public route Order
router.route("/create-order").post(OrderController.createOrder);
router.route("/order-detail/${orderId}").get(OrderController.getOrderDetail);

router
  .route("/all-order")
  .get(
    accessTokenAutoRefresh,
    passport.authenticate("jwt", { session: false }),
    OrderController.getOrder
  );

router
  .route("/update-order")
  .put(
    accessTokenAutoRefresh,
    passport.authenticate("jwt", { session: false }),
    OrderController.updateOrder
  );

module.exports = router;
