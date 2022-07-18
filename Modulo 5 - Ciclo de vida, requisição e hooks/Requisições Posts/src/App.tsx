import { useState, useEffect } from "react"
import { Post } from "./types/Posts"

const App =() => {

  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPost()
  }, [])

  const loadPost =async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    setPosts(json)
  }


 
  return (
    <div>

        {loading && posts.length > 0 &&
          <div>Carregando...</div>
        }
        
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