localStorage.setItem('nombre' , 'jadmir')

const producto = {
  nombre: 'jadmir vicente',
  precio: 300
}

const productoString = JSON.stringify(producto)
console.log(productoString)
localStorage.setItem('producto', productoString)