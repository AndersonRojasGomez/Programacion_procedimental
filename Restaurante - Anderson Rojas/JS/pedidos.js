document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const inputNombre = document.getElementById("ped-nombre-usuario");
  const inputTelefono = document.getElementById("ped-telefono");
  const selectProducto = document.getElementById("ped-producto");
  const inputCantidad = document.getElementById("ped-cantidad");
  const inputDireccion = document.getElementById("ped-direccion");
  const btnProcesar = document.getElementById("btn-procesar-pedido");
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
  inputNombre.addEventListener("input", (e) => {
    permitirSoloLetras(e);
    limitarLongitud(e, 50);
  });

  inputTelefono.addEventListener("input", (e) => {
    permitirSoloNumeros(e);
    limitarLongitud(e, 15);
  });

  inputCantidad.addEventListener("input", (e) => {
    permitirSoloNumeros(e);
    limitarLongitud(e, 3); 
  });

  inputDireccion.addEventListener("input", (e) => {
    limitarLongitud(e, 100);
  });

  btnProcesar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    const telefono = inputTelefono.value.trim();
    const producto = selectProducto.value;
    const cantidad = parseInt(inputCantidad.value, 10);
    const direccion = inputDireccion.value.trim();

    const radioPago = document.querySelector('input[name="pago"]:checked');
    const metodoPago = radioPago ? radioPago.value : "";

    if (!nombre || !telefono || !producto || !direccion || !metodoPago) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos obligatorios y selecciona un método de pago."
      });
      return;
    }
    if (isNaN(cantidad) || cantidad <= 0) {
      Swal.fire({
        icon: "warning",
        title: "Cantidad no válida",
        text: "La cantidad del producto debe ser al menos 1."
      });
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "¡Pedido procesado con éxito!",
      text: `Cliente: ${nombre} | Pago: ${metodoPago}`,
      showConfirmButton: false,
      timer: 2000
    });

    console.log("Detalles del Pedido:", {
      nombre,
      telefono,
      producto,
      cantidad,
      direccion,
      metodoPago
    });
    inputNombre.value = "";
    inputTelefono.value = "";
    selectProducto.value = "";
    inputCantidad.value = "1";
    inputDireccion.value = "";

    const radioDefault = document.querySelector('input[name="pago"][value="Efectivo"]');
    if (radioDefault) {
      radioDefault.checked = true;
    }
  });
});