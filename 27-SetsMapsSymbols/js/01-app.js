const carrito = new Set()

carrito.add('Camisa')
carrito.add('Disco1')
carrito.add('Disco2')
carrito.add('Disco3')

carrito.delete('Disco3')

console.log(carrito.size)

//console.log(carrito.has('Guitarra'))

carrito.forEach(producto => {
  console.log(producto)
})

console.log(carrito)


// del siguiente arreglo eliminar los duplicados
const muneros = [10, 20,30,40,50,10,20]
const noDuplicados = new Set(muneros)
console.log(noDuplicados)
