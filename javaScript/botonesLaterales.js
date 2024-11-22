
document.addEventListener("DOMContentLoaded", () => {
    // Definir el umbral del 20% de visibilidad
    const options = {
        root: null, // Observar en relación con la ventana del navegador
        threshold: 0.4 // Se activará cuando el 20% del elemento esté visible
    };

    // Obtener la sección "Sobre Mí" y los botones laterales
    const sectionSobreMi = document.getElementById('sobre_mi');
    const botonesLaterales = document.querySelector('.botones_laterales');

    // Crear el Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando el 20% de la sección "Sobre Mí" es visible, se agrega la clase 'mostrar' a los botones laterales
                botonesLaterales.classList.add('mostrar');
            } else {
                // Opcional: Si quieres ocultarlos de nuevo cuando ya no están visibles, puedes eliminar la clase 'mostrar'
                botonesLaterales.classList.remove('mostrar');
            }
        });
    }, options);

    // Comenzar a observar la sección "Sobre Mí"
    observer.observe(sectionSobreMi);
});