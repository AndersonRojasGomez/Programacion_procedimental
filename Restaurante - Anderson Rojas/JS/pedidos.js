document.addEventListener("DOMContentLoaded", () => {

    const inputNombre = document.getElementById("ped-nombre");
    const inputTelefono = document.getElementById("ped-telefono");
    const selectProducto = document.getElementById("ped-producto");
    const inputCantidad = document.getElementById("ped-cantidad");
    const inputDireccion = document.getElementById("ped-direccion");
    const btnProcesar = document.getElementById("ped-btn-procesar");

    inputNombre.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
    });

    inputTelefono.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        if (e.target.value.length > 10) {
            e.target.value = e.target.value.slice(0, 10);
        }
    });

    inputCantidad.addEventListener("input", (e) => {
        if (e.target.value < 1 && e.target.value !== "") {
            e.target.value = 1;
        }
    });

    inputDireccion.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s#\-\.,áéíóúÁÉÍÓÚñÑ]/g, "");
    });

    btnProcesar.addEventListener("click", () => {
        let nombre = inputNombre.value.trim();
        let telefono = inputTelefono.value.trim();
        let producto = selectProducto.value;
        let cantidad = inputCantidad.value;
        let direccion = inputDireccion.value.trim();
        let radioPago = document.querySelector('input[name="pago"]:checked');
        let metodoPago = radioPago ? radioPago.value : "";


        if (!nombre || !telefono || !producto || !cantidad || !direccion) {
            alert("Error: Por favor, complete todos los campos obligatorios antes de procesar.");
            return;
        }
        
        if (telefono.length < 7) {
            alert("Error: Ingrese un número de teléfono válido.");
            return;
        }

        alert(`¡Pedido procesado con éxito para ${nombre}! Método de pago: ${metodoPago}`);
        console.log("Datos del Pedido:", { nombre, telefono, producto, cantidad, direccion, metodoPago });
    });
});