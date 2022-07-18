import { useState, useEffect, ChangeEvent } from "react"
import { Post } from "./types/Posts"

const App =() => {

  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
  const [addTitleText, setAddTitleText] = useState('')
  const [addBodyText, setAddBodyText] = useState('')

  useEffect(() => {
    loadPost()
  }, [])

  const loadPost =async () => {
    setLoading(true)
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    setPosts(json)
    setLoading(false)
  }

  const handleAddTitileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value)
  }

  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value)
  }

  const handleAddClick = async () => {
    if(addBodyText && addBodyText) {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        body: JSON.stringify({
          title: addBodyText,
          body: addBodyText,
          userID: 1
        }),
        headers: {
          'content-type': 'application/json'
        }
      })

      let json = await response.json()

      if(json.id) {
        alert('Post adicionado com sucesso')
      } else {
        alert('Ocorreu algum erro')
      }

    }
  }

 
  return (
    <div>

        {loading && posts.length > 0 &&
          <div>Carregando...</div>
        }

        <fieldset>
          <legend> Adicionar um novo Post</legend>
          <input
            onChange={handleAddTitileChange}
            value={addTitleText}
            type="text" 
            placeholder="Digite um título" /> <br />
          <textarea
            onChange={handleAddBodyChange}
            value={addBodyText}
          ></textarea> <br />
          <button onClick={handleAddClick}>Adicionar</button>
        </fieldset>
        
        {!loading &&
          <div>Total de Posts: {posts.length}</div>
        }
        <div>
          { posts.map((item, index) => (
            <div key={index}>
              <h4>{item.title}</h4>
              #{item.id} - Usuário: {item.userID}
              <small>#{item.id} - Usuário: {item.userID}</small>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

        {!loading && posts.length === 0 &&
          <div>Não há posts para exibir</div>
        
        }
      </div>
  )
}

export default App

//https://api.b7web.com.br/cinema/