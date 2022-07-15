import { useState, useEffect } from "react"
import { Movie } from './types/Movies'

const App =() => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setMovies(json)
      })
      .catch((e) => {
        alert('Ocorreu um erro')
      })
  }
 
  return (
    <div>
        <button onClick={loadMovies}>Carregar Filmes</button> <br />
        
        Total de filmes: {movies.length}
        <div>
          { movies.map((item, index) => (
            <div key={index}>
              <img src={item.avatar}/>
              {item.titulo}
            </div>
          ))}
        </div>
      </div>
  )
}

export default App

//https://api.b7web.com.br/cinema/