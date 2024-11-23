// Función para activar el pepino (ya existente)
function activarPepino() {
    const pepino = document.getElementById('pepino');
    const gota1 = document.getElementById('gota1');
    const gota2 = document.getElementById('gota2');
    const gota3 = document.getElementById('gota3');
    const gota = document.querySelector('.gota')

    pepino.style.visibility = 'visible';
    pepino.style.animation = 'temblor .8s infinite';
    pepino.style.height = '300px';
    pepino.style.width = '300px';
    pepino.style.zIndex = '-1'

    setTimeout(() => {
        gota.style.visibility = 'visible';
        gota.style.width = '300px';
        gota.style.height = '300px';
    }, 500);

    setTimeout(() => {
        gota1.style.opacity = '0';
    }, 500);

    setTimeout(() => {
        gota2.style.opacity = '0';
    }, 1000);

    setTimeout(() => {
        gota3.style.opacity = '0';
    }, 800);

    setTimeout(() => {
        pepino.style.animation = '';
        pepino.style.visibility = 'hidden';
        pepino.style.transform = 'translateX(-50%)';
        gota.style.visibility = 'hidden';
    }, 2000);
}

// Métodos para los otros artículos

function activarGuitarras() {
    alert("Haz hecho clic en Guitarras!");
}

function activarFilosofia() {
    alert("Haz hecho clic en Filosofía!");
}

function activarGatos() {
    alert("Haz hecho clic en Gatos!");
}

function activarFalopa() {
    alert("Haz hecho clic en Falopa!");
}

// Asignar eventos de clic a los artículos

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('guitarras').addEventListener('click', activarGuitarras);
    document.getElementById('pepinos').addEventListener('click', activarPepino);
    document.getElementById('filosofia').addEventListener('click', activarFilosofia);
    document.getElementById('gatos').addEventListener('click', activarGatos);
    document.getElementById('falopa').addEventListener('click', activarFalopa);
});
