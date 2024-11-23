function activarPepino() {
    const pepino = document.getElementById('pepino');
    const gota1 = document.getElementById('gota1');
    const gota2 = document.getElementById('gota2');
    const gota3 = document.getElementById('gota3');

    // Mostrar y animar el pepinos
    pepino.style.bottom= '20%';
    pepino.style.animation = 'temblor 1s infinite';
    pepino.style.opacity = '1';

    // Animación de gotas después de 1 segundo
    setTimeout(() => {
        [gota1, gota2, gota3].forEach((gota, index) => {
            setTimeout(() => {
                gota.style.visibility = 'visible';
                gota.style.opacity = '1';
                gota.style.width = '400px';
                gota.style.height = '400px';
            }, index * 300); // Las gotas aparecen escalonadas
        });
    }, 1000);

    // Ocultar todo después de 3 segundos
    setTimeout(() => {
        [gota1, gota2, gota3].forEach((gota) => {
            gota.style.visibility = 'hidden';
            gota.style.opacity = '0';
            gota.style.width = '0';
            gota.style.height = '0';
        });
    }, 3000);

    setTimeout(() => {
        pepino.style.animation = '';
        pepino.style.bottom= '4px';
        pepino.style.opacity = '0';
    },3500);
}




function mostrarPopup(mensaje) {
    // Crear elementos del popup
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    const popup = document.createElement('div');
    popup.className = 'popup';

    const texto = document.createElement('p');
    texto.textContent = mensaje;

    const boton = document.createElement('button');
    boton.textContent = 'Cerrar';
    boton.addEventListener('click', () => {
        // Cerrar el popup
        document.body.removeChild(overlay);
        document.body.removeChild(popup);
    });

    // Agregar elementos al popup
    popup.appendChild(texto);
    popup.appendChild(boton);

    // Agregar popup y overlay al body
    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    // Mostrar el popup y el overlay
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

// Funciones para cada categoría con chistes personalizados
function activarGuitarras() {
    mostrarPopup("¿Qué tienen en común las guitarras y los pitos? Ambos suenan mejor cuando los tocas con pasión.");
}

function activarFilosofia() {
    mostrarPopup("La filosofía y los pitos tienen algo en común: mientras más los piensas, menos los entiendes.");
}

function activarGatos() {
    mostrarPopup("¿Por qué los gatos son como los pitos? Siempre están donde no los necesitas, pero nunca puedes ignorarlos.");
}

function activarFalopa() {
    mostrarPopup("La falopa y los pitos comparten algo: ambos pueden hacer que pierdas el control si abusas de ellos.");
}

// Asignar eventos de clic a los artículos
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('guitarras').addEventListener('click', activarGuitarras);
    document.getElementById('filosofia').addEventListener('click', activarFilosofia);
    document.getElementById('gatos').addEventListener('click', activarGatos);
    document.getElementById('falopa').addEventListener('click', activarFalopa);
    document.getElementById('pepinos').addEventListener('click',activarPepino);
});