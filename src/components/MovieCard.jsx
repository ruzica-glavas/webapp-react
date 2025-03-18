import {Link} from "react-router-dom";

export default function MovieCard ({movie}){
    const {id, title, director, genre} = movie

    return(
        <>
             <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                        <span>{director}</span>
                        <p>{genre}</p>
                        <Link to={`movies/${id}`}>Read More</Link>
                </div>
            </div>
        </>
    )
}