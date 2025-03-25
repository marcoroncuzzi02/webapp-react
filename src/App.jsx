import Header from "./components/Header"
import DefaultLayout from "./layouts/DefaultLayout"
import { Route,Routes,BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Components={ <DefaultLayout/>}>
            /

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
