{
    function order5String(...args) {
        for (let arg of args) {
            if (typeof (arg) != "string") {
                console.log("Warning: Digite apenas strings")
                return null
            } else if (arg.length <= 3) {
                console.log("Warning: As strings devem ter comprimento maior que 3.");
                return null
            }
        }
        return [...args].sort()
    }

    console.log(order5String("Azbf", "beaa", "afdb", "Zadf", "Azagg"))
}

{
    function multArrayFrontBack(array) {
        return {
            multiplicacao: array[0] * array[array.length - 1],
            resto: array[0] % array[array.length - 1]
        }
    }

    numeros = [1, 2, 4, 5, 3, 2, 7, 9, 0, 2]
    console.log(multArrayFrontBack(numeros))
}

{
    function soma(a, b) { return a + b }
    function subt(a, b) { return a - b }
    function mult(a, b) { return a * b }
    function divi(a, b) { return a / b }

    function calculadora(comando, a, b) {
        switch (comando) {
            case "soma":
                return soma(a, b)
            case "subtração":
                return subt(a, b)
            case "multiplicação":
                return mult(a, b)
            case "divisão":
                return divi(a, b)
            default:
                console.log("Comando invalido")
                return null
        }
    }

    console.log(calculadora("divisão", 9, 4))
}

{
    function somatorio(...values) {
        let sum = 0;
        for (let val of values) {
            sum += val
        }
        return sum
    }

    let soma = somatorio(2, 3, 5, 1)
    console.log(soma)
}

{
    function factorial(num) { // assinatura da função
        let fac = 1
        do { fac *= num-- } while (num > 1)
        return fac
    }

    const number = 4

    console.log(factorial(number))
}


{
    const calc = require('./aula3-commonjs/menu.js')
    let divisao = calc.calculator("divisão", 9, 4)
    console.log(divisao)
}

