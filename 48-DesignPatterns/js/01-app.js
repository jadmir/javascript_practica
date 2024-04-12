// class pattern 
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre
        this.email = email
    }
}

const persona = new Persona('juan', 'correo@correo.com')

console.log(persona)