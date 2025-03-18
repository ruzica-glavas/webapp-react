import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage(){
    const[movies, setMovies] = useState([]);

    //funzione fetch per i film
    const fetchMovies = () => {
        axios
        .get("http://localhost:3000/movies")
        .then ((res) =>{
            setMovies(res.data);
        })
        .catch((error) => {
            console.log(error);
          });
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