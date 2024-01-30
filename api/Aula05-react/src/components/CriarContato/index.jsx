import api from "../../api"

import { useState } from "react"

export default function CriarContato(props) {
    const [contact, setContact] = useState({
        name: "",
        phone: ""
    })

    function handleClick(){
        api.post(contact)
    }

    function handleContact(e){
        setContact((preview) => ({ ...preview, [e.target.name]: e.target.value }))
    }

    return(
        <section id="campoCriarContato" className="flex gap-2 flex-wrap justify-center pt-2 border items-center ">
            <div className="flex flex-col gap-2 py-4 px-2 ">
                <label className="flex gap-2 items-center justify-between">
                    Nome:
                    <input name="name" onChange={handleContact} placeholder="Digite o nome completo" className="px-2 py-1 border rounded-md" />
                </label>
                <label className="flex gap-2 items-center">
                    Telefone:
                    <input name="phone" onChange={handleContact} placeholder="Digite o nome completo" className="px-2 py-1 border rounded-md" />
                </label>
            </div>
            <button onClick={handleClick} className="border-2 border-black rounded-md px-4 bg-emerald-600 text-white w-32 h-20"> Adicionar Contato</button>
        </section>
    )
}