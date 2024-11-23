document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});

document.querySelector(".wrapper_nav").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

