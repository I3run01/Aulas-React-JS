import React from 'react'

const App =() => {
  let n1: number = 10
  let n2: number = 3
  let link = 'https://alunos.b7web.com.br/curso/reactjs/expressoes-no-jsxts'

  function somar(n1: number, n2: number): number {
    return n1 + n2
  }

  return (
    <div>
      <p>Somar: {somar(n1, n2)}!</p>
      <a href={link}>clique aqui</a>
    </div>
  )
}

export default App