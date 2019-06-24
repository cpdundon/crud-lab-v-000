function addRestaurant(restaurant) {
  return {
    type: 'ADD_RESTAURANT',
    restaurant: restaurant
  }
}

function deleteRestaurant(id) {
  return {
    type: 'DELETE_RESTAURANT',
    id: id
  }
}

