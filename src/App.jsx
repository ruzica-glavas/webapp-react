import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage"

//Import del GlobalContext
import GlobalContext from "./contexts/GlobalContext";

//Import dell'useState
import { useState} from "react";

function App() {

  const [isLoading, setIsLoading] = useState(false)
  
  return (
    <>
    <GlobalContext.Provider value={{isLoading, setIsLoading}}>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage}/>
            <Route path="/movies/:id" Component={MoviePage}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
     
    </>
  )
}

export default App
