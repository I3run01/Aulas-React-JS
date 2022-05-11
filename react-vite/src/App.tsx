import {Header} from './components/Header'
import {Photo} from './components/Photo'

//Import para a aula State
import React, {useState} from 'react'


const App =() => {
  
  //Função para a parte de criando eventos
  const handleButtonClick = () => {
    alert('O botão foi clicado')
  }

  // Usando State
  const [name, setName] = useState('Bonieky')

  function handleClick() {
    setName('Pedro')
  }

  //Usando Contador
  const [n, setN] = useState(0)

  const handleMinus =() => {
     setN(n - 1)
  }

  const handleMore = () => {
    setN(n + 1)
  }

  //State com input
  const [name02, setName02] = useState('')

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName02( event.target.value )
  }

  


  return (
    <div>
      <Header
        title = 'Estrutura básica e children'/>
      <Photo legend='Olá, mundo -> Google'>
          <img src="http://www.google.com.br/google.jpg" alt="" />
      </Photo>

      
      <Header
        title = 'Criando eventos'/>
        <button onClick={handleButtonClick}>clique aqui<br/></button>

      <Header
        title='Usando State'></Header>
        O nome é {name}
        <button onClick={handleClick}>clique aqui</button>

      <Header
        title='Usando Contador'></Header>
        <button onClick={handleMinus}>-</button>
        <div>{n}</div>
        <button onClick={handleMore}>+</button>

      <Header
        title='Ciando um input com state'></Header>
        Nome:
        <input type="text" value={name02} onChange={handleInput}/>
        Seu nome é {name02}

    </div>
  )
}

export default App