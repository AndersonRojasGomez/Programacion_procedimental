document.addEventListener("DOMContentLoaded", () => {
    const inputIdProducto = document.getElementById("inv-id-producto");
    const inputNombreProducto = document.getElementById("inv-nombre-producto");
    const inputCodigoProducto = document.getElementById("inv-codigo-producto");
    const inputMarcaProducto = document.getElementById("inv-marca-producto");
    const selectCantidad = document.getElementById("inv-cantidad-producto");

    inputIdProducto.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });

    const limitarLongitud = (e, maxCaracteres) => {
        if (e.target.value.length > maxCaracteres) {
            e.target.value = e.target.value.slice(0, maxCaracteres);
        }
    };

    inputNombreProducto.addEventListener("input", (e) => limitarLongitud(e, 50));  
    inputCodigoProducto.addEventListener("input", (e) => limitarLongitud(e, 15));  
    inputMarcaProducto.addEventListener("input", (e) => limitarLongitud(e, 30));   

    const validarInventario = () => {
        let idProducto = inputIdProducto.value.trim();
        let nombreProducto = inputNombreProducto.value.trim();
        let codigoProducto = inputCodigoProducto.value.trim();
        let marcaProducto = inputMarcaProducto.value.trim();
        let cantidadProducto = selectCantidad.value; 

        if (!idProducto || !nombreProducto || !codigoProducto || !marcaProducto) {
            alert("Error: Todos los campos de texto son obligatorios para el inventario.");
            return false;
        }

        if (cantidadProducto === "") {
            alert("Error: Por favor, seleccione una cantidad válida para el producto.");
            return false;
        }

        console.log("Producto validado correctamente para el inventario:", {
            idProducto,
            nombreProducto,
            codigoProducto,
            marcaProducto,
            cantidadProducto
        });
        
        return true;
    };
});