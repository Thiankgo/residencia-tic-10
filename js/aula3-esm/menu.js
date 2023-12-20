import {soma,subt,mult,divi} from "./operacoes.js"

export function calculator(comando, a, b) {
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