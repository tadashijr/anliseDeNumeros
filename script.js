let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n) { // função para validar se o número esta dentro da regra
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { // função para determinar se o dado inserido é número
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() { // regra para adicionar um valores ao selec div#res
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item =  document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()

}

function finalizar() {
    if (valores.length == 0 ) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            meno = valores[pos]                      
        }
          
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> ao todo, temos ${total} números cadastrado.</p>`
        res.innerHTML += `<p> O maior valor informado foi + ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado foi - ${menor} </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma} </p>`
        res.innerHTML += `<p> A méida dos valores digitados são ${media} </p>`
    }
}