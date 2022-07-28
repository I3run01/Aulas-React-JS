import { useContext } from "react"
import { Link } from "react-router-dom"

import { Context } from "../contexts/Context"

export  const SignUp = () => {
    const {state, dispatch} = useContext(Context)

    const handleChangeName = () => {
        dispatch({
            type:'ChangeName',
            payload: {
                name: 'Pedro'
            }
        })
    }

    return (
        <div>
            Tela SignUP do {state.user.name} que tem {state.user.age} anos
            <button onClick={handleChangeName}>Trocar nome para Pedro</button>
            <br />
            <Link to='/exibir'>Ir para ShowData</Link>
        </div>
    )
}