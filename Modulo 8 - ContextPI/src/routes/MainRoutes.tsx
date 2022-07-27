import { Routes, Route, useRoutes } from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { AboutBonieky } from "../pages/AboutBonieky" 
import { AboutPedro } from "../pages/AboutPedro" 
import { AboutItem } from "../pages/AboutItem"
import { NotFound } from "../pages/Notfound"
import { RequireAuth } from "../RequireAuth"


export const MainRoutes = () => {

  return useRoutes([
    { path: '/', element: <Home/>},

    //O RequireAuth vai validar se o meu usuário poderá acessar o About 
    { path: '/sobre', element: <RequireAuth><About/></RequireAuth>},

    { path: '/sobre/bonieky', element: <AboutBonieky/>},
    { path: '/sobre/pedro', element: <AboutPedro/>},
    
    //Rotas dinamicas -- O parametro vem depois dos ":", neste cado o meu 
    { path: '/sobre/:slug', element: <AboutItem/>},

    { path: '*', element: <NotFound/>},

  ])


    /* 
    return (

        
        <Routes>

          <Route path="/" element={<Home />}></Route>

          --O RequireAuth vai validar se o meu usuário poderá acessar o About 
          <Route path="/sobre" element={
            <RequireAuth>
              <About/>
            </RequireAuth>
          }/>

          <Route path="/sobre/bonieky" element={<AboutBonieky />}/>
          <Route path="/sobre/pedro" element={<AboutPedro />}/>
          
          --Rotas dinamicas -- O parametro vem depois dos ":", neste cado o meu parametro é o slug 

          <Route path="/sobre/:slug" element={<AboutItem/>}/>

          <Route path="*" element={<NotFound />}/>

        </Routes>
        

      
      
    )
    
*/
  
}