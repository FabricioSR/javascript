var usuario = {
    nome: 'fabricio',
    idade: '28'
} 

var extraInfo = {
    pais: 'Brasil',
    cidade: 'São Paulo'
}

var novoUsuario = Object.assign({}, usuario, extraInfo);
console.log(novoUsuario)

//para acrescentar a uma variavel existente: object.assing(usuario, extraInfo)

/*ou de uma maneira mais simplificada "spread"
var novoUsuario ={
    ...usuario,
    ...extraInfo
}
*/