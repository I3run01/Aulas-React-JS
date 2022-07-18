import { useReducer } from "react"

type redecerState = {
    count: number
}
  
type reducerAction = {
    type: string
}
  
const initialState = {
    count: 0
}

const reducer = (state: redecerState, action: reducerAction) => {
    switch(action.type) {
        case 'ADD':
            return{...state, count: state.count + 1}
            break
        case 'DEL':
            if (state.count > 0) {
                return  {...state, count: state.count - 1}
                break
            }
        case 'RESET':
            return initialState
    }

    return state
}

export const useContagem = () => {
    return useReducer(reducer, initialState)
}