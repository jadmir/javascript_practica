function Cliente(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
}

const juan = new Cliente('Juan', 500)

function formatearCLiente(cliente) {
    const {nombre , saldo} = cliente
    return `El cliente ${nombre} tiene de saldo: ${saldo}`
}

function formatearEmpresa(empresa) {
    const {nombre , saldo, categoria} = empresa
    return `El cliente ${nombre} tiene de saldo: ${saldo} y pertenece a la categoria ${categoria}`
}

console.log(formatearCLiente(juan))

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre
    this.saldo = saldo
    this.categoria = categoria
}

const CCJ = new Empresa('codigo con juan', 4000, 'Cursos en linea')

console.log(formatearEmpresa(CCJ))