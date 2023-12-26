const utils = require('./utils.js')

let peoples = [
    { name: "Ro", email: "w@", phone: "21" },
    { name: "Ro", email: "w@", phone: "21" },
    { name: "Ro", email: "w@", phone: "21" },
]

function listPeople() {
    for (let people of peoples) {
        console.log("Name: ", people.name, "Email: ", people.email)
    }
}

function addOnePeople() {

}

function removeOnePeople() {

}

function editOnePeople() {

}

function findOnePeople() {

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

const main = () => {
    const readline = require('node:readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question(`
1 - List
2 - Add
3 - removeOnePeople
4 - editOnePeople
5 - findOnePeople
6 - exitProgram
`   , option => {
        readline.close();

        optionSelected(Number.parseInt(option) - 1)
        main()
    });
}

main()