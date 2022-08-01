import { Routes, Route } from "react-router-dom"
import { ShowData } from "./pages/ShowData"
import { SignUp } from "./pages/SignUp"
import { useContext, useEffect } from "react"
import { Context } from "./contexts/Context"

const App =() => {
  const {state, dispatch} = useContext(Context)

  const handleSwitchTheme = () => {
    if(state.theme.status == 'light' ) {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark'
        }
      })
    } else {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'light'
        }
      })

    }
  }

  return (
    
      <div style={{
        backgroundColor: state.theme.status === 'light' ? '#fff' : '#000',
        color: state.theme.status === 'light' ? '#000' : '#fff'
        }}>
        <h1>Titulo da página</h1>
        Tema: {state.theme.status }
        <button onClick={handleSwitchTheme} >Switch Theme</button>
        <hr />
        <Routes>
          <Route path="/"  element={<SignUp/>} ></Route>
          <Route path="/exibir"  element={<ShowData/>} ></Route>
        </Routes>
      </div>

  )
}

export default App