import * as C from './AppStyles'
import { Header } from './components/Header'

const App =() => {
  return (
    
    //Props dinâmicas
    <C.Container bgColor='purple'>
      <span> Texto do componente</span>

      <a href="" className='link'>Link qualquer</a>


      <C.Botao bg='red'>Clique aqui</C.Botao>
      <C.Botao bg='green' small>Botão pequeno</C.Botao>
    </C.Container>
    
  )
}

export default App