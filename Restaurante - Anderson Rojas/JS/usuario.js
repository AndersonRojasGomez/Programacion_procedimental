document.getElementById("form-registro").addEventListener("submit", function(event) {
  event.preventDefault(); 
  ValidarDatos();
});

function ValidarDatos() {
  let nombres = document.getElementById("input-nombres").value.trim();
  let apellidos = document.getElementById("input-apellidos").value.trim();
  let cedula = document.getElementById("input-cedula").value.trim();
  let email = document.getElementById("input-email").value.trim();
  let genero = document.getElementById("select-genero").value;
  let cargo = document.getElementById("select-cargo").value;
  let fechaNacimiento = document.getElementById("input-fecha-nacimiento").value;
  let password = document.getElementById("input-password").value;

  let regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  let regexNumeros = /^[0-9]+$/;
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nombres === "") {
    alert("Por favor, ingrese sus nombres.");
    return false;
  }
  if (!regexLetras.test(nombres)) {
    alert("El campo 'Nombres' no admite números ni caracteres especiales.");
    return false;
  }

  if (apellidos === "") {
    alert("Por favor, ingrese sus apellidos.");
    return false;
  }
  if (!regexLetras.test(apellidos)) {
    alert("El campo 'Apellidos' no admite números ni caracteres especiales.");
    return false;
  }

  if (cedula === "") {
    alert("Por favor, ingrese su número de cédula.");
    return false;
  }
  if (!regexNumeros.test(cedula)) {
    alert("El número de cédula no admite letras ni caracteres especiales. Ingrese solo dígitos.");
    return false;
  }
  if (cedula.length < 6 || cedula.length > 12) {
    alert("El número de cédula debe tener una longitud válida (entre 6 y 12 dígitos).");
    return false;
  }

  if (email === "") {
    alert("Por favor, ingrese su correo electrónico.");
    return false;
  }
  if (!regexEmail.test(email)) {
    alert("Por favor, ingrese un formato de correo electrónico válido (ejemplo@correo.com).");
    return false;
  }

  if (genero === "") {
    alert("Por favor, seleccione una opción en el campo 'Género'.");
    return false;
  }


  if (cargo === "") {
    alert("Por favor, seleccione un cargo de la lista.");
    return false;
  }

  if (fechaNacimiento === "") {
    alert("Por favor, seleccione su fecha de nacimiento.");
    return false;
  }

  if (password === "") {
    alert("Por favor, escriba una contraseña.");
    return false;
  }
  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres por motivos de seguridad.");
    return false;
  }

  alert("Registro exitoso, todos los datos son válidos.");
}
