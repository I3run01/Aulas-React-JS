import { useState } from "react"
import { Header } from "./components/Header"
import { Botao } from "./components/Botao"

const App =() => {

  //Estelizando inline dinamicamente
  const [clicked, setClicked] = useState(false)
  const [padding, setPadding] = useState(0)

  const handleClick = () => {
    setClicked(true)
    setPadding(20)
  }

  
  
  
  return (
    <div>

      <Header 
        title='Estilizando inline' ></Header>
      <button style={{ 
        backgroundColor: 'red',
        color: '#fff',
        border: 0
      }}>Clique aqui</button>

      
      <Header 
        title="Estilizando inline dinamicamente"></Header>
      <button
        onClick={handleClick}
        style={{ 
          backgroundColor: clicked ? 'blue' : 'red',
          color: '#fff',
          border: 0,
          padding: padding, //Por ser o mesmo nome, não precisa colocar padding duas vezes
        }}>Clique aqui</button>

        <Header 
          title="Estilizando com StyleShhet"></Header>
          <Botao />

    </div>
    
  )
}

export default App