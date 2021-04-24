import React from 'react'
import './movieList.css'
import {MovieContextConsumer} from './movieContext'

function MovieList() {
     return (
          <MovieContextConsumer>
               {movie => (
                    <div className="movie-list-container">
                         {movie.movies.map((allMovies, id) =>{
                              return(
                                   <div className="movie-list" key={id}>
                                        <h2 className="movie-list-title">{allMovies.title}</h2>
                                        <h4 className="movie-list-rating">Rated: {allMovies.rated}</h4>
                                   </div>
                              )
                         })}
                    </div>
               )}
          </MovieContextConsumer>
     )
}

export default MovieList
