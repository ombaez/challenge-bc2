const PassengerPackage = require("../models/PassengerPackage");
const Package = require("../models/Package");

module.exports = {
  postPackages: async (req, res) => {
    try {
      const { tipo, descripcion, passenger_id } = req.body;

      const newPackage = await Package.create({
        tipo,
        descripcion,
      });

      console.log(newPackage.id);

      const [passengerPackage, created] = await PassengerPackage.findOrCreate({
        where: { passenger_id: passenger_id },
        defaults: {
          equipaje_id: [newPackage.id],
          passenger_id: passenger_id,
        },
      });

      if (created == true) {
        console.log("de 0");
        return res.json(passengerPackage);
      } else {
        console.log("busca");
        const findJoinedRegister = await PassengerPackage.findAll({
          where: {
            passenger_id: passenger_id,
          },
        });

        const arrayEquipaje = findJoinedRegister[0].equipaje_id;
        const newArray = [...arrayEquipaje, newPackage.id];

        if (newArray.length < 4) {
          const updateJoinedRegister = await PassengerPackage.update(
            { equipaje_id: newArray },
            {
              where: {
                passenger_id: req.body.passenger_id,
              },
              returning: true,
              plain: true,
            }
          );

          return res.json(updateJoinedRegister[1]);
        } else {
          await Package.destroy({
            where: {
              id: newPackage.id,
            },
          });
          return res.json({ findJoinedRegister, max: true });
        }
      }
    } catch (error) {
      return res.json(error);
    }
  },
  getPackages: async (req, res) => {
    try {
      const allPackages = await Package.findAll({});
      return res.json(allPackages);
    } catch (error) {
      console.log(error);
    }
  },
  checkoutPackages: async (req, res) => {
    try {
      const { passenger_id } = req.body;

      const checkPassenger = await PassengerPackage.findByPk(passenger_id, {
        raw: true,
      });

      console.log(checkPassenger);

      if (!checkPassenger) {
        return res.json({ msg: "Este pasajero no tiene equipaje declarado" });
      }

      const passenger = await PassengerPackage.update(
        { equipaje_id: [] },
        {
          where: { passenger_id: passenger_id },
          returning: true,
          plain: true,
        }
      );

      return res.json(passenger);
    } catch (error) {
      console.log(error);
    }
  },
};
