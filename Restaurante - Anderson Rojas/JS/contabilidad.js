let ventas = document.getElementById ("ventas").value;
let fecha = document.getElementById ("fecha").value;
let ingresos = document.getElementById ("ingresos").value;
let egresos = document.getElementById ("egresos").value;
let concepto = document.getElementById ("concepto").value;
let valor = document.getElementById ("valor").value;

document.addEventListener("DOMContentLoaded", () => {
    const inputVentas = document.getElementById("ventas");
    const inputFecha = document.getElementById("fecha");
    const inputIngresos = document.getElementById("ingresos");
    const inputEgresos = document.getElementById("egresos");
    const inputConcepto = document.getElementById("concepto");
    const inputValor = document.getElementById("valor");

    const prevenirNegativos = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0; // Si escribe un número negativo, lo fuerza a 0
        }
    };
    inputIngresos.addEventListener("input", prevenirNegativos);
    inputEgresos.addEventListener("input", prevenirNegativos);
    inputValor.addEventListener("input", prevenirNegativos);

    const limitarLongitud = (e, maxLetras) => {
        if (e.target.value.length > maxLetras) {
            e.target.value = e.target.value.slice(0, maxLetras); // Recorta el exceso
        }
    };
    inputVentas.addEventListener("input", (e) => limitarLongitud(e, 30));
    inputConcepto.addEventListener("input", (e) => limitarLongitud(e, 60));

    const hoy = new Date().toISOString().split("T")[0];
    inputFecha.setAttribute("max", hoy); 

    const validarFormularioCompleto = () => {
        let ventas = inputVentas.value.trim();
        let fecha = inputFecha.value;
        let ingresos = parseFloat(inputIngresos.value) || 0;
        let egresos = parseFloat(inputEgresos.value) || 0;
        let concepto = inputConcepto.value.trim();
        let valor = parseFloat(inputValor.value) || 0;

        if (!ventas || !fecha || !concepto) {
            alert("Por favor, rellena todos los campos de texto y la fecha.");
            return false;
        }

        if (valor !== (ingresos - egresos)) {
            alert("Aviso: El valor final no coincide exactamente con (Ingresos - Egresos).");
        }

        console.log("Datos listos para guardar:", { ventas, fecha, ingresos, egresos, concepto, valor });
        return true;
    };
});