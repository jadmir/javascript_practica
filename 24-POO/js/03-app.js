class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
  }

  mostrarInformacion() { //metodo
    return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
  }

  static bienvenida() {
    return `bienvenido al cajero`
  }
}

//herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo)
    this.telefono = telefono
    this.categoria = categoria
  }

  static bienvenida() {
    return `Bienvenido al cajero de empresas`
  }
}

const juan = new Cliente('Juan', 400)
const empresa = new Empresa('codigo con este', 500, 12341231, 'aprendiendo')
console.log(empresa.mostrarInformacion())
console.log(Cliente.bienvenida())
console.log(Empresa.bienvenida())