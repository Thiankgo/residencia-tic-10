const express = require('express')

const utils = require('./utils.js')

let filename = "./people.json"
let peoples = []

const app = express()
const port = 3000

app.use(express.json())

app.get("/pessoas", (req, res) => {
    utils.listPeople(peoples)
    return res.status(200).json(peoples)
})

app.get("/pessoas/:email", async (req, res) => {
    const people = await utils.findOnePeople(peoples,req.params.email)
    return res.status(200).json(people)
})

app.post("/pessoas", async (req, res) => {
    const people = await utils.addOnePeople(filename,peoples,req.body)
    return res.status(200).json(people)
})

app.listen(port, async () => {
    peoples = await utils.loadFile("./people.json")
    console.log(peoples)
    console.log(`Server started at https://localhost:${port}/`)
})







