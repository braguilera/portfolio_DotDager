function activarPepino() {
    const pepino = document.getElementById('pepino');
    const gota1 = document.getElementById('gota1');
    const gota2 = document.getElementById('gota2');
    const gota3 = document.getElementById('gota3');
    const gota = document.querySelector('.gota')

    // Muestra el pepino y empieza a temblar
    pepino.style.visibility = 'visible';
    pepino.style.animation = 'temblor 1s infinite';
    pepino.style.height = '300px';
    pepino.style.width = '300px';

    // Crea la gota
    setTimeout(() => {
        gota.style.visibility = 'visible';
        gota.style.width = '300px';
        gota.style.height = '300px';
    }, 500);

    // Desaparece la gota
    setTimeout(() => {
        gota1.style.opacity = '0';
    }, 500);

    setTimeout(() => {
        gota2.style.opacity = '0';
    }, 1000);

    setTimeout(() => {
        gota3.style.opacity = '0';
    }, 800);

    // Esconde el pepino
    setTimeout(() => {
        pepino.style.animation = '';
        pepino.style.visibility = 'hidden';
        pepino.style.transform = 'translateX(-50%)';
        gota.style.visibility = 'hidden';
    }, 5000);
}
