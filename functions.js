/*===================================================================
Botón para mostrar número de télefono
=====================================================================*/

document.getElementById("boton_tel").onclick = function () {
    document.getElementById("teléfono").innerHTML = "+54-341-1111111"
}

/*====================================================================*/

/*=====================================================================
Botón para mostrar dirección
======================================================================*/

document.getElementById("boton_dir").addEventListener ("click", function () {
    document.getElementById("dirección").innerHTML = "Calle 1700, 2A. Rosario, Santa Fe."
})

/*=====================================================================*/