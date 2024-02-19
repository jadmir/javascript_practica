const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

// con foreach
let resultado2 = ''
carrito.forEach((producto, index) => {
  if(producto.nombre === 'Tablet') {
    resultado2 = carrito[index]
  }
})

console.log(resultado2)


// con ,find

let resultado

resultado = carrito.find((producto) => {
  return producto.nombre === 'Tablet'
})

console.log(resultado)