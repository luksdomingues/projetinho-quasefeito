var desconto = 10
var valorDoProduto = { prod1: 152.54, prod2: 180.92, prod3: 749.90 }

function fonePhillips() {
    var res = document.querySelector('#res')
    res.innerHTML = `${valorDoProduto.prod1} ` - desconto
}

function caixaSony() {
    var res = document.querySelector('#res')
    res.innerHTML = `${valorDoProduto.prod2} ` - desconto
}

function airApple() {
    var res = document.querySelector('#res')
    res.innerHTML = `${valorDoProduto.prod3} ` - desconto
}