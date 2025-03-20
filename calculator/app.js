const express = require("express");
const numberRoutes = require("./routes/numberRoutes");

const app = express();

app.use(express.json());

app.use("/", numberRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

module.exports = app;
