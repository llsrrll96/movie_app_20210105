import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import "./Movie.css";

function Movie({id, year, title, summary, poster,genres}){
    return (
        //Link를 통해 state에 데이터를 실어 담을 수 있다.
        //a href = Link 가 눌려지면 App 에서 라우팅된다.
        <Link to={
            {
                pathname:`/movie/${id}`,
                state:{
                    year,title,summary,poster, genres
                }
            }
        }>
        <div className = "movie">
            <img src = {poster} alt={title} title={title}/>
            <div className = "movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map( (genre,idx) =>(
                        <li key = {idx} className = "genres_genre">{genre}</li>
                    ))}
                </ul>
                <p className ="movie__summary">{summary}</p>

            </div>
        </div>
    </Link>
);
}

Movie.propTypes={
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;