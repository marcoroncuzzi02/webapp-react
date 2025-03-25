import DefaultLayout from "./layouts/DefaultLayout"
import { Route,Routes,BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MooviePage from "./pages/MooviePage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Components={ <DefaultLayout/>}>
            
            <Route path="/" Component={HomePage}/>
            <Route path="/moovies/:id" Component={MooviePage}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
