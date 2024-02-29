const paises = []

function nuevoPais(pais, callback) {
  paises.push(pais)
  console.log(`Agregado: ${pais}`)
  callback()
}

function mostrarPaises(){
  console.log(paises)
}

function iniciarCallBackHell(){
  setTimeout(() => {
    nuevoPais('Alemani', mostrarPaises)

    setTimeout(() => {
      nuevoPais('Peru', mostrarPaises)
      setTimeout(() => {
        nuevoPais('Francia', mostrarPaises)
      }, 3000);
    }, 3000);

  }, 3000);
}

iniciarCallBackHell()