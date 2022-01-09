const textUsuario = document.querySelector("#textUsuario")
const btnEnviar = document.querySelector("#btnEnviar") 
const mensajes = document.querySelector("#mensajes")

function randomTime() {
    const rt = Math.random() * 5000
    return rt
}

const templateMessageGlobe = (mid, mtxt)=> {
    hora = new Date()
    return `<li class="texto-user" id="${mid}">
                <img src="https://avatars.githubusercontent.com/u/48518539?v=4" alt="" class="circle left" width="40px">
                <span class="user-font">${mtxt}</span>
                <p class="hora-text">${hora.getHours()}:${hora.getMinutes()}</p>
            </li>`
}

const templateMessageBotGlobe = (botId, botMsj)=> {
    hora = new Date()
    return `<li class="texto-bot" id="${botId}">
                <img src="img/sonny.png" alt="" class="circle right" width="40px">
                <span class="ns5-font">Echo: ${botMsj}</span>
                <p class="hora-text">${hora.getHours()}:${hora.getMinutes()}</p>
            </li>`
}

function newUserMessage2() {
    if (textUsuario.value.trim() > "") {
        msgid = Date.now()
        msgText = textUsuario.value.trim()
        mensajes.innerHTML += templateMessageGlobe(msgid, msgText)
    }
    setTimeout(() => {
        bid = Date.now().toString()
        msgid = Date.now()
        mensajes.innerHTML += templateMessageBotGlobe(bid, msgText)            
    }, 1000);
    window.location.href = `#${bid}`
    textUsuario.value = ""
}

btnEnviar.addEventListener("click", newUserMessage2)