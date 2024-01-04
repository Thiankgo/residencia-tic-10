var display_string = "";

function soma(a, b) { return a + b }
function subt(a, b) { return a - b }
function mult(a, b) { return a * b }
function divi(a, b) { return a / b }

function calculator(comando, a, b) {
   switch (comando) {
      case "+":
         return soma(a, b)
      case "-":
         return subt(a, b)
      case "*":
         return mult(a, b)
      case "/":
         return divi(a, b)
      default:
         console.log("Comando invalido")
         return null
   }
}

function lerBotao(id) {
   console.log(id)
   if (id === "=") {
      var operations = display_string.split(/(\+|\*|-|\/)/g)
      console.log(operations)
      do {
         for (let i = 1; i < operations.length - 1; i++) {
            if (operations[i] == "*" || operations[i] == "/") {
               let op =  operations[i - 1] !== "" ? Number.parseFloat(operations[i - 1]) : 1
               let op2 = operations[i + 1] !== "" ? Number.parseFloat(operations[i + 1]) : 1
               let res = calculator(operations[i], op, op2)
               operations.splice(i - 1, 3, res)
               console.log(operations)
               i = 1
            }
         }
         for (let i = 1; i < operations.length - 1; i++) {
            if (operations[i] == "+" || operations[i] == "-") {
               let op =  operations[i - 1] !== "" ? Number.parseFloat(operations[i - 1]) : 0
               let op2 = operations[i + 1] !== "" ? Number.parseFloat(operations[i + 1]) : 0
               let res = calculator(operations[i], op, op2)
               operations.splice(i - 1, 3, res)
               console.log(operations)
               i = 1
            }
         }
      } while (operations.length > 1)
      display_string = operations[0];
      display.innerHTML = display_string;
   } else {
      display_string += id;
      display.innerHTML = display_string;
   }
}

function aplicarCalculo() {

}
