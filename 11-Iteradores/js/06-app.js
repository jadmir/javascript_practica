// forEach

const pendientes = ['Tarea', 'Comer', 'Trabajar en mi proyecto', 'Estidando JavaScript']

pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`)
})

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "telefono", precio: 400},
    {nombre: "celular", precio: 800},
    {nombre: "teclado", precio: 50},
    {nombre: "audifonos", precio: 550},
]

  
carrito.forEach((producto) => {
    console.log(producto.precio)
})


carrito.map((producto2) => {
    console.log(producto2.nombre)
})