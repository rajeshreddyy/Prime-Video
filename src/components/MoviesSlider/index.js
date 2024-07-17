import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import MovieItem from '../MovieItem'

import './index.css'

class MoviesSlider extends Component {
  state = {
    activeThumbnail: {
      videoUrl: '',
    },
    isOpen: false,
  }

  onClickItem = clickedThumbnail => {
    const {moviesList} = this.props
    this.setState({
      activeThumbnail: moviesList[clickedThumbnail],
      isOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const {moviesList} = this.props
    const {activeThumbnail, isOpen} = this.state
    const {videoUrl} = activeThumbnail

    return (
      <>
        <Carousel
          onClickItem={this.onClickItem}
          useKeyboardArrows
          infiniteLoop
          centerSlidePercentage={30}
          verticalSwipe="natural"
          showArrows
          centerMode
          showStatus
        >
          {moviesList.map(eachMovie => (
            <MovieItem key={eachMovie.id} movie={eachMovie} />
          ))}
        </Carousel>
        {isOpen && (
          <Popup open={isOpen} onClose={this.closeModal} modal nested>
            <div className="movie-container">
              <button className="close-icon" onClick={this.closeModal}>
                x
              </button>
              <ReactPlayer className="video-player" url={videoUrl} controls />
            </div>
          </Popup>
        )}
      </>
    )
  }
}

export default MoviesSlider
