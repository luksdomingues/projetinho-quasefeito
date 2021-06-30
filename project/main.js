var valorDoProduto = { prod1: 152.54, prod2: 180.92, prod3: 749.90 }

function fonePhillips() {

    var contaPorcentagem = 10 / 100 * valorDoProduto.prod1
    var resultado1 = contaPorcentagem - valorDoProduto.prod1
    var original = document.querySelector('#valor-original')
    var res = document.querySelector('#valor-desconto')
    original.innerHTML = `${valorDoProduto.prod1}`
    res.innerHTML = `${valorDoProduto.prod1} Desconto: ${resultado1.toFixed(2)}`
}

function caixaSony() {

    var contaPorcentagem = 10 / 100 * valorDoProduto.prod2
    var resultado2 = contaPorcentagem - valorDoProduto.prod2
    var original = document.querySelector('#valor-original')
    var res = document.querySelector('#valor-desconto')
    original.innerHTML = `${valorDoProduto.prod2}`
    res.innerHTML = `${valorDoProduto.prod2} Desconto: ${resultado2.toFixed(2)}`
}

function airApple() {

    var contaPorcentagem = 10 / 100 * valorDoProduto.prod3
    var resultado3 = contaPorcentagem - valorDoProduto.prod3
    var original = document.querySelector('#valor-original')
    var res = document.querySelector('#valor-desconto')
    original.innerHTML = `${valorDoProduto.prod3}`
    res.innerHTML = `${valorDoProduto.prod3} Desconto: ${resultado3.toFixed(2)}`
}
/* desconto : 10/100 'X' valor do produto = resultado
       resultado - valor do produto*/