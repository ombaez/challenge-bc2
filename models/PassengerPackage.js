const { DataTypes } = require("sequelize");
const { db } = require("../db/config");

const PassengerPackage = db.define(
  "passenger-package",
  {
    passenger_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    equipaje_id: {
      type: DataTypes.ARRAY((DataTypes.STRING)),
      allowNull: true,
    },
  },
);

module.exports = PassengerPackage;