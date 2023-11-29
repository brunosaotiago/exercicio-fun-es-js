// Função tradicional sem parâmetros
function operacaoPadrao() {
    return 10 + 5; // Exemplo de operação padrão (soma)
}

// Função com parâmetros
function calcularOperacao(num1, num2, operacao) {
    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            return num1 / num2;
        default:
            return 'Operação inválida';
    }
}

// Arrow function com parâmetros
const calcularArrow = (num1, num2, operacao) => {
    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            return num1 / num2;
        default:
            return 'Operação inválida';
    }
};

// Exemplos de uso
console.log('Função tradicional sem parâmetros:', operacaoPadrao());

console.log('Função com parâmetros:', calcularOperacao(8, 4, 'multiplicacao'));

console.log('Arrow function com parâmetros:', calcularArrow(20, 3, 'divisao'));
