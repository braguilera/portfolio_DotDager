document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    // Mostrar el menú al hacer clic en el botón abrir
    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    // Ocultar el menú al hacer clic en el botón cerrar
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});
