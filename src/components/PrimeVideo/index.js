// Write your code here

import MoviesSlider from '../MoviesSlider'
import MovieItem from '../MovieItem'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  console.log(moviesList)

  const renderActionMovies = movies => {
    const actionMoviesList = movies.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )
    console.log(actionMoviesList)

    return (
      <div>
        <h1 className="action-movies">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
      </div>
    )
  }

  const renderComedyMovies = () => {
    const comedyMoviesList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )
    console.log(comedyMoviesList)

    return (
      <div>
        <h1 className="comdey-movies">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    )
  }

  return (
    <div className="movies-container">
      <img
        className="prime-video-img"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      {renderActionMovies(moviesList)}
      {renderComedyMovies(moviesList)}
    </div>
  )
}

export default PrimeVideo
