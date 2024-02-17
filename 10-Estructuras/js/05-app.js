//Switch case

const meetodoPago = 'tarjeta'

switch(meetodoPago){
  case 'efectivo':
      console.log(`Pagaste con ${meetodoPago}`)
      break
  case 'cheque':
      console.log(`Pagaste con ${meetodoPago}`)
      break    
  case 'tarjeta':
      console.log(`Pagaste con ${meetodoPago}`)
      break    
  default:
      console.log('aun no has seleccionado un metodo de pago')
      break
}