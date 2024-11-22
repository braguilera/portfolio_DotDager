document.addEventListener("DOMContentLoaded", () => {
    const options = {
        root: null,
        threshold: 0.4 // El umbral del 20%
    };

    const sectionInicio = document.getElementById('inicio');
    const botonesLaterales = document.querySelector('.botones_laterales');
    const inicioLinks = document.querySelector('.inicio_links');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando "Inicio" está visible en más del 20%
                botonesLaterales.classList.remove('mostrar');
                inicioLinks.classList.remove('ocultar');
            } else {
                // Cuando "Inicio" está menos visible que el 20%
                botonesLaterales.classList.add('mostrar');
                inicioLinks.classList.add('ocultar');
            }
        });
    }, options);

    observer.observe(sectionInicio);
});
