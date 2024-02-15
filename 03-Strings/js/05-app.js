const producto = "Monitor 20 pulgadas"

// .replace para remplazar
console.log(producto)
console.log(producto.replace('pugadas', '"'))
console.log(producto.replace('Monitor', 'Monitor Curvo'))

// .slice para cortar
console.log(producto.slice(0, 10 ))
console.log(producto.slice(8 ))
console.log(producto.slice(2, 1 ))

// Alternativa de slice
console.log(producto.substring(0, 10))


const usuario = "jadmir"

console.log(usuario.substring(0, 1))
console.log(usuario.charAt(0))