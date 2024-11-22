
document.addEventListener("DOMContentLoaded", () => {
    const options = {
        root: null,
        threshold: 0.4
    };

    const sectionSobreMi = document.getElementById('sobre_mi');
    const botonesLaterales = document.querySelector('.botones_laterales');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                botonesLaterales.classList.add('mostrar');
            } else {
                botonesLaterales.classList.remove('mostrar');
            }
        });
    }, options);

    observer.observe(sectionSobreMi);
});