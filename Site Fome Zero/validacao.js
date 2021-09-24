function validarcpf() {
    var cpf = document.form1.cpfDoador.value;
    var cpfValido = /^[0-9']*$/.test(cpf);
    if (cpfValido == false || cpf.length > 11 || cpf.length == 0) {
        return false

    } else {

        return true;
    }
}

function validarNome() {
    var nome = document.form1.nomeDoador.value;
    var nomeLetras = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(nome);
    if (nome.length == 0 || nomeLetras == false) {
        return false;
    } else {

        return true;
    }

}

function validarEmail() {
    var email = document.form1.emailDoador.value;
    var emailValido = /\S+@\S+\.\S+/.test(email);
    if (email.length == 0 || emailValido == false) {
        return false
    } else {
        return true;
    }

}

function validarTelefone() {
    var telefone = document.form1.telefoneDoador.value;
    var telefoneValido = /^[0-9']*$/.test(telefone);
    if (telefoneValido == false || telefone.length == 0 || telefone.length > 11) { return false; } else {

        return true;
    }
}


function enviar() {
    if (validarTelefone() == true && validarNome() == true && validarEmail() == true && validarcpf() == true) {
        alert("Doação Feita!")
    } else {
        if (validarTelefone() == false) {
            document.form1.telefoneDoador.value = '';

        }
        if (validarNome() == false) {
            document.form1.nomeDoador.value = '';

        }
        if (validarEmail() == false) {
            document.form1.emailDoador.value = '';
        }
        if (validarcpf() == false) {
            document.form1.cpfDoador.value = '';
        }
        alert("Campo Invalido!");
    }


}