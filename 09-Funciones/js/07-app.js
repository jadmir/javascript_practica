inicarApp()
function inicarApp() {
    console.log('Iniciando app')
    segundaFuncion()
}


function segundaFuncion() {
    console.log('desde la segunda funcion')
    usuarioUtenticado('jadmir')
}


function usuarioUtenticado(usuario) {
    console.log('Autenticando usuario... espere...')
    console.log(`Usuario autenticado exitosamente: ${usuario}`)
}
