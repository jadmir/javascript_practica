localStorage.removeItem('nombre')

//actualiza un registro
const producto = JSON.parse(localStorage.getItem('producto'))
console.log(producto)

localStorage.clear()