// index.js
const express = require("express");
const app = express();
const port = 5000;
const {
  serviceConsultaPrecios,
  consultaMotosDisponibles,
} = require("./service.consulta.js");

app.get("/api/consultaPrecios", (req, res) => {
  const data = serviceConsultaPrecios();
  res.send(JSON.stringify(data));
});
app.get("/api/motosDisponibles/", (req, res) => {
  const data = consultaMotosDisponibles();
  res.send(JSON.stringify(data));
});

// Tarea: Crear un endpoint que reciba un id de moto y devuelva el precio de la misma
// Tarea: Crear un endpoint que reciba un id de moto y devuelva la moto
// Tarea: Crear un endpoint que reciba un id de moto y devuelva la moto y el precio
// Tarea: Mandarme un pull request con el codigo de la tarea
//pista para la tarea: https://expressjs.com/es/api.html#req.params
//pista 2, los precios estan ordenados igual que las motos, por lo que el primer precio es el de la primera moto, el segundo precio es el de la segunda moto, etc.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
