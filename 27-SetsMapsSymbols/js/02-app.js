//WeakSet

const weakset = new WeakSet()

const cliente = {
  nombre: 'jadmir',
  saldo: 100
}

weakset.add(cliente)
console.log(weakset)

