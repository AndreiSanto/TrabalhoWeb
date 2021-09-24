document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);


//Mostrar em tempo real o valor da doação quando arrasta o range 

function mostrarValorDoacao() {

    var valor = document.getElementById("valDoacao").value;
    document.getElementById("valorDoacao").innerHTML = ` R$ ${valor},00`;
}