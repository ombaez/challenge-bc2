const { DataTypes } = require("sequelize");
const { db } = require("../db/config");

const Package = db.define("package", {
  tipo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});


module.exports = Package;
