// INICIALIZACIÓN
const matriz = document.getElementById("matriz");
const aciertosEl = document.getElementById("rights");
const erroresEl = document.getElementById("wrongs");

let rights = 0;
let wrongs = 0;
let celdaEncendida = null;

// CREAR MATRIZ 5x5
function crearMatriz() {
    matriz.innerHTML = "";
    matriz.style.gridTemplateColumns = `repeat(5, 60px)`;

    for (let i = 0; i < 25; i++) {
        const celda = document.createElement("div");
        celda.classList.add("celda");
        celda.dataset.index = i; // número identificador

        celda.addEventListener("click", verificarCelda);

        matriz.appendChild(celda);
    }
}

// ENCENDER UNA CELDA ALEATORIA
function encenderCelda() {
    const index = Math.floor(Math.random() * 25);
    celdaEncendida = index;

    const celda = matriz.querySelector(`[data-index='${index}']`);
    celda.classList.add("lit");
}

// CUANDO EL USUARIO DA CLICK
function verificarCelda(e) {
    const indexClick = parseInt(e.target.dataset.index);

    if (indexClick === celdaEncendida) {
        rights++;
        aciertosEl.textContent = rights;

        e.target.classList.remove("lit");
        elegirNuevaCelda();
    } else {
        wrongs++;
        erroresEl.textContent = wrongs;

        e.target.classList.add("wrong");

        setTimeout(() => {
            e.target.classList.remove("wrong");
        }, 200);
    }
}

// APAGAR Y ELEGIR OTRA
function elegirNuevaCelda() {
    matriz.querySelector(".lit")?.classList.remove("lit");
    encenderCelda();
}

// INICIAR
crearMatriz();
encenderCelda();
