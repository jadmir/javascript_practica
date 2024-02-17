//for(let i = 0; i < 10; i++) {
//  console.log(`Numero ${i}`)
//}

//for(let i = 0; i <= 20; i++) {
//  if(i % 2 === 0) {
//    console.log(`El numero ${i} es Par`)
//  } else {
//    console.log(`El numero ${i} es Inpar`)
//  }
//}

const carrito = [
  {nombre: "Monitor 27 pulgadas", precio: 500},
  {nombre: "telefono", precio: 400},
  {nombre: "celular", precio: 800},
  {nombre: "teclado", precio: 50},
  {nombre: "audifonos", precio: 550},
]

for(let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre)
}

for(let i = 1; i <= 30; i++) {
  if(i % 3=== 0) {
    console.log(`El numero es ${i} multiplo de 3`)
  }
}

for(let i = 1; i <= 200; i++) {
  if(i % 4 === 0) {
    console.log(`El numero es ${i} multiplo de 4`)
  }
}