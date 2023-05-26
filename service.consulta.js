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

function consultarMotoPorid(id){
  let motos = obtenerMotos()
  if(motos.length >=  id){
    return motos[id]
  }
  return -1
}

function consultarPrecioPorIdMoto(id){
  let precios = obtenerPrecios()
  if(precios.length >=  id){
    return precios[id]
  }
  return -1
}

function consultarMotoyPrecio(id){
  let precios = obtenerPrecios()
  let motos = obtenerMotos()
  if(precios.length >= id){
    return respuesta = {"Moto":motos[id], "Precios":precios[id]}
  }
  return -1
}
module.exports = {serviceConsultaPrecios, consultaMotosDisponibles, consultarMotoPorid, consultarPrecioPorIdMoto, consultarMotoyPrecio};
