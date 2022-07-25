import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { AboutBonieky } from "./pages/AboutBonieky" 
import { AboutPedro } from "./pages/AboutPedro" 
import { AboutItem } from "./pages/AboutItem"
import { NotFound } from "./pages/Notfound"
import { RequireAuth } from "./RequireAuth"

const App =() => {
  return (
    <div>
      <header>
        <h1>Titulo do site</h1>
      </header>
      
      <br />
      <div>

        <Routes>
          <Route path="/" element={<Home />}></Route>

          /* O RequireAuth vai validar se o meu usuário poderá acessar o About */
          <Route path="/sobre" element={
            <RequireAuth>
              <About/>
            </RequireAuth>
          }/>

          <Route path="/sobre/bonieky" element={<AboutBonieky />}></Route>
          <Route path="/sobre/pedro" element={<AboutPedro />}></Route>
          
          /* Rotas dinamicas -- O parametro vem depois dos ":", neste cado o meu parametro é o slug */
          <Route path="/sobre/:slug" element={<AboutItem/>}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>


      </div>
      <br />
      <footer>
        Todos os direitos reservados
      </footer>
     
    </div>
  )
}

export default App