let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
      txt.innerHTML = 'Nome inválido'
    }else{
        txt.innerHTML = 'Nome Válido'
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@')== -1){
      txtEmail.innerHTML = 'E-mail inválido'
    }else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
    }
}