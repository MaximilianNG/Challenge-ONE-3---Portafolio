const inputEmail = document.querySelector("#email");

inputEmail.addEventListener("blur", (evento) => {
    validarEmail(evento.target);
})

function validarEmail(input) {
    const email = input.value;
    let mensaje = "";

    if (email == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar un email."
    }

    if (!email.includes("@")) {
        mensaje = "Falta '@'. Debe ingresar un correo con el formato ejemplo@dominio.com"
    }

    input.setCustomValidity(mensaje);
}