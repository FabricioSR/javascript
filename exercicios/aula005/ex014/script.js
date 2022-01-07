function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    //var hora = 22 
    msg.innerHTML = ` Agora São ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // bom dia  
        img.src = 'fotomanha.jpg' 
        document.body.style.backgroundColor = '#e2cd9f' 
    } else if (hora >= 12 && hora <18) {
        //boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        //boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.backgroundColor = '#515154'
    }
}