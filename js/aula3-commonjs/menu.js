const operations = require('./operacoes.js')

function calculator(comando, a, b) {
    switch (comando) {
        case "soma":
            return operations.soma(a, b)
        case "subtração":
            return operations.subt(a, b)
        case "multiplicação":
            return operations.mult(a, b)
        case "divisão":
            return operations.divi(a, b)
        default:
            console.log("Comando invalido")
            return null
    }
}

module.exports = {
    calculator
}