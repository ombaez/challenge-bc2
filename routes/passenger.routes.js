const express = require("express");
const {
  getPassengerData,
  getAllPassengers,
  postPassenger,
  getAllPassengersWithPackage,
  
} = require("../controllers/passenger.controller");

const router = express.Router();

router.route("/with-package").get(getAllPassengersWithPackage);
router.route("/:passengerId").get(getPassengerData);
router.route("/").get(getAllPassengers);
router.route("/").post(postPassenger);

module.exports = router;
