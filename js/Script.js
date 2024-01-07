// script.js
function solicitarContraseña(tipo) {
    var contraseñaIngresada = prompt("Ingresa la contraseña:");

    // Verificar la contraseña (reemplaza 'tu_contraseña' con la contraseña real)
    if (contraseñaIngresada === 'AdministradorTESOEM2023') {
        descargarApk(tipo);
    } else {
        alert("Contraseña incorrecta. No se permite la descarga.");
    }
}

function descargarApk(tipo) {

    alert("Descargando archivo " + tipo + ".apk");
    window.location.href = '/Archivo/AdministracionPsicologia.apk';

}
