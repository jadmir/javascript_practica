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

const producto4 = {
  nombre: "celular2",
  precio: 899
}

carrito.push(producto3)
carrito.push(producto4)

console.table(carrito)

// Eliminar ultimo elemento del arreglo 
//carrito.pop()
//console.table(carrito)

//Eliminar del inicio del arreglo
//carrito.shift()

//console.table(carrito)

carrito.splice(1, 1)
console.table(carrito)