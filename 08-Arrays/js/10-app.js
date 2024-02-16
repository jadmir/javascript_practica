const carrito = [
  {nombre: "Monitor 27 pulgadas", precio: 500},
  {nombre: "telefono", precio: 400},
  {nombre: "celular", precio: 800},
  {nombre: "teclado", precio: 50},
  {nombre: "audifonos", precio: 550},
]


carrito.forEach( function(producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`)
})

carrito.map( function(producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`)
})

