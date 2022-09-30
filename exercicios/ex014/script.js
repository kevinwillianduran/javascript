
function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos.`
    if (hora >= 0 && hora <12){
        foto.src = 'imagens/manha.jpg'
        document.body.style.background = '#b09d76'
    } else if (hora >= 12 && hora <18){
        foto.src = 'imagens/tarde.jpg'
        document.body.style.background = '#ba896e'
    } else {
        foto.src = 'imagens/noite.jpg'
        document.body.style.background = '#2f2a45'
    }
}
