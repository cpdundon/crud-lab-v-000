import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
	
	deleteReview = (reviewId) => {
		this.props.deleteReview(reviewId, this.props.restId)
	}
	
	renderReviews = () => {
    if (!this.props.restaurants) {return null} 

		const fRest = this.props.restaurants.find(rest => (rest.id === this.props.restId))
		return fRest.reviews.map(review => < Review review={review} deleteReview={this.deleteReview} />)
	}

  render() {
    return (
      <ul>
        Reviews
				{this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
