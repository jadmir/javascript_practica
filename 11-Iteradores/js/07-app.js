const pendientes = ['Tarea', 'Comer', 'Trabajar en mi proyecto', 'Estidando JavaScript']

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "telefono", precio: 400},
    {nombre: "celular", precio: 800},
    {nombre: "teclado", precio: 50},
    {nombre: "audifonos", precio: 550},
]

for(let pendiente of pendientes) {
    console.log(pendiente)
}

for(let producto of carrito) {
    console.log(producto.nombre)
}
