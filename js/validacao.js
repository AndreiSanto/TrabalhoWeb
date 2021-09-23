function validarCampos() {

    var nome = document.form1.Nome.value;


    var sobrenome = document.form1.Sobrenome.value;
    var email = document.form1.Email.value;
    var cpf = document.form1.cpf.value;
    var rua = document.form1.Rua.value;
    var bairro = document.form1.Bairro.value;
    var cidade = document.form1.Cidade.value;
    var valor = document.form1.Valor.value;
    var emailValido = /\S+@\S+\.\S+/.test(email);
    var nomeLetras = /^[a-zA-Z]*$/.test(nome);
    var sobrenomeLetras = /^[a-zA-Z]*$/.test(sobrenome);
    var p = document.createElement("p");
    var msg = document.getElementById("msg");
    if (nome.length == 0) {
        alert("Nome Vazio");
        document.getElementById('Nome').focus();
    }
    if (nomeLetras == false) {
        alert("Só Caractere");
        document.form1.Nome.value = '';
        document.getElementById('Nome').focus();


    }
    if (sobrenome.length == 0) {
        alert("Sobrenome Vazio");
        document.getElementById('Sobrenome').focus();
    }
    if (sobrenomeLetras == false) {
        alert("Só Caractere");
        document.form1.Sobrenome.value = '';
        document.getElementById('Sobrenome').focus();

    }
    if (email.length == 0) {
        alert("email Vazio");
        document.getElementById('Email').focus();
    }
    if (emailValido == false) {
        alert("Email Invalido!");
        document.form1.Email.value = '';
        document.getElementById('Email').focus();

    }


}