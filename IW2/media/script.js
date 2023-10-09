function calcularMedia(){

    let nota1 = parseFloat(document.getElementById('nota1').value);

    let nota2 = parseFloat(document.getElementById('nota2').value);
    
    let media=(nota1 + nota2)/2;
    
     let resultado = document.getElementById('resultado');
     resultado.innerHTML= "A Média é: "+ media;
     document.getElementById('resultado').style.fontSize = "30px";
     document.getElementById('resultado').style.textAlign ="center";
     
}