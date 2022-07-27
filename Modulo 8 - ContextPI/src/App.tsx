import { MainRoutes } from "./routes/MainRoutes"

const App =() => {
  return (
    <div>
      
      <header>
        <h1>Titulo do site</h1>
      </header>
      
      <br />
      <div>
        <MainRoutes/>
      </div>

      <br />

      <footer>
        Todos os direitos reservados
      </footer>
     
    </div>
  )
}

export default App