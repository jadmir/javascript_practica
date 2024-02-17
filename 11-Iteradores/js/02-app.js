for(let i = 0; i < 10; i++) {
  if(i === 5){
    console.log('CINCO')
    continue
  }
  console.log(`Numero ${i}`)
}

const carrito = [
  {nombre: "Monitor 27 pulgadas", precio: 500},
  {nombre: "telefono", precio: 400 , descuento: true},
  {nombre: "celular", precio: 800},
  {nombre: "teclado", precio: 50},
  {nombre: "audifonos", precio: 550},
]

for(let i = 0; i < carrito.length; i++ ) {
  if(carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} Tiene descuento`)
    continue
  }
  console.log(carrito[i].nombre)
}