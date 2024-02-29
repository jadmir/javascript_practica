const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = false

  if(descuento){
    resolve('Descuento aplicado')
  }else {
    reject('no hay decuento')
  }
})
aplicarDescuento.then(resultado => {
  console.log(resultado)
}).catch(error => {
  console.log(error)
})