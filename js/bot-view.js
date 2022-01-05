const textUsuario = document.querySelector("#textUsuario")
const btnEnviar = document.querySelector("#btnEnviar") 
const mensajes = document.querySelector("#mensajes")

mensajes.clientHeight = document.clientHeight - (document.querySelector("#divInferior").height + 200)


function newUserMessage() {
    //debugger
    if (textUsuario.value.trim() > "") {
        let msg = document.createElement("div")
        msg.classList.add("texto-user")
        msg.classList.add("user-font")
        msg.innerText = textUsuario.value.trim()
        msg.id = Date.now()
        mensajes.appendChild(msg)
        window.location.href = `#${msg.id}`
    }
}

btnEnviar.addEventListener("click", newUserMessage)