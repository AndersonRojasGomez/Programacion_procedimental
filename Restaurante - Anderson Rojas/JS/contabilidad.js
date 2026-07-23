document.addEventListener("DOMContentLoaded", () => {
    const inputVentas = document.getElementById("ventas");
    const inputFecha = document.getElementById("fecha");
    const inputIngresos = document.getElementById("ingresos");
    const inputEgresos = document.getElementById("egresos");
    const inputConcepto = document.getElementById("concepto");
    const inputValor = document.getElementById("valor");
    const btnGuardar = document.getElementById("btn-guardar");
    const permitirSoloLetras = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
    };
    const permitirSoloNumeros = (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    };
    const limitarLongitud = (e, maxLetras) => {
        if (e.target.value.length > maxLetras) {
            e.target.value = e.target.value.slice(0, maxLetras);
        }
    };
    inputVentas.addEventListener("input", (e) => {
        permitirSoloLetras(e);
        limitarLongitud(e, 30);
    });
    inputConcepto.addEventListener("input", (e) => {
        permitirSoloLetras(e);
        limitarLongitud(e, 60);
    });
    inputIngresos.addEventListener("input", (e) => {
        permitirSoloNumeros(e);
        limitarLongitud(e, 10);
    });
    inputEgresos.addEventListener("input", (e) => {
        permitirSoloNumeros(e);
        limitarLongitud(e, 10);
    });
    inputValor.addEventListener("input", (e) => {
        permitirSoloNumeros(e);
        limitarLongitud(e, 10);
    });
    const hoy = new Date().toISOString().split("T")[0];
    inputFecha.setAttribute("max", hoy);
    btnGuardar.addEventListener("click", () => {
        let ventas = inputVentas.value.trim();
        let fecha = inputFecha.value;
        let ingresos = inputIngresos.value.trim();
        let egresos = inputEgresos.value.trim();
        let concepto = inputConcepto.value.trim();
        let valor = inputValor.value.trim();
        if (!ventas || !fecha || !concepto) {
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Por favor, completa los campos obligatorios: Ventas, Fecha y Concepto."
            });
            return;
        }
        if ((ingresos && isNaN(ingresos)) || (egresos && isNaN(egresos)) || (valor && isNaN(valor))) {
            Swal.fire({
                icon: "warning",
                title: "Datos numéricos inválidos",
                text: "Los campos de Ingresos, Egresos y Valor deben contener únicamente números."
            });
            return;
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Datos guardados con éxito",
            showConfirmButton: false,
            timer: 1500
        });
        
        console.log("Datos guardados correctamente:", {
            ventas,
            fecha,
            ingresos: ingresos ? Number(ingresos) : 0,
            egresos: egresos ? Number(egresos) : 0,
            concepto,
            valor: valor ? Number(valor) : 0
        });
    });
});