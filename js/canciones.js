$(document).ready(function () {
  const texto = document.getElementById("texto")
  const cancionesContainer = document.getElementById("canciones-container")

  cargarOnline(cancionesContainer)

  texto.addEventListener('keyup', function (evento) {
    const busqueda = evento.currentTarget.value.toLowerCase()
    // cargarOffline(busqueda)
    cargarOnline(cancionesContainer, busqueda)
  })
})

function renderCancion(contenedor, data) {
  const cancionTemplate = document.getElementById("cancion-template")
  const cancionClon = cancionTemplate.cloneNode(true)

  cancionClon.setAttribute('id', '')
  cancionClon.dataset.id = data.nombre
  cancionClon.querySelector('img').setAttribute('src', '/imagenes/icon_4.svg')
  cancionClon.querySelector('audio').setAttribute('src', '/canciones/uno.mp3')
  cancionClon.querySelector('h4').innerHTML = data.nombre

  contenedor.appendChild(cancionClon)
}

function toLower(str) {
  return (str || '').toLowerCase()
}

function cargarOffline(busqueda) {
  [...document.getElementsByClassName('cancion')].forEach(function (cancionEl) {
    const contieneBusqueda = toLower(cancionEl.dataset.id)
      .indexOf(busqueda) >= 0
    const display = !busqueda || contieneBusqueda ? 'flex' : 'none'
    cancionEl.style.display = display
  })
}

function cargarOnline(container, busqueda) {
  container.innerHTML = ''

  $.ajax({ url: "../datos.json" }).done(function (respuesta) {
    respuesta.canciones
      .filter(function (cancionData) {
        const contieneBusqueda = toLower(cancionData.nombre)
          .indexOf(busqueda) >= 0
        return !busqueda || contieneBusqueda
      })
      .forEach(function (cancionData) {
        renderCancion(container, cancionData)
      })
  })
}