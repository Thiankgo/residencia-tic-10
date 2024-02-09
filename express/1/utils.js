const fs = require('fs').promises

async function loadFile(filename) {
    var file = "[]"

    try {
        file = await fs.readFile(filename, 'utf-8', 'r')
    } catch (error) {
        if (error.code === 'ENOENT'){
            await fs.writeFile(filename,file, () => { })
            return JSON.parse(await file)
        }
        throw error
    }
    
    return JSON.parse(await file)
}

async function listPeople(peoples) {
    for (let people of peoples) {
        console.log(`Name: ${people.name}, Email: ${people.email}, Phone: ${people.phone}`)
    }
}

async function addOnePeople(filename, peoples, new_people) {
    peoples.push(new_people)
    await fs.writeFile(filename, JSON.stringify(peoples, undefined, 2))
    return new_people
}

async function removeOnePeople(filename, peoples, email) {
    let i = peoples.findIndex((p) => p.email == email)
    if (i === undefined) {
        console.log(`o email ${email} não existe`)
    } else {
        peoples.splice(i, 1)
        await fs.writeFile(filename, JSON.stringify(peoples, undefined, 2))
    }
}

async function editOnePeople(filename, peoples, email, param, val) {
    let i = peoples.findIndex((p) => p.email == email)
    if (i === undefined) {
        console.log(`o email ${email} não existe`)
    } else {
        if (param == "email" || param == "name" || param == "phone") {
            peoples[i][param] = val
            await fs.writeFile(filename, JSON.stringify(peoples, undefined, 2))
        } else {
            console.log(`o parmaetro ${param} não existe`)
        }
    }
}

async function findOnePeople(peoples, email) {
    let people = peoples.find((p) => p.email == email)
    if (people === undefined) {
        console.log(`o email ${email} não existe`)
    } else {
        return people
    }
}

module.exports = {
    loadFile,
    listPeople,
    addOnePeople,
    removeOnePeople,
    editOnePeople,
    findOnePeople
}