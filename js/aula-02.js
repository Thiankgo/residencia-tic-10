{
    const a = 5
    const b = 1
    const c = 12

    if (a + b < c) {
        console.log("Valor " + String(a + b) + " é menor que " + String(c))
    } else {
        console.log("Valor " + String(a + b) + " é maior ou igual que " + String(c))
    }
}

{
    const user = {
        name: 'Carlos Júnior',
        sex: 'masculino',
        age: 12
    }

    if (user.name == undefined && typeof (user.name) != "string") {
        console.log("O usuário não tem nome registrado!")
    } else if (user.sex == undefined && typeof (user.sex) != "string") {
        console.log("O usuário não tem sexo registrado!")
    } else if (user.age == undefined && typeof (user.age) != "number") {
        console.log("O usuário não tem idade registrado!")
    } else {
        console.log(`O usuário ${user.name} do sexo ${user.sex} tem ${user.age} ano(s)!`)
    }
}

{
    const number = Math.floor(Math.random() * 11) // sorteia um número inteiro entre 0 e 10 (incluindo 0 e 10)

    if (number >= 5 && number <= 10) {
        console.log(`O número ${number} está entre 5 e 10`)
    } else {
        console.log(`O número ${number} está fora de 5 a 10`)
    }
}


{
    const number = Math.floor(Math.random() * 10) // sorteia um número inteiro entre 0 e 10 (incluindo 0 e 10)

    if (number % 2 == 0) {
        console.log(`O número ${number} é par`)
    } else {
        console.log(`O número ${number} é impar`)
    }
}

{
    const products = [
        {
            name: 'Caixa de Sabão Z',
            price: 30.99
        },
        {
            name: 'Chocolate X',
            price: 10.4
        },
        {
            name: 'Arroz T',
            price: 8.3
        },
        {
            name: 'Salgadinho F',
            price: 10.5
        }
    ]

    console.log(`Produtos com preço menor que R$ 10,50:`)
    // while (n < products.length) {

    //     if (products[n].price < 10.50) {
    //         console.log(`Produto: ${products[n].name}, Preço: ${products[n].price}`)
    //     }
    //     n++
    // }

    for (let prod of products) {
        if (prod.price < 10.50) {
            console.log(`Produto: ${prod.name}, Preço: ${prod.price}`)
        }
    }
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
    function compareByPrice(a, b) {
        return a.price - b.price;
    }
    
    const products = [
        {
            name: 'Caixa de Sabão Z',
            price: 30.99
        },
        {
            name: 'Chocolate X',
            price: 10.4
        },
        {
            name: 'Arroz T',
            price: 8.3
        },
        {
            name: 'Salgadinho F',
            price: 10.5
        }
    ]

    products.sort(compareByPrice)

    console.log(products)
}