import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

//Import del GlobalContext
import GlobalContext from "../contexts/GlobalContext";

export default function HomePage(){
    const[movies, setMovies] = useState([]);

    const {setIsLoading} = useContext(GlobalContext)

    //funzione fetch per i film
    const fetchMovies = () => {

        setIsLoading(true)

        axios
        .get("http://localhost:3000/movies")
        .then ((res) =>{
            setMovies(res.data);
        })
        .catch((error) => {
            console.log(error);
          })
        .then (()=> setIsLoading(false))
    }

    //funzione per rendering delle card dei libri nell'html
    const renderMovies = () => {
        return movies.map((movie)=>{
            return(
                <div className="col" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            )
        })
    }

    //Invocazione chiamata al caricamento del componente in pagina
    useEffect(fetchMovies, []);



    return(
        <>
            <h1>Movies</h1>
            <div className="row row-cols-3">
                {renderMovies()}
            </div>
        </>
    )
    
}