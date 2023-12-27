const utils = require('./utils.js')
var prompt = require('prompt-sync')();
const fs = require('fs').promises

async function printUsers() {
    const usersString = fs.readFile("./js/data6/users.csv", 'utf-8', 'r')
    const addressesString = fs.readFile("./js/data6/address.csv", 'utf-8', 'r')

    let users = [...loadCSV((await usersString))]
    console.log(users)

    return new Promise((resolve) => {
        resolve({ users, addresses })
    });
}

printUsers().then(({ users, addresses }) => {

});

var csv = loadCSV()

function saveCSV(objs) {
    var csv = ""

    for (let p in objs[0]) {
        csv += p + ','
    }
    csv += '\n'

    for (let i = 1; i < objs.length; i++) {
        for (let p in objs[i]) {
            csv += objs[i][p] + ','
        }
        csv += '\n'
    }

    return csv
}

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

let peoples = [
    { name: "Ro", email: "a", phone: "21" },
    { name: "Ro", email: "b", phone: "21" },
    { name: "Ro", email: "c", phone: "21" },
]

function listPeople() {
    for (let people of peoples) {
        console.log("Name: ", people.name, "Email: ", people.email)
    }
}

function addOnePeople() {
    var name = prompt(`Qual o nome? `);
    var email = prompt(`Qual o email? `);
    var phone = prompt(`Qual o telefone? `);
    peoples.push({ name: name, email: email, phone: phone })
    save
}

function removeOnePeople() {
    var email = prompt(`Qual o email da pessoa para excluir? `);
    let i = peoples.findIndex((p) => p.email == email)
    if (i === undefined) {
        console.log(`o email ${email} não existe`)
    } else {
        peoples.splice(i, 1)
    }
}

function editOnePeople() {
    var email = prompt(`Qual o email da pessoa? `);
    let i = peoples.findIndex((p) => p.email == email)
    if (i === undefined) {
        console.log(`o email ${email} não existe`)
    } else {
        var param = prompt(`Qual parametro deve ser editado (name, email, phone)? `);
        var val = prompt(`Qual o valor do ${param}? `);
        if (param == "email" || param == "name" || param == "phone") {
            peoples[i][param] = val
        } else {
            console.log(`o parmaetro ${param} não existe`)
        }
    }
}

function findOnePeople() {
    var email = prompt(`Qual o email da pessoa? `);
    let people = peoples.find((p) => p.email == email)
    if (people === undefined) {
        console.log(`o email ${email} não existe`)
    } else {
        console.log("Name: ", people.name, "Email: ", people.email)
    }
}

function exitProgram() {
    process.exit()
}

function optionSelected(option) {
    options = [
        listPeople,
        addOnePeople,
        removeOnePeople,
        editOnePeople,
        findOnePeople,
        exitProgram
    ]
    options[option]()
}

const menu = () => {
    console.log(`\n1 - List\n2 - Add\n3 - removeOnePeople\n4 - editOnePeople\n5 - findOnePeople\n6 - exitProgram`)
    var option = prompt();

    optionSelected(Number.parseInt(option) - 1)

    menu()
}

const main = () => {
    menu()
}

main()