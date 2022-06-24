import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(){
    const { id } = useParams();
    const [ movie, setMovie ] = useState([]);
    
    const getMovies = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json)
        setMovie(json.data.movie)
    }
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movie)
    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <p><b style={{color: "orange"}}>★</b>{movie.rating}</p>
            <p>{movie.description_intro}</p>
            <ul>
                {movie.genres.map((genre) => {
                    return <li key={genre}>{genre}</li>
                })}
            </ul>
        </div>
    )
};

export default Detail;