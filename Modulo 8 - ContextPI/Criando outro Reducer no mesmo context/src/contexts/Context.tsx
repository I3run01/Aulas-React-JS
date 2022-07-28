import { createContext, useReducer } from "react";

import {UserType, userInitialState, userReducer } from '../reducers/userReducer'
import { themeReducer, themeInitialState, ThemeType  } from "../reducers/themeReducer";
import { reducerActionType } from "../types/reducerActionsType";

type initialStateType = {
    user: UserType;
    theme: ThemeType
}

type ContextType = {
    state: initialStateType
    dispatch: React.Dispatch<any>
}

const initialState = {
    user: userInitialState,
    theme: themeInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
})

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}} >
            {children}
        </Context.Provider>
    )

}