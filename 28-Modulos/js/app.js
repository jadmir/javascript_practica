import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
//import { Empresa } from "./empresa.js";

nuevaFuncion()

console.log(nombreCliente)
console.log(ahorro)
console.log(mostrarInformacion(nombreCliente, ahorro))

tieneSaldo(ahorro)

const cliente = new Cliente(nombreCliente, ahorro)
console.log(cliente.mostrarInformacion())

//importa empresa


//const empresa = new Empresa('codigo con este', 100, 'aprendiendo')
//console.log(empresa)

