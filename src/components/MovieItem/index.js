// Write your code here

import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl} = movie

  return (
    <div className="movie-item-container">
      <img alt="thumbnail" className="thumbnail-url" src={thumbnailUrl} />
    </div>
  )
}

export default MovieItem
