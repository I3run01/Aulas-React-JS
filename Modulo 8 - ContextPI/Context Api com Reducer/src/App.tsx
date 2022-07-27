import { Routes, Route } from "react-router-dom"
import { ShowData } from "./pages/ShowData"
import { SignUp } from "./pages/SignUp"

const App =() => {
  return (
    
      <div>
        <h1>Titulo da página</h1>
        <hr />
        <Routes>
          <Route path="/"  element={<SignUp/>} ></Route>
          <Route path="/exibir"  element={<ShowData/>} ></Route>
        </Routes>
      </div>

  )
}

export default App