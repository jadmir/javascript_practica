const nav = document.querySelector('.navegacion')

// Registrar un evento
nav.addEventListener('mouseout', () => {
  console.log('click en nav')
  nav.style.background = 'transparent'
})