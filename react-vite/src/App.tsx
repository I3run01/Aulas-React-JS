import {Header} from './components/Header'
import {Photo} from './components/Photo'


const App =() => {
  return (
    <div>
      <Header
        title = 'este é um exemplo'
      />
      <Header title = 'Outro texto'/>
      
      Olá mundo.

      <Photo legend='Google'>
        <img src="http://www.google.com.br/google.jpg" alt="" />
      </Photo> 
    </div>
  )
}

export default App