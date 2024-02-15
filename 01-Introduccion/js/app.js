//alert('hola mundo');
alert('nuevo 2');
alert('tercer para guardar')

/*console.log('hola mundo')
console.log('segundo hola mundo ')*/

//pregunta al usuario su datos
const nombre = prompt('cual es tu nombre')
const apellido = prompt('cual es tu apellido')
const aprende = prompt('dime que quieres aprender?')

//Toma los nombre, apellido o aprende y los muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JavaScript moderno`
document.querySelector('.contenido2').innerHTML = `${apellido} esta es el apellido`
document.querySelector('.contenido3').innerHTML = `${aprende} esto aprendes`

//Asigna el valor hacia la variable producto
const producto = 'pantalla de 24 pulgadas'