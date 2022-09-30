let num = [5,8,2,9,3,89,1]
num.push(11)

num.sort(function(a, b) {
    return a-b
})

console.log(`Nosso vetor é o ${num} `)

console.log(`Número de elementos no vetor: ${num.length}`)
