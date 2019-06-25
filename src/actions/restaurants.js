export function addRestaurant(restaurant) {
  return {
    type: 'ADD_RESTAURANT',
    restaurant: restaurant
  }
}

export function deleteRestaurant(id) {
  return {
    type: 'DELETE_RESTAURANT',
    id: id
  }
}

export function addReview(text, restId) {
	return {
		type: 'ADD_REVIEW',
		text: text,
		restId: restId,
	}
}

export function deleteReview(reviewId, restId) {
	return {
		type: 'DELETE_REVIEW',
		reviewId: reviewId,
		restId:	restId,
	}
}
