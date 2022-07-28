import { reducerActionType } from "../types/reducerActionsType";

export type UserType = {
    name: string
    age: number
}

export const userInitialState: UserType = {
    name: 'Bonieky',
    age: 90
}


export const userReducer = (state: UserType, action: reducerActionType) => {

    switch(action.type) {
        case 'ChangeName':
            return {...state, name: action.payload.name}
        break
        case 'ChangeAge':
            return {...state, age: action.payload.age}
        break
    }

    return state
}