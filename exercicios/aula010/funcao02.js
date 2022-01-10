function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(7, 8))

//abaixo função dentro de variavel

let v = function(x) {
    return x*2
}
console.log(v(5))