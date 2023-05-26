const obtenerPrecios = require("./repository.precios.js");
const obtenerMotos = require("./repository.moto.js");
function serviceConsultaPrecios() {
  let precios = obtenerPrecios();
  let motos = obtenerMotos();
  const data = motos.map((moto, index) => {
    return { moto, precio: precios[index] };
  });
  return data;
}

function consultaMotosDisponibles() {
  let motos = obtenerMotos();
  return motos;
}
module.exports = {serviceConsultaPrecios, consultaMotosDisponibles};
