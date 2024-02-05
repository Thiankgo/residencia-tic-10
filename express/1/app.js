const express = require('express')

const utils = require('./utils.js')
const fs = require('fs').promises

let peoples = []

const app = express()
const port = 3000

app.use(express.json())

app.get("/pessoas", (req, res) => {
    utils.listPeople(peoples)
    return res.status(200).json(peoples)
})

app.get("/pessoas/:id", (req, res) => {
    const people = utils.findOnePeople(Number.parseInt(peoples,req.params.id))
    return res.status(200).json(people)
})

const load = async () => {
    var file = fs.readFile("./people.json", 'utf-8', 'r')
    peoples = JSON.parse(await file)
}

app.listen(port, () => {
    load()
    console.log(`Server started at https://localhost:${port}/`)
})



