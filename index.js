const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./db/config");
const bulkRouter = require("./routes/bulk.routes");
const packagesRouter = require("./routes/packages.routes");
const passengerRouter = require("./routes/passenger.routes");
const port = 8080;

app.use(cors());
app.use(express.json());
app.use("/bulk", bulkRouter);
app.use("/packages", packagesRouter);
app.use("/passengers", passengerRouter);

connection();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
