//variables
const formulario =document.querySelector('#formulario')
const listaTweets =document.querySelector('#lista-tweets')
let tweets = []


//Event Listeners
eventListeners()
function eventListeners() {
  // cuando el usuario agrega un nuevo tweet
  formulario.addEventListener('submit', agregarTweet)

  // cuando el documento esta listo
  document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets')) || []

    console.log(tweets)

    crearHTML()
  })
}

//funciones
function agregarTweet(e) {
  e.preventDefault();
  
  //text area donde el usuario escribe
  const tweet = document.querySelector('#tweet').value

  //validacion
  if(tweet === '') {
    mostrarError('Un mensaje no puede ir vacio')
    return //evite que se ejecute mas lineas de codigo
  }

  const tweetObj = {
    id: Date.now(),
    tweet
  }

  //añadir los arrelos de tweets
  tweets = [ ...tweets, tweetObj]

  //una vez agregado vamos a cerar el html
  crearHTML()

  //reininar el formulario
  formulario.reset()
}

// Mostrar mendaje de error
function mostrarError(error) {
  const mensajeError = document.createElement('P')
  mensajeError.textContent = error
  mensajeError.classList.add('error')

  // Insertando en el contenido
  const contenido = document.querySelector('#contenido')
  contenido.appendChild(mensajeError)

  // elimina la alerta despues de 7 segundo
  setTimeout(() => {
    mensajeError.remove()
  }, 3000);
}

//muestra un listado de los twees
function crearHTML() {
  limpiarHTML()

  if(tweets.length > 0) {
    tweets.forEach(tweet => {
      // Agregfar un boton de eliminar
      const btnEliminar = document.createElement('a')
      btnEliminar.classList.add('borrar-tweet')
      btnEliminar.innerHTML = 'X'

      //añadir la funcion de eliminar
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id )
      }

      //crear el HTML
      const li = document.createElement('li')

      //añadir el texto
      li.innerText = tweet.tweet

      //Asignar el boton
      li.appendChild(btnEliminar)

      //insertando en el html
      listaTweets.appendChild(li)
    })
  }

  sincronizarStorage()
}

//agrega los Tweets actuales al localstorage
function sincronizarStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets))
}

//elimina un tweet
function borrarTweet(id) {
  tweets = tweets.filter( tweet => tweet.id !== id)
  crearHTML()
}

//limpiar el html
function limpiarHTML() {
  while (listaTweets.firstChild) {
      listaTweets.removeChild(listaTweets.firstChild)
  }
}

