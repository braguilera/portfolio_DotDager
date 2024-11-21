document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "Creador de contenido",
        "Catador de pepinos",
        "Full-stack Senior",
        "Amante de los pit",
        "Contador serial de chistes de mierda",
        "Jugador profesional de Lamberjack",
        "Guitarrista aficionado",
        "Fanático de los árboles fálicos",
    ];

    const typingElement = document.querySelector(".escribiendo");
    let textIndex = 0; // Índice del texto actual
    let charIndex = 0; // Índice del carácter actual
    let isDeleting = false; // Indicador de si está borrando
    let isReplacingPit = false; // Indicador de reemplazo
    let isReplacingGatos = false; // Indicador de que se está escribiendo "gatos"
    let delay = 80; // Tiempo base de delay
    let afterWriteDelay = 1000; // Pausa después de escribir un texto completo

    function typeEffect() {
        const currentText = texts[textIndex];

        if (currentText === "Amante de los pit") {
            const baseText = "Amante de los "; // Parte fija del texto
            const pitText = "pit";
            const replacementText = "gatos";

            if (!isDeleting && !isReplacingPit && !isReplacingGatos) {
                // Escribir el texto inicial "Amante de los pit"
                typingElement.textContent = currentText.slice(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentText.length) {
                    delay = 300; // Pausa después de escribir "Amante de los pit"
                    setTimeout(() => {
                        isDeleting = true;
                        isReplacingPit = true; // Activar el reemplazo
                        charIndex = pitText.length; // Preparar para borrar "pit"
                        typeEffect();
                    }, delay);
                    return;
                }
            } else if (isDeleting && isReplacingPit) {
                // Borrar "pit" letra por letra
                typingElement.textContent = baseText + pitText.slice(0, charIndex - 1);
                charIndex--;
                delay = 50; // Velocidad rápida para borrar
                if (charIndex === 0) {
                    isDeleting = false; // Cambiar a escribir
                    isReplacingPit = false; // Reemplazo de "pit" terminado
                    isReplacingGatos = true; // Comenzar a escribir "gatos"
                    charIndex = 0; // Reiniciar índice para escribir "gatos"
                }
            } else if (isReplacingGatos) {
                // Escribir "gatos" letra por letra
                typingElement.textContent = baseText + replacementText.slice(0, charIndex + 1);
                charIndex++;
                delay = 50; // Velocidad rápida para escribir
                if (charIndex === replacementText.length) {
                    delay = afterWriteDelay; // Pausa después de escribir "gatos"
                    setTimeout(() => {
                        isDeleting = true; // Comenzar a borrar todo el texto
                        isReplacingGatos = false;
                        charIndex = (baseText + replacementText).length; // Preparar para borrar todo
                        typeEffect();
                    }, delay);
                    return;
                }
            } else if (isDeleting && !isReplacingPit && !isReplacingGatos) {
                // Borrar todo "Amante de los gatos"
                typingElement.textContent = typingElement.textContent.slice(0, charIndex - 1);
                charIndex--;
                delay = 50; // Velocidad rápida para borrar
                if (charIndex === 0) {
                    isDeleting = false; // Cambiar a escribir
                    textIndex = (textIndex + 1) % texts.length; // Ir al siguiente texto
                }
            }
        } else {
            // Animación normal para otros textos
            if (!isDeleting) {
                typingElement.textContent = currentText.slice(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentText.length) {
                    delay = afterWriteDelay; // Pausa después de escribir
                    setTimeout(() => {
                        isDeleting = true;
                        typeEffect();
                    }, delay);
                    return;
                }
            } else {
                typingElement.textContent = currentText.slice(0, charIndex - 1);
                charIndex--;
                delay = 50; // Velocidad rápida para borrar
                if (charIndex === 0) {
                    isDeleting = false; // Cambiar a escribir
                    textIndex = (textIndex + 1) % texts.length; // Ir al siguiente texto
                }
            }
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();
});
