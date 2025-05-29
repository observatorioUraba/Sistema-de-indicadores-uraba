// js/main.js

// Este archivo puede usarse para interactividad futura.
// Por ahora, solo un mensaje en la consola para verificar que está cargado.
console.log("Micrositio Sistema de Indicadores Urabá - JS Cargado");

// Ejemplo de cómo podrías añadir interactividad más adelante:
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón de la página de inicio
    const exploreButton = document.querySelector('#hero .btn');
    if (exploreButton) {
        exploreButton.addEventListener('click', function(event) {
            // event.preventDefault(); // Si no quieres que navegue inmediatamente
            console.log('Botón "Explorar Indicadores" clickeado.');
            // Aquí podrías añadir lógica, como cargar algo dinámicamente.
        });
    }

    // Podrías añadir validación a un formulario de contacto si lo implementas
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // event.preventDefault(); // Prevenir envío real para demostración
            // let nombre = document.getElementById('nombre').value;
            // if(nombre === ''){
            //     alert('El nombre es obligatorio');
            //     return false;
            // }
            // console.log('Formulario enviado (simulación)');
            // alert('Formulario enviado (simulación). Necesitarás un backend para procesamiento real.');
        });
    }
});