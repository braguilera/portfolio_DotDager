function activarPepino() {
    const pepino = document.getElementById('pepino');
    const gota1 = document.getElementById('gota1');
    const gota2 = document.getElementById('gota2');
    const gota3 = document.getElementById('gota3');

    pepino.style.bottom= '20%';
    pepino.style.animation = 'temblor 1s infinite';
    pepino.style.opacity = '1';

    setTimeout(() => {
        [gota1, gota2, gota3].forEach((gota, index) => {
            setTimeout(() => {
                gota.style.visibility = 'visible';
                gota.style.opacity = '1';
                gota.style.width = '400px';
                gota.style.height = '400px';
            }, index * 300);
        });
    }, 1000);

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
    const overlay = document.querySelector('.popup-overlay');
    const popup = document.querySelector('.popup');
    const texto = popup.querySelector('p');
    const contenedorJumpscare = popup.querySelector('.contenedor_jumpscare');

    texto.textContent = mensaje;
    if (mensaje === "AAAAAAAAAAAAAHH!!!!") {
        contenedorJumpscare.style.display = 'block';
    } else {
        contenedorJumpscare.style.display = 'none';
    }


    overlay.style.display = 'block';
    popup.style.display = 'block';


    const botonCerrar = popup.querySelector('button');
    if (!botonCerrar.dataset.eventAdded) {
        botonCerrar.addEventListener('click', () => {
            overlay.style.display = 'none';
            popup.style.display = 'none';
        });
        botonCerrar.dataset.eventAdded = true;
    }
}

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

function activarJumpscare() {
    mostrarPopup("AAAAAAAAAAAAAHH!!!!");
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('guitarras').addEventListener('click', activarGuitarras);
    document.getElementById('filosofia').addEventListener('click', activarFilosofia);
    document.getElementById('gatos').addEventListener('click', activarGatos);
    document.getElementById('falopa').addEventListener('click', activarFalopa);
    document.getElementById('jumpscare').addEventListener('click', activarJumpscare);
    document.getElementById('pepinos').addEventListener('click', activarPepino);
});
