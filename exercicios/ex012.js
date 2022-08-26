var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora < 5){
    console.log(`Boa madrugada , CORUJA!`)
} else if (hora < 12){
    console.log(`Boa dia!`)
} else if (hora <= 18){
    console.log(`Boa tarde!`)   
} else {
    console.log(`Boa noite!`)
}