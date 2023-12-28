const utils = require('./utils.js')
var prompt = require('prompt-sync')();
const fs = require('fs').promises

let peoples = []

async function optionSelected(option) {
    options = [
        utils.listPeople,
        utils.addOnePeople,
        utils.removeOnePeople,
        utils.editOnePeople,
        utils.findOnePeople,
        utils.exitProgram
    ]
    options[option]()
}

const menu = async () => {
    console.log(`\n1 - List\n2 - Add\n3 - removeOnePeople\n4 - editOnePeople\n5 - findOnePeople\n6 - exitProgram`)
    var option = prompt();

    var file = fs.readFile("./js/mini-projeto/people.txt", 'utf-8', 'r')
    peoples = JSON.parse(await file)

    await optionSelected(Number.parseInt(option) - 1)

    menu()
}

const main = () => {
    menu()
}

main()