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

carrito.push(producto)
carrito.push(producto2)

const producto3 = {
  nombre: "teclado",
  precio: 50
}

carrito.push(producto3)

console.table(carrito)