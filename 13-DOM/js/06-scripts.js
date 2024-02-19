const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado)

//console.log(encabezado.innerText) // si en css - visibility: hidden no lo va encontrar
//console.log(encabezado.textContent) // si lo va encontrar
//console.log(encabezado.innerHTML) // se trae el html

//const nuevoheading = 'nuevo Heading'
//document.querySelector('.contenido-hero h1').textContent = nuevoheading

const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer2.jpg'
console.log(imagen)