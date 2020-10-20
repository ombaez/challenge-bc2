const { DataTypes } = require("sequelize");
const { db } = require("../db/config");

const Passenger = db.define("Passenger", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nroVuelo: {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
});

module.exports = Passenger;
