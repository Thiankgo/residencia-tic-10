{
    function funcaoCallback(numeros) {
        const numeros_positivos = []
        for (let numero of numeros) {
            if (numero > 0) {
                numeros_positivos.push(numero)
            }
        }
        return numeros_positivos
    }

    function funcaoPrincipal(numeros, callback) {
        if (!Array.isArray(numeros)) {
            return "O primeiro parâmetro deve ser uma lista!"
        }

        const novo_numeros = callback(numeros)

        return novo_numeros
    }

    let numeros = [-2, 3, 0, 4, 2, - 1, -4, 8]
    let numerosPares = funcaoPrincipal(numeros, funcaoCallback)
    console.log(numerosPares)
}

{
    function mapeaCompra(compras, produtos) {
        const array = []
        for (let compra of compras) {
            for (let produto of produtos) {
                if (compra.produto_id == produto.id) {
                    const nova_compra = { ...compra }
                    delete nova_compra.produto_id
                    nova_compra.produto = produto
                    array.push(nova_compra)
                }
            }
        }
        return array
    }

    function funcao(compras, produtos, callback) {
        const compras_mapeadas = callback(compras, produtos)
        return compras_mapeadas
    }

    let produtos = [
        { id: 1, nome: "Traquinas", peso: "500g" },
        { id: 2, nome: "Negresco", peso: "300g" },
        { id: 3, nome: "Floresta Negra", peso: "370g" }
    ]
    let compras = [
        { id: 1, produto_id: 1, qtd: 3 },
        { id: 2, produto_id: 2, qtd: 4 }
    ]
    let comprasMapeadas = funcao(compras, produtos, mapeaCompra)

    console.log(comprasMapeadas)
}

{

    function funcao(numeros) {
        let soma = 0;
        numeros.forEach(element => {
            if (element % 2 == 1) soma += element
        });
        return soma
    }

    let numeros = [0, 2, 1, 5, 7, 0, 2, 21, 1, 3]
    //Números a serem somados 1, 5, 7, 21, 1,3 
    let resultado = funcao(numeros)
    console.log(resultado)
}

{
    function funcao(numeros) {
        let soma = numeros.reduce((acc, val) => (val % 2 == 1 ? acc + val : acc));
        return soma
    }

    let numeros = [0, 2, 1, 5, 7, 0, 2, 21, 1, 3]
    //Números a serem somados 1, 5, 7, 21, 1,3 
    let resultado = funcao(numeros)
    console.log(resultado)
}

{
    function selecionaInadimplentes(usuarios) {
        const inadimplentes = []
        usuarios.forEach(element => {
            if (element.pagamento == "pendente") inadimplentes.push(element.nome)
        });
        return inadimplentes
    }

    let usuarios = [
        { id: 1, nome: "Fulano de Tal", pagamento: "pendente" },
        { id: 2, nome: "Ronaldo Nazário", pagamento: "pago" },
        { id: 3, nome: "Michael Jordan", pagamento: "pago" },
        { id: 4, nome: "Maria Rios", pagamento: "pago" },
        { id: 5, nome: "Julia Sousa", pagamento: "pago" },
        { id: 6, nome: "José Neymar", pagamento: "pendente" },
        { id: 7, nome: "Mariana Riacho", pagamento: "pago" },
        { id: 8, nome: "Fabiana Beatriz", pagamento: "pendente" },
    ]
    let inadimplentes = selecionaInadimplentes(usuarios)
    console.log(inadimplentes)
}