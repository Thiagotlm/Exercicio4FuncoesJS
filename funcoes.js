
/*Criando a função sayMyName

function sayMyName(name) {
    console.log('your name is:' + name);
}

sayMyName('Thiago');
sayMyName('Rodrigo');
sayMyName('Conceição');
*/

/*criando uma função de potênciação

function quadrado(valor) {
    return valor * valor;
}

console.log(quadrado(10) + quadrado(10));
*/

/*incrementar juros

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));



function calcularImc(peso, altura) {
   return peso / Math.pow(altura, 2);
}

function classificarImc(calcImc) {
    if (calcImc < 18.5) {
        return ('Abaixo do peso');
    } else if (calcImc >= 18.5 && calcImc < 25) {
        return ('Peso normal');
    } else if (calcImc >= 25 && calcImc < 30) {
        return ('Acima do peso');
    } else if (calcImc >= 30 && calcImc < 40) {
        return ('Obeso');
    } else {
        return('Obesidade Grave');
    }
}

function main() {
    const altura = 1.68;
    const peso = 80;
    const calcImc = calcularImc(peso, altura);
    console.log(classificarImc(calcImc));
}

main(); // Chama a função main
*/

function escrevaMeuNome(nome) {  //função que recebe uma string nome
    console.log('Meu nome é' + nome);
}
escrevaMeuNome('Thiago');
escrevaMeuNome('Rodrigo');


function veirificarIdade(idade) {   //função com condicional
    if (idade >= 18) {
        console.log('Maior');
    }
    else {
        console.log('Menor');
    }
}

veirificarIdade(18); // chamando a função


//função para cálculo de desconto em produtos
function calcularDesconto(preco, modalidade) {
    let desconto = 0;
    let parcelas = 1;
    let juros = 0;

    switch (modalidade) {
        case 'debito':
            desconto = preco * 0.1; // 10% de desconto
            break;
        case 'dinheiro':
        case 'pix':
            desconto = preco * 0.15; // 15% de desconto
            break;
        case '2x':
            parcelas = 2;
            break;
        default:
            parcelas = modalidade > 2 ? modalidade : 1;
            juros = preco * 0.1; // 10% de juros
    }

    const valorComDesconto = preco - desconto;
    const valorParcelas = valorComDesconto / parcelas;
    const valorTotalComJuros = valorComDesconto + juros;

    return {
        valorComDesconto: valorComDesconto.toFixed(2),
        valorParcelas: valorParcelas.toFixed(2),
        valorTotalComJuros: valorTotalComJuros.toFixed(2),
        desconto: desconto.toFixed(2),
        juros: juros.toFixed(2)
    };
}

// Exemplo de uso
const precoProduto = 100.00;
const modalidadeCompra = 'pix';
const resultado = calcularDesconto(precoProduto, modalidadeCompra);

console.log(`Valor com desconto: R$ ${resultado.valorComDesconto}`);
console.log(`Valor por parcela (${resultado.parcelas}x): R$ ${resultado.valorParcelas}`);
console.log(`Valor total com juros: R$ ${resultado.valorTotalComJuros}`);
console.log(`Desconto aplicado: R$ ${resultado.desconto}`);
console.log(`Juros aplicados: R$ ${resultado.juros}`);
