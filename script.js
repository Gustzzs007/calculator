let expressao = '';

function adicionarNumero(numero) {
    expressao += numero;
    document.getElementById('resultado').value = expressao;
}

function adicionarOperacao(operacao) {
    expressao += ' ' + operacao + ' ';
    document.getElementById('resultado').value = expressao;
}

function calcular() {
    try {
        const resultado = eval(expressao.replace('^', '**'));  
        document.getElementById('resultado').value = resultado;
        expressao = resultado.toString();
    } catch (error) {
        document.getElementById('resultado').value = 'Erro';
        expressao = '';
    }
}

function limpar() {
    expressao = '';
    document.getElementById('resultado').value = '';
}
