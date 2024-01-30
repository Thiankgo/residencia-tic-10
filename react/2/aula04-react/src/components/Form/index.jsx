import { useState } from "react"

export default function FormLogin(props) {
    const [userLogin, setUserLogin] = useState({
        name: "",
        email: "",
        phone: "",
        cep: "",
        work: "",
    })

    function handleSubmit(e) {
        e.preventDefault()

        var al = ""
        for (let i in userLogin) {
            al += `${i}: ${userLogin[i]}\n`
        }

        alert(al)
    }

    function handleUser(e) {
        setUserLogin((preview) => ({ ...preview, [e.target.name]: e.target.value }))
        console.log(userLogin)
    }

    return (
        <form className="border rounded-md p-4 flex flex-col gap-10" onSubmit={handleSubmit}>
            <label className="flex gap-4 items-center  text-xl font-medium" htmlFor="name">
                Nome:
                <input onChange={handleUser} type="text" name="name" id="name" required className="border w-full max-w-[400px] px-4 py-2 rounded-md"  />
            </label>
            <label className="flex gap-4 items-center  text-xl font-medium" htmlFor="email">
                Email:
                <input onChange={handleUser} type="email" name="email" id="email" required className="border w-full max-w-[400px] px-4 py-2 rounded-md"  />
            </label>
            <label className="flex gap-4 items-center  text-xl font-medium" htmlFor="phone">
                Telefone:
                <input onChange={handleUser} type="phone" name="phone" id="phone" required className="border w-full max-w-[400px] px-4 py-2 rounded-md"  />
            </label>
            <label className="flex gap-4 items-center  text-xl font-medium" htmlFor="cep">
                CEP:
                <input onChange={handleUser} type="text" name="cep" id="cep" required className="border w-full max-w-[400px] px-4 py-2 rounded-md"  />
            </label>
            <label className="flex gap-4 items-center  text-xl font-medium" htmlFor="work">
                Emprego:
                <input onChange={handleUser} type="text" name="work" id="work" required className="border w-full max-w-[400px] px-4 py-2 rounded-md"  />
            </label>
            <button type="submit" className="text-2xl bg-facebook py-2 rounded-lg text-white font-semibold">Enviar</button>
        </form>
    )
}