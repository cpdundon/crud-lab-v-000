
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
	switch (action.type) {
		case 'ADD_RESTAURANT':
			
			return { restaurants: [...state.restaurants, {...action.text, id: cuid(), reviews: []}]}
		case 'DELETE_RESTAURANT':
// Could accomplish the samething in better form with state.restaurants.filter... I am not going to disturb working code at the moment.
			const dRest = state.restaurants.find(rest => (rest.id === action.id))
			const idx = state.restaurants.indexOf(dRest)

			return { restaurants: [...state.restaurants.slice(0,idx), ...state.restaurants.slice(idx+1)]}
		case 'ADD_REVIEW':
			const arRest = state.restaurants.find(rest => (rest.id === action.restId))
			arRest.reviews = [...arRest.reviews, {text: action.text, id: cuid()}]

			return { restaurants: [ ...state.restaurants ] }
		case 'DELETE_REVIEW':
			const drRest = state.restaurants.find(rest => (rest.id === action.restId))
			const newReviews = drRest.reviews.filter(review => review.id !== action.reviewId)
			drRest.reviews = newReviews	
		
			return { restaurants: [ ...state.restaurants ] }
		default:

			return state
	}
}
