import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
	
	renderRestaurants = () => {

		const { restaurants, deleteRestaurant } = this.props

		if (!restaurants) { return null }

		return restaurants.map( rest => 
			<Restaurant deleteRestaurant={deleteRestaurant} restaurant={rest} />)
	}

  render() {
    return(
      <ul>
        Restaurants Component
				{this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
