let botonAyuda = document.getElementById("boton-ayuda");
let cambioBandera = document.getElementById("bandera-full");
let seleccionBandera = document.getElementsByClassName("linea-bandera-2");
let lineaSeleccionada;
let huecoSeleccionado;

botonAyuda.addEventListener("click", mostrarAyuda);

function mostrarAyuda(){
    cambioBandera.classList.toggle("oculto");
}

function seleccionarLinea(n){
    lineaSeleccionada = n;
    document.getElementById("linea-"+n).style.border = "1em solid blue";
    if(huecoSeleccionado != undefined){
        compararSeleccionados();
    }
}

function seleccionarHueco(n){
    huecoSeleccionado = n;
    document.getElementById("hueco-"+n).style.border = "1em solid blue";
    if(lineaSeleccionada != undefined){
        compararSeleccionados();
    }
}

function compararSeleccionados(){
    let imagenLinea = document.getElementById("linea-"+lineaSeleccionada);
    let imagenHueco = document.getElementById("hueco-"+huecoSeleccionado);

    if (lineaSeleccionada == huecoSeleccionado) {
        imagenLinea.style.border = "none"
        imagenHueco.style.border = "none";
        imagenLinea.style.display = "none";
        for (let child of imagenHueco.children) {
            child.classList.toggle("oculto");
        }
    } else {
        imagenLinea.style.border = "1em solid red";
        imagenHueco.style.border = "1em solid red";
        setTimeout(function () {
            imagenLinea.style.border = "none";
            imagenHueco.style.border = "none";
          }, 1000);
    }
    lineaSeleccionada = undefined;
    huecoSeleccionado = undefined;
}

