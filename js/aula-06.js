{
    const estante = [[
        { id: 1, cor: "FFFFFF" },
        { id: 1, cor: "FFFFFF" },
        { id: 1, cor: "FFFFFF" },
    ], [
        { id: 1, cor: "FFFFFF" },
        { id: 1, cor: "FFFFFF" },
        { id: 1, cor: "FFFFFF" },
    ], [
        { id: 1, cor: "FFFFFF" },
        { id: 1, cor: "FFFFFF" },
        { id: 1, cor: "FFFFFF" },
    ]]
}

{
    function selecionaLinha(estante, linha) {
        const caixas = [...estante[linha - 1]]
        return caixas
    }

    const estante = [[
        { id: 1, cor: "FFFFFF" },
        { id: 2, cor: "FFFFFF" },
        { id: 3, cor: "FFFFFF" },
    ], [
        { id: 4, cor: "FFFFFF" },
        { id: 5, cor: "FFFFFF" },
        { id: 6, cor: "FFFFFF" },
    ], [
        { id: 7, cor: "FFFFFF" },
        { id: 8, cor: "FFFFFF" },
        { id: 9, cor: "FFFFFF" },
    ]]

    console.log(selecionaLinha(estante, 1))
}

{
    function selecionaColuna(estante, coluna) {
        const caixas = []
        estante.forEach(linha => {
            linha.forEach(caixa => {
                if (linha[coluna - 1] == caixa) caixas.push(caixa)
            });
        });
        return caixas
    }

    const estante = [[
        { id: 1, cor: "FFFFFF" },
        { id: 2, cor: "FFFFFF" },
        { id: 3, cor: "FFFFFF" },
    ], [
        { id: 4, cor: "FFFFFF" },
        { id: 5, cor: "FFFFFF" },
        { id: 6, cor: "FFFFFF" },
    ], [
        { id: 7, cor: "FFFFFF" },
        { id: 8, cor: "FFFFFF" },
        { id: 9, cor: "FFFFFF" },
    ]]

    console.log(selecionaColuna(estante, 1))
}

{
    function selecionaDiagonal(estante) {
        const caixas = []

        for (let linha in estante) {
            for (let coluna in estante) {
                if (linha === coluna) caixas.push(estante[linha][coluna])
            }
        }

        return caixas
    }

    const estante = [[
        { id: 1, cor: "FFFFFF" },
        { id: 2, cor: "FFFFFF" },
        { id: 3, cor: "FFFFFF" },
    ], [
        { id: 4, cor: "FFFFFF" },
        { id: 5, cor: "FFFFFF" },
        { id: 6, cor: "FFFFFF" },
    ], [
        { id: 7, cor: "FFFFFF" },
        { id: 8, cor: "FFFFFF" },
        { id: 9, cor: "FFFFFF" },
    ]]

    console.log(selecionaDiagonal(estante))
}

{
    function selecionaDiagonal(estante) {
        const caixas = []

        for (let linha in estante) {
            for (let coluna in estante) {
                if (estante[linha].length - 1 - linha == coluna) caixas.push(estante[linha][coluna])
            }
        }

        return caixas
    }

    const estante = [[
        { id: 1, cor: "FFFFFF" },
        { id: 2, cor: "FFFFFF" },
        { id: 3, cor: "FFFFFF" },
    ], [
        { id: 4, cor: "FFFFFF" },
        { id: 5, cor: "FFFFFF" },
        { id: 6, cor: "FFFFFF" },
    ], [
        { id: 7, cor: "FFFFFF" },
        { id: 8, cor: "FFFFFF" },
        { id: 9, cor: "FFFFFF" },
    ]]

    console.log(selecionaDiagonal(estante))
}

{
    function uniqueValues(numbers) {
        if (!Array.isArray(numbers)) {
            return "O parâmetro deve ser uma lista!"
        }

        return [...new Set([...numbers])]
    }

    const numbers = [1, 2, 3, 3, 2, 4, 0]

    console.log(uniqueValues(numbers))
    /* resultado no terminal deve ser:
    [1, 2, 3, 4, 0]
    */

    console.log(uniqueValues([]))
    /* resultado no terminal deve ser:
    []
    */

    console.log(uniqueValues(2))
    /* resultado no terminal deve ser:
    O parâmetro deve ser uma lista!
    */
}

{
    function innerJoin(numbers1, numbers2) {
        if (!Array.isArray(numbers1)) {
            return "O parâmetro 1 deve ser uma lista!"
        }

        if (!Array.isArray(numbers2)) {
            return "O parâmetro 2 deve ser uma lista!"
        }

        const set2 = new Set([...numbers2])
        const innerjoin = new Set(numbers1.filter(x => set2.has(x)));

        return [...innerjoin]
    }

    const numbers1 = [1, 2, 3, 3, 2, 4, 0]
    const numbers2 = [1, 2, 3, 5, 10]

    console.log(innerJoin(numbers1, numbers2))
    /* resultado no terminal deve ser:
    [1, 2, 3]
    */

    console.log(innerJoin([], numbers2))
    /* resultado no terminal deve ser:
    []
    */

    console.log(innerJoin(2, numbers2))
    /* resultado no terminal deve ser:
    O primeiro parâmetro deve ser uma lista!
    */
}

{
    const fs = require('fs').promises

    const usersString = fs.readFile("./js/data6/users.csv", 'utf-8', 'r')

    usersString.then(total => {
        console.log(total)
    })
}


{
    function loadCSV(csv) {
        const objs = []
        const list = []
        const linhas = csv.split('\n')
        for (let linha of linhas) {
            list.push(linha.split(','))
        }

        const params = [...list[0]]

        for (let i = 1; i < list.length; i++) {
            const obj = {}
            for (let p = 0; p < params.length; p++) {
                obj[params[p]] = list[i][p]
            }
            objs.push(obj)
        }

        return objs
    }

    async function printUsers() {
        const usersString = fs.readFile("./js/data6/users.csv", 'utf-8', 'r')
        const addressesString = fs.readFile("./js/data6/address.csv", 'utf-8', 'r')
        
        let users = [...loadCSV((await usersString))]
        console.log(users)
        let addresses = [...loadCSV((await addressesString))]
        console.log(addresses)

        return new Promise((resolve) => {
            resolve({users,addresses})
        });
    }

    const fs = require('fs').promises
    printUsers().then(({users,addresses}) => {
        for (let user of users) {
            for (let address of addresses) {
                if (address.idUser == user.id) {
                    console.log(`Usuário: ${user.name}\nEndereço: ${address.address}, ${address.number}\n`)
                }
            }
        }
      });
}

{
    new Promise((resolve) => {
        resolve(1)
    }).then(res => console.log(res))

    console.log('b')
    console.log('a')
}