// Singleton

let instancia = null

class Persona {
    constructor(nombre, email) {
        if(!instancia) {
            this.nombre = nombre
            this.email = email
            instancia = this
        } else {
            return instancia
        }
    }
}

const persona = new Persona('juan', 'correo.comrre')
console.log(persona)

const persona2 = new Persona('asd', 'asd.ad')
console.log(persona2)