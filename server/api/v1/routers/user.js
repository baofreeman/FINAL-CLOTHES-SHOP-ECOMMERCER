const express = require("express");
const UserController = require("../controllers/UserController");
const {
  accessTokenAutoRefresh,
} = require("../middleware/accessTokenAutoRefresh");
const router = express.Router();
const passport = require("passport");

// Public route Order
router
  .route("/all-user")
  .get(
    accessTokenAutoRefresh,
    passport.authenticate("jwt", { session: false }),
    UserController.getUsers
  );
router
  .route("/update-user")
  .put(
    accessTokenAutoRefresh,
    passport.authenticate("jwt", { session: false }),
    UserController.updateUser
  );
router
  .route("/delete-user/:userId")
  .delete(
    accessTokenAutoRefresh,
    passport.authenticate("jwt", { session: false }),
    UserController.deleteUser
  );

module.exports = router;
