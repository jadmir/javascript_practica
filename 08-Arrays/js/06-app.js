const carrito = []

//Definir un producto
const producto = {
  nombre: "Monitor de 32 pulgadas",
  precio: 400
}

const producto2 = {
  nombre: "celular",
  precio: 800
}

const producto3 = {
  nombre: "teclado",
  precio: 50
}

let resultado = [...carrito, producto, producto2]

console.table(resultado)