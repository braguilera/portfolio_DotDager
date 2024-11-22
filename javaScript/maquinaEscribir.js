document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "Creador de contenido.",
        "Catador de pepinos.",
        "Full-stack Senior.",
        "Amante de los pit",
        "Contador serial de chistes de mierda.",
        "Jugador profesional de Lamberjack."
    ];

    const typingElement = document.querySelector(".escribiendo");
    let textIndex = 0; 
    let charIndex = 0;
    let isDeleting = false; 
    let isReplacingPit = false;
    let isReplacingGatos = false; 
    let delay = 80; 
    let afterWriteDelay = 1000; 
    function typeEffect() {
        const currentText = texts[textIndex];

        if (currentText === "Amante de los pit") {
            const baseText = "Amante de los "; 
            const pitText = "pit";
            const replacementText = "gatos.";

            if (!isDeleting && !isReplacingPit && !isReplacingGatos) {
                typingElement.textContent = currentText.slice(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentText.length) {
                    delay = 300; 
                    setTimeout(() => {
                        isDeleting = true;
                        isReplacingPit = true; 
                        charIndex = pitText.length; 
                        typeEffect();
                    }, delay);
                    return;
                }
            } else if (isDeleting && isReplacingPit) {
                typingElement.textContent = baseText + pitText.slice(0, charIndex - 1);
                charIndex--;
                delay = 50; 
                if (charIndex === 0) {
                    isDeleting = false;
                    isReplacingPit = false;
                    isReplacingGatos = true;
                    charIndex = 0;
                }
            } else if (isReplacingGatos) {
                typingElement.textContent = baseText + replacementText.slice(0, charIndex + 1);
                charIndex++;
                delay = 50;
                if (charIndex === replacementText.length) {
                    delay = afterWriteDelay;
                    setTimeout(() => {
                        isDeleting = true;
                        isReplacingGatos = false;
                        charIndex = (baseText + replacementText).length;
                        typeEffect();
                    }, delay);
                    return;
                }
            } else if (isDeleting && !isReplacingPit && !isReplacingGatos) {
                typingElement.textContent = typingElement.textContent.slice(0, charIndex - 1);
                charIndex--;
                delay = 50;
                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }
            }
        } else {
            if (!isDeleting) {
                typingElement.textContent = currentText.slice(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentText.length) {
                    delay = afterWriteDelay;
                    setTimeout(() => {
                        isDeleting = true;
                        typeEffect();
                    }, delay);
                    return;
                }
            } else {
                typingElement.textContent = currentText.slice(0, charIndex - 1);
                charIndex--;
                delay = 50;
                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }
            }
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();
});


