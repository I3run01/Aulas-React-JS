import { useParams } from "react-router-dom"

export const AboutItem = () => {

    //Puxo o meu parametro da url
    const params = useParams()
    return (
        <div>
            Página sobre {params.slug?.toUpperCase()} ({params.slug?.length} Letras)
        </div>
    )
}