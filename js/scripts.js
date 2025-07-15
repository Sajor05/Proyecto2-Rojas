const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const userStatus = document.getElementById("userStatus");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = loginForm.username.value.trim();
  const password = loginForm.password.value.trim();

  if (
    (username === "carla" && password === "123") ||
    (username === "diego" && password === "456")
  ) {
    loginError.classList.add("d-none");


    const modal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
    modal.hide();
    localStorage.setItem("usuarioLogueado", username);
    window.location.href = "alumno.html";

  } else {
    loginError.classList.remove("d-none");
  }
});

function mostrarUsuario(username) {
  userStatus.innerHTML = `
  <div class="dropdown">
    <button class="btn  dropdown-toggle fw-bold" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false" style="background-color:#52a425; color:white;">
      Bienvenide ${username}!
    </button>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
      <li><a class="dropdown-item" href="alumno.html">Tus Talleres</a></li>
      <li><button id="logoutBtn" class="dropdown-item texto">Cerrar sesión</button></li>
    </ul>
  </div>
    `;

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("usuarioLogueado");
    location.href = "index.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const usuario = localStorage.getItem("usuarioLogueado");
  if (usuario) {
    mostrarUsuario(usuario);
  }
});
