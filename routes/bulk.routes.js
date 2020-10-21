const express = require("express");
const {
  createPassengers,
  deleteAll,
} = require("../controllers/bulk.controller");

const router = express.Router();

router.route("/create").get(createPassengers);
router.route("/delete").get(deleteAll);

module.exports = router;
