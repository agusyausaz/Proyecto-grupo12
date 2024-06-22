function teclaSube() {
    enabledButton();
}

function enabledButton() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let btnLogin = document.querySelector("#btnLogin");
    if ((email.value === "") || (password.value === "")) {
        btnLogin.className = "log-btn";// deshabilito
        btnLogin.disabled = true;
    } else { // habilito
        btnLogin.className = "log-btn habilitado"; // le pongo las mismas salvo disabled
        btnLogin.disabled = false;
    }
}

function botonLogin(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (esValidoEmail(email) && esValidoPassword(password)) {
        if (email === "admin@hotmail.com" && password === "admin1234") {
            irAdmin();
        } else {
            alert("Datos incorrectos");
        }
    } else {
        alert("Error: debe ser un email válido y la contraseña debe contener al menos 8 caracteres");
    }
}

function esValidoEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function esValidoPassword(password) {
    const regex = /^.{8,}$/;
    return regex.test(password);
}

function irAdmin() {
  window.location.href = "./pages/administrador.html";
}
