import {Header} from './components/Header'
import {Photo} from './components/Photo'

//Import para a aula State
import React, {useState} from 'react'

const App =() => {
  return (
    <div>
      <Header
        title = 'Estrutura básica e children'/>
      <Photo legend='Olá, mundo -> Google'>
          <img src="http://www.google.com.br/google.jpg" alt="" />
      </Photo>
  
    </div>
    
  )
}

export default App