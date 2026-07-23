document.addEventListener("DOMContentLoaded", () => {
  const inputId = document.getElementById("inv-id-producto");
  const inputNombre = document.getElementById("inv-nombre-producto");
  const inputCodigo = document.getElementById("inv-codigo-producto");
  const inputMarca = document.getElementById("inv-marca-producto");
  const selectCantidad = document.getElementById("inv-cantidad-producto");
  const btnEnviar = document.getElementById("btn-enviar");
  const limitarLongitud = (e, maxLetras) => {
    if (e.target.value.length > maxLetras) {
      e.target.value = e.target.value.slice(0, maxLetras);
    }
  };

  inputId.addEventListener("input", (e) => limitarLongitud(e, 15));
  inputNombre.addEventListener("input", (e) => limitarLongitud(e, 40));
  inputCodigo.addEventListener("input", (e) => limitarLongitud(e, 20));
  inputMarca.addEventListener("input", (e) => limitarLongitud(e, 30));

  btnEnviar.addEventListener("click", () => {
    let idProducto = inputId.value.trim();
    let nombreProducto = inputNombre.value.trim();
    let codigoProducto = inputCodigo.value.trim();
    let marcaProducto = inputMarca.value.trim();
    let cantidadProducto = selectCantidad.value;

    if (!idProducto || !nombreProducto || !codigoProducto || !marcaProducto || !cantidadProducto) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos del formulario antes de enviar."
      });
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto guardado con éxito",
      showConfirmButton: false,
      timer: 1500
    });

    console.log("Datos del inventario:", {
      idProducto,
      nombreProducto,
      codigoProducto,
      marcaProducto,
      cantidadProducto
    });

    inputId.value = "";
    inputNombre.value = "";
    inputCodigo.value = "";
    inputMarca.value = "";
    selectCantidad.value = "";
  });
});