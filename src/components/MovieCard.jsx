import React from 'react'

const MovieCard = ({movie :{title, Vote_average, poster_path, release_date, original_language }}) => {
  return (
    <div className="movie-card">
        <img src={poster_path ?
             `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt={title} />
        <div className="mt-4">
            <h3>{title}</h3>
            <div className="content">
                <div>
                    <img src="star.svg" alt="Star Icon" />
                    <p>{Vote_average ? Vote_average.toFixed(1) : '' }</p>
                </div>
                <span>•</span>
                <p className='lang'>{original_language}</p>
                <span>•</span>
                <p className='year'>
                    {release_date ? release_date.split('-')[0] : ''}
                </p>

            </div>
        </div>
    </div>
  )
}
export default MovieCard