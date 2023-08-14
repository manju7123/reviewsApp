import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="image-card">
        <img className="user-image" src={imgUrl} alt={username} />
        <p className="name"> {username} </p>
        <p className="company"> {companyName} </p>
        <p className="paragraph"> {description} </p>
      </div>
    )
  }

  backwardButton = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    }
  }

  forwardButton = () => {
    const {reviewsList} = this.props
    const {count} = this.state
    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const currentReview = reviewsList[count]

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="review">Reviews</h1>
          <div className="review-card">
            <button
              type="button"
              onClick={this.backwardButton}
              data-testid="leftArrow"
              className="btn"
            >
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            {this.renderActiveReview(currentReview)}
            <button
              type="button"
              onClick={this.forwardButton}
              data-testid="rightArrow"
              className="btn"
            >
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
