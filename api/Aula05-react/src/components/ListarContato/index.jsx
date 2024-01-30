import CardContato from "../CardContato"

export default function ListarContato({ contacts, setShowModal }) {
    
    return (
        <section id="campoListarContatos" className="px-2 pb-4">
            <h2 className="py-4 font-semibold">Meus contatos:</h2>
            {/* Aqui representa um card de contatos */}
            { contacts?.length > 0 ?
               contacts.map((c)=>(
                   (<CardContato contact={c} setShowModal={setShowModal} />)
               )):
               <p>Sem contato</p>
            }
        </section>
    )
}