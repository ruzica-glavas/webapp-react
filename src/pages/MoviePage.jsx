import axios from "axios"
import {useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom"

//Import del GlobalContext
import GlobalContext from "../contexts/GlobalContext";

//import del componente ReviewCard
import ReviewCard from "../components/ReviewCard"

//import componente ReviewForm
import ReviewForm from "../components/ReviewForm"

export default function Movie(){
    //Estrazione dell'informazione dall'url del sito
    //http:localhost:3000/movies/:id
    const {id} = useParams();

    //Creazione della variabile reattiva
    const [movie, setMovie] = useState({});

    const {setIsLoading} = useContext(GlobalContext)

    //Chiamata fetch per la Show
    const fetchMovie = () => {

        setIsLoading(true)

        axios
        .get(`http://localhost:3000/movies/${id}`)
        .then((res)=>setMovie(res.data))
        .catch((error) => console.log(error))
        .then (()=> setIsLoading(false));
    }

    //Invocazione chiamata al caricamento del componente in pagina
    useEffect(fetchMovie, [id]);

    //Rendering html delle reviews
    const renderReviews = () => {
        return movie.reviews?.map ((review) => {
            return <ReviewCard key= {review.id} review={review} />
        })
    }

    return(
        <>
            <h1>{movie?.title}</h1>
            <section>
                <h4>Our community reviews</h4>
                    {renderReviews()}
            </section>

             {/* //form review */}
             <section>
                {movie?.id  && <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />}
             </section>
             
        </>
    )
    
}