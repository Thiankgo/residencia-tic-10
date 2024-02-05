async function listPeople(peoples) {
    for (let people of peoples) {
        console.log(`Name: ${people.name}, Email: ${people.email}, Phone: ${people.phone}`)
    }
}

async function addOnePeople(peoples) {
    var name = prompt(`Qual o nome? `);
    var email = prompt(`Qual o email? `);
    var phone = prompt(`Qual o telefone? `);
    peoples.push({ name: name, email: email, phone: phone })
    await fs.writeFile("./js/mini-projeto/people.json", JSON.stringify(peoples, undefined, 2))
}

async function removeOnePeople(peoples, i) {
    if (i === undefined) {
    } else {
        peoples.splice(i, 1)
        await fs.writeFile("./js/mini-projeto/people.json", JSON.stringify(peoples, undefined, 2))
    }
}

async function editOnePeople(peoples, i, param, val) {
    if (param == "email" || param == "name" || param == "phone") {
        peoples[i][param] = val
        await fs.writeFile("./js/mini-projeto/people.json", JSON.stringify(peoples, undefined, 2))
    } else {
        console.log(`o parmaetro ${param} não existe`)
    }

}

async function findOnePeople(peoples, id) {
    let people = peoples[id]
    if (people === undefined) {
    } else {
        console.log("Name: ", people.name, "Email: ", people.email)
    }
    return people
}

async function exitProgram() {
    process.exit()
}

module.exports = {
    listPeople,
    addOnePeople,
    removeOnePeople,
    editOnePeople,
    findOnePeople,
    exitProgram
}