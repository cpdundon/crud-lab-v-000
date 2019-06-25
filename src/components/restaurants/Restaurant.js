import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant, deleteRestaurant } = this.props;

    return (
      <div>
        <li key={restaurant.id}>
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restId={restaurant.id} reviews={restaurant.reviews}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
