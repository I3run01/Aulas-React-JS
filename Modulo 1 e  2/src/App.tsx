import {Header} from './components/Header'
import {Photo} from './components/Photo'
import { Botao } from "./components/Botao";
import {Pessoa } from "./components/Pessoa";

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

  //Comunicação entre componentes
  let textoDoBotao = 'Clicar no botão'

  const botaoEventAction = (txt: string) => {
    alert('Frase do APP' + txt)
  }

  //Renderizar Listas
  let list = [
    {name: 'Bonieky', age: 20},
    {name: 'Pedro', age: 50},
    {name: 'Samanta', age: 15},
    {name: 'Maria', age: 75}
  ]

  //Renderizando o conteúdo condcioanl
  const [show, setshow] = useState(false)

  const handleClick02 = () => {
    setshow( !show )
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


      <Header
        title='Comunicação entre componentes'></Header>
      <Botao text={textoDoBotao} clickFn={botaoEventAction} ></Botao>

      <Header
        title='Renderizar listas'></Header>

        <h2>Lista de presença</h2>
        <ul>
          {list.map((item, index) => (
            //<li key={index} >{ item.name} - {item.age}</li>
            //Lista do componente
            <Pessoa key={index} data={item}></Pessoa>
          ))}
        </ul>

      <Header 
        title='Renderizando o conteúdo condcioanl'></Header>
      <button onClick={handleClick02}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show && 
      <div>
        Bla Bla Bla...
      </div>
      }


        
    </div>
    
  )
}

export default App