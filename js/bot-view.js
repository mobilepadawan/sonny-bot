const textUsuario = document.querySelector("#textUsuario")
const btnEnviar = document.querySelector("#btnEnviar") 
const mensajes = document.querySelector("#mensajes")

function randomTime() {
    const rt = Math.random() * 5000
    return rt
}

const templateMessageGlobe = ()=> {
    return `<li class="texto-user">
                <img src="https://avatars.githubusercontent.com/u/48518539?v=4" alt="" class="circle left" width="40px">
                <span class="user-font">Hola</span>
                <p class="hora-text">19:58</p>
            </li>`
}

function newUserMessage2() {
    if (textUsuario.value.trim() > "") {

    }
}

function newUserMessage() {
    if (textUsuario.value.trim() > "") {
        let msg = document.createElement("div")
        msg.classList.add("texto-user")
        msg.classList.add("user-font")
        msg.innerText = textUsuario.value.trim()
        msg.id = Date.now()
        mensajes.appendChild(msg)
        window.location.href = `#${msg.id}`
        setTimeout(() => {
            newBotMessage(msg)            
        }, 1000);
        textUsuario.value = ""
    }
}

function newBotMessage(userMsg) {
    if (userMsg.innerText.trim() != "") {
        const botMsg = document.createElement("div")
        botMsg.classList.add("texto-bot")
        botMsg.classList.add("ns5-font")
        botMsg.id = Date.now()
        botMsg.innerHTML = `<img src="img/3dots.gif" width="30px">`
        mensajes.appendChild(botMsg)
        window.location.href = `#${botMsg.id}`
        setTimeout(() => {
            botMsg.innerText = `Echo: ${userMsg.innerText}`            
            textUsuario.focus()
        }, randomTime());
    }
}

btnEnviar.addEventListener("click", newUserMessage)