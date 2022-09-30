function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var form_ano = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if (form_ano.value.length == 0 || form_ano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente, BOBÃO! [ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <12){
                img.setAttribute('src', 'imagens/boy.jpg')
            } else if (idade <21) {
                img.setAttribute('src', 'imagens/2boy.jpg')
            } else if (idade <50) {
                img.setAttribute('src', 'imagens/macho.jpg')
            } else {
                img.setAttribute('src', 'imagens/noel.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <12){
                img.setAttribute('src', 'imagens/pou.jpeg')
            } else if (idade <21) {
                img.setAttribute('src', 'imagens/2girl.jpg')
            } else if (idade <50) {
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else {
                img.setAttribute('src', 'imagens/velha.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}