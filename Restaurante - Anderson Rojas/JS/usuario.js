document.addEventListener("DOMContentLoaded", () => {
  const formRegistro = document.getElementById("form-registro");
  const inputNombres = document.getElementById("input-nombres");
  const inputApellidos = document.getElementById("input-apellidos");
  const inputCedula = document.getElementById("input-cedula");
  const inputEmail = document.getElementById("input-email");
  const selectGenero = document.getElementById("select-genero");
  const selectCargo = document.getElementById("select-cargo");
  const inputFechaNacimiento = document.getElementById("input-fecha-nacimiento");
  const inputPassword = document.getElementById("input-password");
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
  inputNombres.addEventListener("input", (e) => {
    permitirSoloLetras(e);
    limitarLongitud(e, 40);
  });

  inputApellidos.addEventListener("input", (e) => {
    permitirSoloLetras(e);
    limitarLongitud(e, 40);
  });

  inputCedula.addEventListener("input", (e) => {
    permitirSoloNumeros(e);
    limitarLongitud(e, 12);
  });

  const hoy = new Date().toISOString().split("T")[0];
  if (inputFechaNacimiento) {
    inputFechaNacimiento.setAttribute("max", hoy);
  }

  formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombres = inputNombres.value.trim();
    const apellidos = inputApellidos.value.trim();
    const cedula = inputCedula.value.trim();
    const email = inputEmail.value.trim();
    const genero = selectGenero.value;
    const cargo = selectCargo.value;
    const fechaNacimiento = inputFechaNacimiento.value;
    const password = inputPassword.value.trim();
    if (
      !nombres ||
      !apellidos ||
      !cedula ||
      !email ||
      !genero ||
      !cargo ||
      !fechaNacimiento ||
      !password
    ) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos para continuar.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Correo inválido",
        text: "Por favor, ingresa una dirección de correo electrónico válida.",
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Contraseña muy corta",
        text: "La contraseña debe tener al menos 6 caracteres.",
      });
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Cuenta creada exitosamente",
      text: `¡Bienvenido/a, ${nombres}!`,
      showConfirmButton: false,
      timer: 2000,
    });

    console.log("Datos de Usuario Registrado:", {
      nombres,
      apellidos,
      cedula,
      email,
      genero,
      cargo,
      fechaNacimiento,
      password,
    });

    formRegistro.reset();
  });
});