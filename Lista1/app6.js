function fatorial(){
var num = Number(document.getElementById("num").value)
var i = 1
var numUser = Number(document.getElementById("num").value) 
do {
    num *= i
    i++
}while (i < 5)


document.getElementById("Resp").innerHTML = "Seu numero em fatorial é: " + num 

}