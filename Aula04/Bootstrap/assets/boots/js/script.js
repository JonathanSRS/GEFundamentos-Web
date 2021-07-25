let nome = document.querySelector('#nome')

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@')== -1){
      txtEmail.innerHTML = 'E-mail inválido'
    }else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'orange'
    }
}