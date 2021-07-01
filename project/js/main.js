var valorDoProduto = { prod1: 152.54, prod2: 180.92, prod3: 749.90 }
function fonePhillips() {

    var contaPorcentagem = 10 / 100 * valorDoProduto.prod1
    var resultado1 = contaPorcentagem - valorDoProduto.prod1
    res.innerHTML = `Valor do produto :${valorDoProduto.prod1} Com desconto de 10%: ${resultado1.toFixed(2)}`
}

function caixaSony() {

    var contaPorcentagem = 10 / 100 * valorDoProduto.prod2
    var resultado2 = contaPorcentagem - valorDoProduto.prod2
    res.innerHTML = `Valor do produto :${valorDoProduto.prod2} Com desconto de 10%: ${resultado2.toFixed(2)}`
}

function airApple() {

    var contaPorcentagem = 10 / 100 * valorDoProduto.prod3
    var resultado3 = contaPorcentagem - valorDoProduto.prod3
    res.innerHTML = `Valor do produto :${valorDoProduto.prod3} Com desconto de 10%: ${resultado3.toFixed(2)}`
}
/* desconto : 10/100 'X' valor do produto = resultado
       resultado - valor do produto*/

           // var original = document.querySelector('#valor-original')
    // var res = document.querySelector('#valor-desconto')
    // original.innerHTML = `${valorDoProduto.prod3}`