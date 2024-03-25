// TRAIGO LAS IMÁGENES DE LOS SOMBREROS
let hat1 = document.getElementById('hat1')
let hat2 = document.getElementById('hat2')
let hat3 = document.getElementById('hat3')
let hat4 = document.getElementById('hat4')

// LES AGREGO EL EVENTO CLICK PARA QUE EJECUTE LA FUNCIÓN
hat1.addEventListener('click', () => selectHat('hat1'))
hat2.addEventListener('click', () => selectHat('hat2'))
hat3.addEventListener('click', () => selectHat('hat3'))
hat4.addEventListener('click', () => selectHat('hat4'))

// FUNCIÓN PARA REDIRECCIONAR SEGÚN EL SOMBRERO SELECCIONADO
function selectHat(sombreroSeleccionado) {
const sombreroAleatorio = Math.floor(Math.random() * 4) + 1
    if (sombreroSeleccionado === `hat${sombreroAleatorio}`) {
        window.location.href = '/abracadabra/rabbit'
    } else {
        window.location.href = '/abracadabra/not_found'
    }
}