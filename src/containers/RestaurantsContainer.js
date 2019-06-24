import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {addRestaurant, deleteRestaurant} from '../actions/restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants />
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return { restaurants: state.restautants };
};
 
export default connect(mapStateToProps, { addRestaurant })(RestaurantsContainer)
