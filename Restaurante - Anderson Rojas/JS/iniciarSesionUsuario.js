document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.getElementById("form-login");
  const inputEmail = document.getElementById("input-email");
  const inputPassword = document.getElementById("input-password");
  const limitarLongitud = (e, maxLetras) => {
    if (e.target.value.length > maxLetras) {
      e.target.value = e.target.value.slice(0, maxLetras);
    }
  };

  inputEmail.addEventListener("input", (e) => limitarLongitud(e, 60));
  inputPassword.addEventListener("input", (e) => limitarLongitud(e, 30));

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Campos vacíos",
        text: "Por favor, ingresa tu correo y contraseña."
      });
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Correo no válido",
        text: "Escribe un correo electrónico válido."
      });
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "¡Sesión iniciada!",
      text: `Bienvenido/a (${email})`,
      showConfirmButton: false,
      timer: 2000
    });
    console.log("Credenciales de ingreso:", { email, password });
    formLogin.reset();
  });
});