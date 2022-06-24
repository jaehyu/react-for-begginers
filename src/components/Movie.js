import React from 'react';
import { Link, useParams } from 'react-router-dom'

function Movie({ coverImage, title, summary, genres, id }){
    
    return (
        <div>
            <img src={coverImage} alt={title}/>
            <Link 
                to={`/movie/${id}`}
                style={{
                    display: "block",
                    color: "black",
                    textDecoration: "none",
                    fontSize: "20px",
                    fontWeight: "bold"
                }}
            >{title}</Link>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
};

export default Movie;