import { useState, useEffect } from "react"
import { Movie } from './types/Movies'

const App =() => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = async () => {
    try {
      setLoading(true)
      let response = await fetch('https://api.b7web.com.br/cinema/')
      let json = await response.json()
      setLoading(false)
      setMovies(json)
    } 
    catch(e) {
      setLoading(false)
      console.error(e)
      setMovies([])

    }
    
    
  }
 
  return (
    <div>

        {loading && movies.length > 0 &&
          <div>Carregando...</div>
        }
        
        {!loading &&
          <div>Total de filmes: {movies.length}</div>
        }
        <div>
          { movies.map((item, index) => (
            <div key={index}>
              <img src={item.avatar}/>
              {item.titulo}
            </div>
          ))}
        </div>

        {!loading && movies.length === 0 &&
          <div>Tetne mais tarde</div>
        
        }
      </div>
  )
}

export default App

//https://api.b7web.com.br/cinema/