document.addEventListener("DOMContentLoaded", () => {
    const options = {
        root: null,
        threshold: 0.4
    };

    const sectionInicio = document.getElementById('inicio');
    const botonesLaterales = document.querySelector('.botones_laterales');
    const inicioLinks = document.querySelector('.inicio_links');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                botonesLaterales.classList.remove('mostrar');
                inicioLinks.classList.remove('ocultar');
            } else {
                botonesLaterales.classList.add('mostrar');
                inicioLinks.classList.add('ocultar');
            }
        });
    }, options);

    observer.observe(sectionInicio);
});
