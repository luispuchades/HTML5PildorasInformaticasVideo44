///*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API DRAG&DROP VI
 * Origin: Capitulo44.html ==> Arrastrando archivos
 */

// "use strict";


//1. Definición de Objetos y Variables
var zonaDestino;


//1.1 Extracción de elementos desde HTML
zonaDestino = document.getElementById("zona-destino");

//2. Definición de Funciones

function soltado(e) {
    'use strict';

    var archivos;
// Declaro una varable listado y la inicamos vacia con ""
    var nombre;
    var i;

    e.preventDefault();

    archivos = e.dataTransfer.files;
    listado = "";

    for(i = 0; i < archivos.length; i = i + 1){
        nombre = archivos[i].name;
    }

    zonaDestino.innerHTML = nombre;
}



function comenzar() {
    'use strict';

    zonaDestino.addEventListener("dragenter", function(e){
        e.preventDefault();
    }, false);

        zonaDestino.addEventListener("dragover", function(e){
        e.preventDefault();
    }, false);

        zonaDestino.addEventListener("drop", soltado, false);
}


//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
