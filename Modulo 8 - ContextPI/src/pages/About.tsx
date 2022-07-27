import { Link, useSearchParams } from "react-router-dom"

export const About = () => {

    //Para filtrar uma informação
    const [seachParams, setSeachParams] = useSearchParams()

    const setOrder = (order: 'asc' | 'desc') => {
        seachParams.set('order', order)
        setSeachParams(seachParams)
    }

    return (
        <div>
            Filtro: {seachParams.get('filter')} <br />
            Ordem: {seachParams.get('order')}
            <hr />
            <button onClick={()=> {setOrder('asc')}}>Asc</button>
            <button onClick={()=> {setOrder('desc')}}>Desc</button>
            Página sobre:
            <ul>
                <li><Link to="/sobre/bonieky" >Bonieky</Link></li>
                <li><Link to="/sobre/pedro" >Pedro</Link></li>
            </ul>
        </div>
    )
}