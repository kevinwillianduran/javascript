let num = document.querySelector('input#numtxt')
let lista = document.querySelector('input#flista')
let res = document.querySelector('div#res')
let valores = []

function inNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true 
    } else {
        return false
    }
}
function inLista(n, l){
    if(l.IndexOf(Number(n)) !=-1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) $$ !inLista(num.value, valores)){
        alert('Tudo OK!')
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}