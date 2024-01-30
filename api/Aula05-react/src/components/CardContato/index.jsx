

export default function CardContato({ contact, setShowModal }) {

    function handleDialog() {
        console.log(setShowModal)
        setShowModal((prev) => !prev)
    }
    
    return (
        <article className="px-6  border shadow-lg">

            <div>
                <h3 className="pt-4 pb-2"><strong>Nome:</strong> {contact ? contact.name : "nome"}</h3>
                <hr />
                <p className="pt-2 pb-4">
                    <strong>Telefone:</strong> {contact ? contact.phone : "phone"}
                </p>
            </div>


            <div className="flex mb-4 gap-4">
                <button onClick={handleDialog} className="py-2 bg-blue-500 text-white flex-1 rounded-md border border-black">
                    Editar
                </button>
                <button className="py-2 bg-red-500 text-white flex-1 rounded-md border border-black">
                    Deletar
                </button>
            </div>

        </article>
    )
}