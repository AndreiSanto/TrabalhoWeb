function validarCampos() {
    var nome = document.form1.Nome.value;
    var sabrenome = document.form1.Sobrenome.value;
    var email = document.form1.Email.value;
    var cpf = document.form1.CPF.value;
    var rua = document.form1.Rua.value;
    var bairro = document.form1.Bairro.value;
    var cidade = document.form1.Cidade.value;
    var valor = document.form1.Valor.value;
    var nomeLetras = /^[a-zA-Z]*$/.test(nome);
    if (nome.length == 0) {}
    if (nomeLetras == false) {


    }


}