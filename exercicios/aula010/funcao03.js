function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) { // 5! = 5 - 4 - 3 - 2 - 1
        fat *= c
    }
    return fat    
}

console.log(fatorial(5))

/* RECURSIVIDAD
function fatorial(n) {
    if (n==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
cosole.log(fatorial(5))
*/