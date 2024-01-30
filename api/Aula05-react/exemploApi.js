import axios from 'axios';
//Importação axios ---------------------------------^^^^^^^




// Exemplo com fetch API--------------------------------------------------------------

const baseUrl = "https://65a7c6ee94c2c5762da7865c.mockapi.io/"
 const api ={
    getContatos:  async()=> {
       return fetch(`${baseUrl}/contacts`)
    },
    postContatos: async(name, phone)=>{
        return fetch(`${baseUrl}/contacts`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:name, phone:phone})
        })
    },
    putContatos:async(name, phone, id)=>{
        return fetch(`${baseUrl}/contacts/${id}`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:name,phone:phone})
        })
    },
    deleteContatos:async(id)=>{
        return fetch(`${baseUrl}/contacts/${id}`, {
            method:"DELETE"
        })
    }
}
//Exemplo de get com then
// api.getContatos().then((response)=>{
//     response.json().then((result)=>{
//         console.log(result)
//     })
// })

// // Exemplo com await async GET

//     let response= await api.getContatos();
//     let result = await response.json()
//     console.log(result, "Get")
// // Exemplo com await async POST 

// let responsePost= await api.postContatos("Darlan", "8598888-8888");
//     let resultPost= await responsePost.json()
//     console.log(resultPost, "Post")
// // Exemplo com await async PUT 
// let responsePut= await api.putContatos("Darlan", "8598888-8800", 15);
// let resultPut= await responsePut.json()
//     console.log(resultPut, "Put")

// // Exemplo com await async DELETE
// let id = 10;
// let responseDelete= await api.deleteContatos(id);
// let resultDelete= await responseDelete.json()
//     console.log(resultDelete , "Delete")

//-----------------------------------

/// Exemplo com a utilização de axios
// ---------Exemplo com GET-------------------


// axios.get(`${baseUrl}/contacts`).then((response)=>{
//     console.log(response, "response do axios")
// })

// axios.get(`${baseUrl}/contacts`).then((response)=>{
//     console.log(response.data, "response do axios")
// })

// axios.post(`${baseUrl}/contacts`, {name:"DarlanTeste", phone:"85986868686"}).then((response)=>{
//     console.log(response.data)
// })
// Pode ser passado um objeto salvo em variável

// let contact = {name:"DarlanTeste", phone:"85986868686"}
// axios.post(`${baseUrl}/contacts`, contact).then((response)=>{
//     console.log(response.data)
// })

// PUT axios 
// let contactPUT = {name:"DarlanTeste", phone:"85986868686"}
// let id=5  // Não esquecer de fornecer o id 
// axios.put(`${baseUrl}/contacts/${id}`, contactPUT).then((response)=>{
//     console.log(response.data)
// })

// // DELETE 
// let id=5  // Não esquecer de fornecer o id 
// axios.put(`${baseUrl}/contacts/${id}`).then((response)=>{
//     console.log(response.data)
// })
// Você criar instâncias com configurações predefinidas
// const instance = axios.create({
//     baseURL: "https://65a73b6794c2c5762da65259.mockapi.io/",
//     timeout: 1000,
//     headers: {'Content-Type': 'application/json'}
//   });

//  instance.post("/contacts", {name:"Fulano", phone:"85999887766"}).then((response)=>{
//     console.log(response.data)
//  })
