async function listPeople() {
    for (let people of peoples) {
        console.log(`Name: ${people.name}, Email: ${people.email}, Phone: ${people.phone}`)
    }
}

async function addOnePeople() {
    var name = prompt(`Qual o nome? `);
    var email = prompt(`Qual o email? `);
    var phone = prompt(`Qual o telefone? `);
    peoples.push({ name: name, email: email, phone: phone })
    await fs.writeFile("./js/mini-projeto/people.txt", JSON.stringify(peoples,undefined,2))
}

async function removeOnePeople() {
    var email = prompt(`Qual o email da pessoa para excluir? `);
    let i = peoples.findIndex((p) => p.email == email)
    if (i === undefined) {
        console.log(`o email ${email} não existe`)
    } else {
        peoples.splice(i, 1)
        await fs.writeFile("./js/mini-projeto/people.txt", JSON.stringify(peoples,undefined,2))
    }
}

async function editOnePeople() {
    var email = prompt(`Qual o email da pessoa? `);
    let i = peoples.findIndex((p) => p.email == email)
    if (i === undefined) {
        console.log(`o email ${email} não existe`)
    } else {
        var param = prompt(`Qual parametro deve ser editado (name, email, phone)? `);
        var val = prompt(`Qual o valor do ${param}? `);
        if (param == "email" || param == "name" || param == "phone") {
            peoples[i][param] = val
           await fs.writeFile("./js/mini-projeto/people.txt", JSON.stringify(peoples,undefined,2))
        } else {
            console.log(`o parmaetro ${param} não existe`)
        }
    }
}

async function findOnePeople() {
    var email = prompt(`Qual o email da pessoa? `);
    let people = peoples.find((p) => p.email == email)
    if (people === undefined) {
        console.log(`o email ${email} não existe`)
    } else {
        console.log("Name: ", people.name, "Email: ", people.email)
    }
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