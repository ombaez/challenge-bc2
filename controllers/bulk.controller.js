const Passenger = require("../models/Passenger");
const PassengerPackage = require("../models/PassengerPackage");
const Package = require("../models/Package");

module.exports = {
  createPassengers: async (req, res) => {
    try {
      const created = await Passenger.bulkCreate([
        { name: "Omar", nroVuelo: "12345" },
        { name: "Dahi", nroVuelo: "12345" },
        { name: "Pepe", nroVuelo: "12345" },
        { name: "Juan", nroVuelo: "12345" },
        { name: "Camila", nroVuelo: "98765" },
        { name: "Yngwie", nroVuelo: "98765" },
        { name: "Eddie", nroVuelo: "98765" },
      ]);

      console.log(created);
      return res.json(created);
    } catch (error) {
      console.log(error);
    }
  },
  deleteAll: async (req, res) => {
    try {
      const del1 = await Passenger.destroy({
        truncate: true,
        restartIdentity: true,
      });
      const del2 = await PassengerPackage.destroy({
        truncate: true,
        restartIdentity: true,
      });
      const del3 = await Package.destroy({
        truncate: true,
        restartIdentity: true,
      });

      return res.json({ del1, del2, del3 });
    } catch (error) {
      console.log(error);
    }
  },
};
