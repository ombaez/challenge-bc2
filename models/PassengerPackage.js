const { DataTypes } = require("sequelize");
const { db } = require("../db/config");

const PassengerPackage = db.define(
  "PassengerPackage",
  {
    passenger_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    equipaje_id: {
      type: DataTypes.ARRAY((DataTypes.STRING)),
      allowNull: true,
    },
  },
);

module.exports = PassengerPackage;