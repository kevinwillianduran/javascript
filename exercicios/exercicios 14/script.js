function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.querySelector('#txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível Contar'
    } else {
       res.innerHTML = 'Contando: <br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

       if(p <= 0){
            alert('Passo inválido! COSIDERANDO PASSO = 1')
            p=1
       }
       if (i < f){
        //contagem crescente
        for(let contador = i;contador <= f;contador += p){
            res.innerHTML += ` ${contador} \u{1F970}`
       }
       } else {
        //contagem regressiva
            for(let contador = i;contador >= f;contador -= p){
                res.innerHTML += ` ${contador} \u{1F970}`
            }
       }
       res.innerHTML += '\u{1F3C1}'
    }
}