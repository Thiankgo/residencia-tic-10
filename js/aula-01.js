// const foo = "Const"
// console.log(foo)

// {
//     const bar = "Const dentro do Escopo"
// }
//console.log(bar) // Não funciona

//const bar = "foi"
//console.log(bar)

let aluno01 = { nome: "Thiago", matricula: 200210214 }

let alunos = []
//Depois executou 
alunos.push(aluno01)
//E exibiu no console 
// console.log(alunos)

//const estudantes = []

const estudantes = [...alunos]
//Depois inseriu um novo aluno 
estudantes.push({ nome: "Ronaldo", matricula: 2737828 })
//E comparou estudantes com alunos
console.log(estudantes);
console.log(alunos);