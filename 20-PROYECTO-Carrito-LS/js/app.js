// variables 
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []

cargarEventListeners()
function cargarEventListeners() {
    //cuando agregas un curso presionando "Agregar carrito"
    listaCursos.addEventListener('click', agregarCurso)

    // elimina cursos de carrito
    carrito.addEventListener('click', eliminarCurso)

    // Muestra los cursos de local Storage
    document.addEventListener('DOMContentLoaded', () => {
      articulosCarrito = JSON.parse( localStorage.getItem('carrito')) || []

      carritoHTML()
    })

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [] //reseteamos el carrito

        limpiarHTML() //elminamos todo el html
    })
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();
    
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCusos(cursoSeleccionado)
    }
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso') ) {
         // e.target.parentElement.parentElement.remove();
         const cursoId = e.target.getAttribute('data-id')
         // Eliminar del arreglo del carrito
         articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
         carritoHTML();
    }
}

//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCusos(curso) {
    console.log(curso)
    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if(existe) {
        //actualizamos la cantidad
        const cursos= articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++
                return curso //retorna objeto actualizado
            } else {
                return curso // retorna los objetos que no son los duplicados
            }
        })
        articulosCarrito = [...cursos]

    } else {
        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    
    

    console.log(articulosCarrito)

    carritoHTML()
}

//muestra el carrito de compras
function carritoHTML() {

    //Limpiar el html

    limpiarHTML()

    // recorre el carrigo y genera el html
    articulosCarrito.forEach((curso) => {
        const {imagen, titulo, precio, cantidad, id} = curso
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100"/>
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id"${id}" > X </>
            </td>
        `

        //  agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })

    //agregar el carrito de compra al storage
    sincronizarStorage()
}

function sincronizarStorage() {
  localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}


// elimina los cursos del tbody
function limpiarHTML() {
    //forma lenta
    //contenedorCarrito.innerHTML = ''

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}