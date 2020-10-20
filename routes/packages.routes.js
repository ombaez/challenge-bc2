const express = require("express");
const {
  postPackages,
  checkoutPackages,
  getPackages,
} = require("../controllers/packages.controller");

const router = express.Router();

router.route("/checkout/:passengerId").post(checkoutPackages);
router.route("/").post(postPackages);
router.route("/").get(getPackages);

module.exports = router;
