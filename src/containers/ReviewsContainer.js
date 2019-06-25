import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { addReview, deleteReview } from '../actions/restaurants'

class ReviewsContainer extends Component {
	
	findReviews = () => {
		if (!this.props.restaurants) {return []}

		const fRest = this.props.restaurants.find(rest => rest.id === this.props.restaurant.id)
		return fRest.reviews
	}

  render() {
    return (
      <div>
        <ReviewInput restId={this.props.restId} addReview={this.props.addReview}/>
        <Reviews restId={this.props.restId} restaurants={this.props.restaurants} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { restaurants: state.restaurants }
}

export default connect( mapStateToProps, { addReview, deleteReview })(ReviewsContainer)
