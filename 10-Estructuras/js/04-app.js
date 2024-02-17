const dinero = 300
const totalApagar= 500
const tarjeta = true

if(dinero >= totalApagar) {
  console.log('si se puede pagar')
} else if(tarjeta) {
  console.log('si se puede pagar tengo tarjeta')
} else {
  console.log('Fondos insuficiente')
}
