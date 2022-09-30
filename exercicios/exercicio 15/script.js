function tabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Please type a number')
    } else {
        let n = Number(num.value)

        tab.innerHTML = ''//limpa a tabuada pra não ficar mostrando tabuadas infinitas

        for(let c = 1;c<=10;c++){
            let multi = document.createElement('option')
            multi.text = `${n} x ${c} = ${n*c}`
            multi.value = `tab${c}`
            tab.appendChild(multi)
        }
    }
}