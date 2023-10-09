function nota(){
var nota1 = Number(document.getElementById("nota1").value)
var nota2 = Number(document.getElementById("nota2").value)
var media = (nota1 + nota2) / 2

if(media >= 7){
    document.getElementById("Resp").innerText = "Parabéns! Você foi aprovado com a média:" + media
}else{
    document.getElementById("Resp").innerText = "Que pena. Infelizmente,  você não passou. Sua média foi:" + media
}

}