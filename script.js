function limparDisplay() {
    document.getElementById('display').value = "";
    document.getElementById('mensagem').textContent = ""; 
}

function calcularResultado() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
        document.getElementById('mensagem').textContent = ""; 
    } catch {
        document.getElementById('display').value = "Erro";
    }
}

function limiteCaractereres(valor) {
    const display = document.getElementById('display');
    const mensagem = document.getElementById('mensagem');

    if (display.value.length < 15) {
        display.value += valor;
        mensagem.textContent = "";
    } else {
        mensagem.textContent = "O limite máximo de 15 caracteres foi alcançado!";
    }
}
