const { Sequelize } = require("sequelize");
const db = new Sequelize("postgres://postgres@localhost:5432/challenge", {
  logging: false,
});

const connection = async () => {
  try {
    await db.sync({ force: false }).then((con) => {
      console.log(
        `${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`
      );
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connection, db };
