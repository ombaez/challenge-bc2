const Passenger = require("../models/Passenger");
const PassengerPackage = require("../models/PassengerPackage");
const Package = require("../models/Package");

module.exports = {
  getPassengerData: async (req, res) => {
    try {
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
        return res.json({
          ...passenger,
          msg: "Tiene 3 UN disponibles de equipaje",
        });
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
      const all = await PassengerPackage.findAll();

      const allWithPackage = all.reduce((result, passengerPackage) => {
        if (passengerPackage.equipaje_id.length > 0) {
          result.push(passengerPackage);
        }
        return result;
      }, []);

      const passengerWithPackage = await Promise.all(
        allWithPackage.map(async (passenger) => {
          const arrayPackage = await Promise.all(
            passenger.equipaje_id.map(async (id) => {
              const package = await Package.findByPk(id);
              return package;
            })
          );

          const passengerIdentified = await Passenger.findByPk(
            passenger.passenger_id,
            { raw: true }
          );
          return { ...passengerIdentified, arrayPackage };
        })
      );

      return res.json({ all, passengerWithPackage });
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
      return res.json(error.message);
    }
  },
};
