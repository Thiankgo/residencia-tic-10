import users from "./users.js"

function saveStudent(nome, matricula) {
    users.push({ nome, matricula })
}

function listStudents() {
    for (let user of users) {
        console.log("Nome: ", user.nome, "Matricula: ", user.matricula)
    }
}

export default {
    saveStudent,
    listStudents
}