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
    var listado;
    var i;

    e.preventDefault();

    archivos = e.dataTransfer.files;

// Iniciamos la variable listado en una cadena vacía "" para evitar que cuando
// generemos el bucle for y arrastremos varios archivos nos de el primer archivo
// sin definir.
    listado = "";

    for (i = 0; i < archivos.length; i = i + 1) {

        listado += "Nombre:" + " " + archivos[i].name + " " + "<br />";
        listado += "Tamaño:" + " " + (archivos[i].size / 1024).toFixed(2) + " " + "Kb" + " " + "<br />";
        listado += "Tipo:" + " " + archivos[i].type + "<br />";
        listado += "Fecha última modificación:" + " " + archivos[i].lastModifiedDate.toLocaleDateString() + "<br />";
        listado += "<br />" + "<br />";
    }

    zonaDestino.innerHTML = listado;
}



function comenzar() {
    'use strict';

    zonaDestino.addEventListener("dragenter", function (e) {
        e.preventDefault();
    }, false);

    zonaDestino.addEventListener("dragover", function (e) {
        e.preventDefault();
    }, false);

    zonaDestino.addEventListener("drop", soltado, false);
}


//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
