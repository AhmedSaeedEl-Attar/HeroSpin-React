import React from 'react'
import {ImgPath} from '../../constants/api'

function Movie({film}) {
    function getClassByRate(vote){
        if(vote >= 8){
            return 'green';
        }else if ( vote >= 5){
            return "orange";
        }else{
            return 'red'
        }
    }
  return (
    <div key={film.title} className='movie'> 
    <img src={ImgPath  + film.poster_path} alt={film.title} />
    <div class="movie-info">
    <h3>{film.original_title}</h3>
    <span class={getClassByRate(film.vote_average)}>{film.vote_average}</span>
    </div>
    <div class="overview">
    {film.overview}
    </div>
    </div>
  )
}

export default Movie