let valores = [8,1,9,2,3,5]
console.log(valores)
//Acima está a primeira forma de mostrar um vetor na tela

for(let vet = 0;vet<valores.length;vet++){
    console.log(`A posição ${vet} tem o valor: ${valores[vet]}`)
}
// Aqui está a segunda forma
console.log('\nOutra forma de usar o for:\n')
//Mesma coisa mas com o FOR simplificado
for(let posicao in valores){
    console.log(`A posição ${posicao} tem o valor: ${valores[posicao]}`)
}
//Aqui usamos o IndexOf ( coloquei 4, tem 4 no vetor? Se não mostra a primeira mensagem, se sim, mostra o índice dele )
posicao = valores.indexOf(4)
if(posicao == -1){
    console.log(`\nO valor não existe no vetor!`)
}else {
    console.log(`\n O valor está na posição: ${posicao}`)
}