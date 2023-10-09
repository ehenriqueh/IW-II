function calcular(){
    var etanol = parseFloat(formulario.etanol.value.replace(",","."));
    var gasolina = parseFloat(formulario.gasolina.value.replace(",","."));

    if(etanol < 0.70 * gasolina){
        document.getElementById('status').src='img/combustivel.png';
    }else{
        document.getElementById('status').src='img/combustivel (1).png';
    }
}

function limpar(){
    document.getElementById('status').src='img/trabalhador (1).png';
    formulario.reset();//para limpar os campos do formulario
}