function autenticar() {
    const login = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (login === 'usuario' && senha === 'senha') {
        document.getElementById('mensagem').innerHTML = 'Login Autenticado'
    }else{
        document.getElementById('mensagem').innerHTML = 'Acesso negado!'
    }

    document.getElementById('mensagem').style.fontSize = "30px";
     document.getElementById('mensagem').style.textAlign ="center";
}