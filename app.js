let listaNumerosSorteados = [];
let numeroSecreto = generaNumeroSecreto();
let numeroIntento = 0;
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si el numero generado ya esta en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");

    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto;
        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}
function comparacionDeNumeros() {
    let numeroDeUSuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroIntento);
    if (numeroDeUSuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero secreto es: ${numeroSecreto} en ${numeroIntento} ${(numeroIntento === 1 ? "Intento" : "Intentos")}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUSuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
    }
    numeroIntento++;
    limpiarCaja();
    return;
}

function limpiarCaja() {
    let valorCaja = document.getElementById("valorUsuario");
    valorCaja.value = "";
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Mensajes de bienvenida 
    mensajesDeBienvenida();
    //generar el numero aleatorino
    generaNumeroSecreto();
    //desahblitar boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

function mensajesDeBienvenida() {
    asignarTextoElemento("h1", "Bienvenido al juego elimina el numero");
    asignarTextoElemento("p", "Coloca un numero del 1 al 10");
}
asignarTextoElemento("h1", "Bienvenido al juego elimina el numero");
asignarTextoElemento("p", "Coloca un numero del 1 al 10");








