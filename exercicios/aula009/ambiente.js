let num = [5, 8, 4]
num[3]=6 //acresenta um valor no vetor 3
num.push(7)//acresenta um valor e um vetor
num.sort()//coloca o vetor em ordem decrescente

console.log(`Nosso vetor é ${num}`)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
//console.log(`o valor esta na posição ${pos}`)
if (pos == -1) {
    console.log(`o valor nao foi encontrado!`)
} else {
    console.log(`o valor está na posição ${pos}`)
}

