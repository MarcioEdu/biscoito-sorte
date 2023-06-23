const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const messageText = document.querySelector(".message-text")

const img = document.querySelector("img")
const TryAgain = document.querySelector("#TryAgain")

const mensagensBiscoito = [
    "Comece onde você está, use o que você tem e faça o que você pode.", 
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.", 
    "Não importa que você vá devagar, contanto que você não pare.", 
    "Nunca esqueça que a sua felicidade não depende de mais ninguém!",
    "Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá."
]


img.addEventListener('click', imgClick)
TryAgain.addEventListener('click', btnReset)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        btnReset()
    }
})

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    let randomMessage = mensagensBiscoito[Math.floor(Math.random() * mensagensBiscoito.length)];
    messageText.textContent = randomMessage
}

function imgClick(event) {
    event.preventDefault()
    const imgClick = document.querySelector("#img")
    imgClick.style.animation = 'righttoleft 1.5ms infinite'

    toggleScreen()
}

function btnReset() {
    toggleScreen()
}