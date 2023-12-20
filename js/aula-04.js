{
    function showProductsInfo(products) {

        if (!Array.isArray(products)) {
            return "O argumento deve ser lista"
        }

        if (products.length <= 0) {
            return "Lista vazia"
        }

        let ret = ""
        for (let product of products) {
            ret += `ID do produto: ${product.id}\nNome do Produto: ${product.name}\nPreço do produto: R$ ${product.price}\n\n`
        }

        return ret
    }

    const products = [
        {
            id: 1,
            name: 'Jogo de Panelas',
            price: 54.59
        },
        {
            id: 2,
            name: 'Chocolate L',
            price: 14.99
        },
        {
            id: 3,
            name: 'Sabão Lili',
            price: 29.99
        }
    ]
    // console.log(products)
    console.log(showProductsInfo(products))
}

{
    function findUserById(users, id) {
        if (!Array.isArray(users)) {
            return "O primeiro parâmetro deve ser uma lista!"
        }

        if (typeof (id) !== "number") {
            return "O segundo parâmetro deve ser um número!"
        }

        for (let user of users) {
            if (user.id === id) {
                return user
            }
        }

        return null
    }

    const users = [
        {
            id: 1,
            name: 'Carlos Júnior',
            age: 26
        },
        {
            id: 2,
            name: 'Ceverino Cordeiro',
            age: 70
        }
    ]

    console.log(findUserById(users, 2))
    /* resultado no terminal deve ser:
    {
        id: 2,
        name: 'Ceverino Cordeiro',
        age: 70
    }
    */

    console.log(findUserById(users, 5))
    /* resultado no terminal deve ser:
    null
    */

    console.log(findUserById(users, '2'))
    /* resultado no terminal deve ser:
    O segundo parâmetro deve ser um número!
    */
}

{
    function filterProductByName(products, name) {
        if (!Array.isArray(products)) {
            return "O primeiro parâmetro deve ser uma lista!"
        }

        if (typeof (name) !== "string") {
            return "O segundo parâmetro deve ser uma string!"
        }

        name = name.toLowerCase()

        const new_products = []
        for (let product of products) {
            if (product.name.toLowerCase().includes(name)) {
                new_products.push(product)
            }
        }

        return new_products
    }

    const products = [
        {
            id: 1,
            name: 'Jogo de Panelas',
            price: 54.59
        },
        {
            id: 2,
            name: 'Chocolate L',
            price: 14.99
        },
        {
            id: 3,
            name: 'Sabão Lili',
            price: 29.99
        }
    ]

    console.log(filterProductByName(products, 'cho'))
    /* resultado no terminal deve ser:
    [
        {
            id: 2,
            name: 'Chocolate L',
            age: 14.99
        }
    ]
    */

    console.log(filterProductByName(products, 'Arroz'))
    /* resultado no terminal deve ser:
    []
    */

    console.log(filterProductByName(products, 2))
    /* resultado no terminal deve ser:
    O segundo parâmetro deve ser uma string!
    */
}

{
    function mapProductsRemoveId(products) {
        if (!Array.isArray(products)) {
            return "O primeiro parâmetro deve ser uma lista!"
        }

        const new_products = []
        for (let product of products) {
            delete product.id
            new_products.push(product)  
        }

        return new_products
    }

    const products = [
        {
            id: 1,
            name: 'Jogo de Panelas',
            price: 54.59
        },
        {
            id: 2,
            name: 'Chocolate L',
            price: 14.99
        },
        {
            id: 3,
            name: 'Sabão Lili',
            price: 29.99
        }
    ]

    console.log(products)
    console.log(mapProductsRemoveId(products))
    /* resultado no terminal deve ser:
    [
        {
            name: 'Jogo de Panelas',
            price: 54.59
        },
        {
            name: 'Chocolate L',
            price: 14.99
        },
        {
            name: 'Sabão Lili'
            price: 29.99
        }
    ]
    */

    console.log(mapProductsRemoveId([]))
    /* resultado no terminal deve ser:
    []
    */

    console.log(mapProductsRemoveId(2))
    /* resultado no terminal deve ser:
    O parâmetro deve ser uma lista!
    */
}

{
    function sumProductsPrice(products) {
        if (!Array.isArray(products)) {
            return "O primeiro parâmetro deve ser uma lista!"
        }

        let sum = 0
        for (let product of products) {
            sum += product.price
        }

        return sum
    }

    const products = [
        {
            id: 1,
            name: 'Jogo de Panelas',
            price: 54.59
        },
        {
            id: 2,
            name: 'Chocolate L',
            price: 14.99
        },
        {
            id: 3,
            name: 'Sabão Lili',
            price: 29.99
        }
    ]
    
    console.log(sumProductsPrice(products))
    /* resultado no terminal deve ser:
    99.57
    */
    
    console.log(sumProductsPrice([]))
    /* resultado no terminal deve ser:
    0
    */
    
    console.log(sumProductsPrice(2))
    /* resultado no terminal deve ser:
    O parâmetro deve ser uma lista!
    */
}