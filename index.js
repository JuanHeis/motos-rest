// index.js
const express = require("express");
const app = express();
const port = 5000;
const {serviceConsultaPrecios, consultaMotosDisponibles} = require("./service.consulta.js");

app.get("/api/consultaPrecios", (req, res) => {
  const data = serviceConsultaPrecios();
  res.send(JSON.stringify(data));
});
app.get("/api/motosDisponibles/", (req, res) => {
  const data = consultaMotosDisponibles();
  res.send(JSON.stringify(data));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
