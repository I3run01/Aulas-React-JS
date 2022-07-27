import { useParams, useNavigate } from "react-router-dom"

export const AboutItem = () => {

    //Puxo o meu parametro da url
    const params = useParams()
    
    //Voltar para a página anterior
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate(-1)
    }

    const handleHomeButton = () => {
        let nome:string = 'ciclano'


        //Vai para a pagina sobre
        navigate(`/sobre/${nome}`)
    }

    return (
        <div>
            Página sobre {params.slug?.toUpperCase()} ({params.slug?.length} Letras)
            <hr />
            <button onClick={handleBackButton}>Voltar</button>
            <button onClick={handleHomeButton}>Home</button>
        </div>
    )
}