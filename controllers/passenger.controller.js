const Passenger = require("../models/Passenger");
const PassengerPackage = require("../models/PassengerPackage");
const Package = require("../models/Package");

module.exports = {
  getPassengerData: async (req, res) => {
    try {
      console.log(req.params, "booooooooooooooody");
      const passenger = await Passenger.findByPk(
        Number(req.params.passengerId),
        { raw: true }
      );

      if (!passenger) {
        return res.json({ msg: "No esta en la base" });
      }

      const packagesPassenger = await PassengerPackage.findAll({
        where: { passenger_id: String(passenger.id) },
      });

      if (!packagesPassenger.length) {
        return res.json({ ...passenger, msg: "No tiene equipaje cargado" });
      }
      const arrayEquipajes = await Promise.all(
        packagesPassenger[0].equipaje_id.map(async (equipaje) => {
          const equipajeItem = await Package.findByPk(String(equipaje));
          return {
            descripcion: equipajeItem.descripcion,
            tipo: equipajeItem.tipo,
            id: equipajeItem.id,
          };
        })
      );

      return res.json({
        ...passenger,
        arrayEquipajes,
        msg: `Tiene ${3 - arrayEquipajes.length} UN disponibles de equipaje`,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getAllPassengers: async (req, res) => {
    try {
      const all = await Passenger.findAll();
      return res.json(all);
    } catch (error) {
      console.log(error);
    }
  },
  getAllPassengersWithPackage: async (req, res) => {
    try {
      const all = await PassengerPackage.findAll({ raw: true });
      return res.send(all);
    } catch (error) {
      console.log(error);
    }
  },

  postPassenger: async (req, res) => {
    try {
      const { name, nroVuelo } = req.body;
      const newPassenger = await Passenger.create({ name, nroVuelo });
      return res.json(newPassenger);
    } catch (error) {
      console.log(error);
    }
  },
};
