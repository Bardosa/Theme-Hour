function theme() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 5 && hora < 12) {
        msg.innerHTML += ` Bom Dia!!!`
    
    } else if(hora >= 12 && hora < 19) {
        msg.innerHTML += ` Boa Tarde!!!`
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'rgb(235, 158, 57)'

    } else {
        msg.innerHTML += ` Boa Noite!!!`
        img.src = 'img/noite.jpg'
        document.body.style.background = 'rgb(6, 0, 23)'
    }
}

window.addEventListener('load', theme)