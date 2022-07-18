import { useState, useEffect} from "react"
import { PostForm } from "./components/PostForm"
import { PostItem } from "./components/PostItem"
import { Post } from "./types/Posts"
import { api } from "./api"


const App =() => {

  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    loadPost()
  }, [])

  const loadPost = async () => {
    setLoading(true)
    let json = await api.getAllPosts()
    setLoading(false)
    setPosts(json)
  }

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1)
    if (json.id) {
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

        <PostForm onAdd={handleAddPost}/>

        
        
        {!loading &&
          <div>Total de Posts: {posts.length}</div>
        }
        <div>
          { posts.map((item, index) => (
            <PostItem data={item}/>
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