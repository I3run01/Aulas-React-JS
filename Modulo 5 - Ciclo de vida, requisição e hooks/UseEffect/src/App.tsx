import { ChangeEvent, useEffect, useState } from "react"

const App =() => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  useEffect(() => {
    setFullName(`${name} ${lastName}`)
  }, [name, lastName])
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName( e.target.value )
  }

  const handleLastNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setLastName( e.target.value )
  }

  return (
    <div >
      <input type="text" placeholder="Digite o seu nome" value={name} onChange={handleNameChange}/> <br />
      <input type="text" placeholder="Digite o seu sobrenome" value={lastName} onChange={handleLastNameChange} /> <br />
      Nome Completo: {fullName} 
    </div>

  )
}

export default App