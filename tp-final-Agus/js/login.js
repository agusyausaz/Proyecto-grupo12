

function teclaSube() {
    enabledButton();
}

function enabledButton() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let btnLogin = document.querySelector("#btnLogin");
    if ((email.value === "") || (password.value === "")) {
        btnLogin.className = "log-btn ";//deshabilito
        btnLogin.disabled = true;
        // console.log("deshabilitado");
    } else {// habilito
        btnLogin.className = "habilitado";// le pongo las mismas salvo disabled
        btnLogin.disabled = false;
        // console.log("habilitado");
    }

}
function botonLogin(event) {
    event.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (esValidoEmail(email.value) && esValidoPassword(password.value)) {
        // alert( "enviando datos al servidor")
        if ((email.value === "admin@hotmail.com") && (password.value === "admin1234")) {
            alert( "inicio sesion correctamente")
             irAdmin();
            
        } else {
            alert("datos incorrectos")
        }
    } else {
        alert("error: debe ser un email valido y la contraseña debe contener almenos 8 caracteres")
    }

}
function esValidoEmail(email) {
    // Utilizamos una expresión regular para validar el formato del correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // estructura texto@texto.texto

    return emailPattern.test(email);
}
function esValidoPassword(pass) {
    // valida que sea mayor a 7 caracteres
    const regex = /^.{8,}$/;
    return regex.test(pass);
}

function irAdmin() {
    window.location.href = "./pages/administrador.html";
}