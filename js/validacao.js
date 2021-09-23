function validarCampos() {

    var nome = document.form1.Nome.value;


    var sobrenome = document.form1.Sobrenome.value;
    var email = document.form1.Email.value;
    var cpf = document.form1.cpf.value;
    var rua = document.form1.Rua.value;
    var bairro = document.form1.Bairro.value;
    var cidade = document.form1.Cidade.value;
    var valor = document.form1.Valor.value;
    var cpfValido = /^[0-9]*$/.test(cpf);
    var emailValido = /\S+@\S+\.\S+/.test(email);
    var nomeLetras = /^[a-zA-Z]*$/.test(nome);
    var sobrenomeLetras = /^[a-zA-Z]*$/.test(sobrenome);
    var ruaLetras = /^[a-zA-Z]*$/..test(rua);
    var cidadeLetra = /^[a-zA-Z]*$/..test(cidade);
    var bairroLetra = /^[a-zA-Z]*$/..test(bairro);
    var valorValido = /^[a-zA-Z]*$/..test(valor);
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
    if (cpfValido == false || cpf.length > 11) {
        alert("CPF Invalido!");
        document.form1.cpf.value = '';
        document.getElementById('cpf').focus();

    }
    if (cpf.length == 0) {
        alert("Campo vazio!");
        document.form1.cpf.value = '';
        document.getElementById('cpf').focus();

    }

    if (rua.length == 0) {
        alert("Campo Rua Vazio!");
        document.getElementById('Rua').focus();
    }
    if (ruaLetras == false) {
        alert("Só caractere!");
        document.form1.Rua.value = '';
        document.getElementById('Rua').focus();

    }
    if (bairro.length == 0) {
        alert("Campo Bairro Vazio!");
        document.getElementById('Bairro').focus();
    }
    if (bairroLetra == false) {
        alert("Só caractere!");
        document.form1.Bairro.value = '';
        document.getElementById('Bairro').focus();

    }
    if (cidade.length == 0) {
        alert("Campo Cidade Vazio!");
        document.getElementById('Cidade').focus();
    }
    if (cidadeLetra == false) {
        alert("Só caractere!!");
        document.form1.Cidade.value = '';
        document.getElementById('Cidade').focus();

    }
    if (email.length == 0) {
        alert("email Vazio");
        document.getElementById('Email').focus();
    }
    if (valorValido == false) {
        alert("Valor Invalido!");
        document.form1.Valor.value = '';
        document.getElementById('Valor').focus();

    }






}