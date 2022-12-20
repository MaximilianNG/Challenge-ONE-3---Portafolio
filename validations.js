const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const inputEmailLabel = document.querySelector("#emailLabel")
const inputAsunto = document.querySelector("#asunto");
const inputMensaje = document.querySelector("#mensaje");
const submitBoton = document.querySelector("#submitBotón");

inputEmail.addEventListener("blur", (evento) => {
    validarEmail(evento.target);
    if (inputEmail.validity.valid) {
        inputEmailLabel.classList.remove("test");
    }
})

inputNombre.addEventListener("blur", (evento) => {
    validarNombre(evento.target);
})

inputAsunto.addEventListener("blur", (evento) => {
    validarAsunto(evento.target)
})

inputMensaje.addEventListener("blur", (evento) => {
    validarMensaje(evento.target)
})

window.addEventListener("keyup", (evento) => {
    habilitarBoton(evento.target)
})

function validarEmail(input) {
    const email = input.value;
    let mensaje = "";

    if (email == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar un email.";
    } else {
        if (!email.includes("@")) {
            mensaje = "Falta '@'. Debe ingresar un correo con el formato ejemplo@dominio.com";
            if (inputEmailLabel.classList.contains("test")) {
            } else {
                inputEmailLabel.classList.add("test");
            }
        }
    }
    input.setCustomValidity(mensaje);
}

function validarNombre(input) {
    const nombre = input.value;
    let mensaje = "";

    if (nombre == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar un nombre."
    }

    if (nombre.length > 50) {
        mensaje = "Este campo no puede tener más de 50 caracteres."
    }

    input.setCustomValidity(mensaje);
}

function validarAsunto(input) {
    const asunto = input.value;
    let mensaje = "";

    if (asunto == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar un asunto."
    }

    input.setCustomValidity(mensaje);
}

function validarMensaje(input) {
    const mensajeDeContacto = input.value;
    let mensaje = "";

    if (mensajeDeContacto == "") {
        mensaje = "Este campo no puede quedar vacío. Debe ingresar un mensaje."
    }

    input.setCustomValidity(mensaje);
}

function habilitarBoton(input) {
    if (inputNombre.validity.valid && inputEmail.validity.valid && inputAsunto.validity.valid 
        && inputMensaje.validity.valid) {
            if (!submitBoton.hasAttribute("disabled")) {
//No se hace nada
            } else {
                submitBoton.removeAttribute("disabled");
            }
        } else {
            if (submitBoton.hasAttribute("disabled")) {
//No se hace nada
            } else {
                submitBoton.setAttribute("disabled", "disabled");
            }
        }
}