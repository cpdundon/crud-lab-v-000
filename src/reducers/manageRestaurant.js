
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
	switch (action.type) {
		case 'ADD_RESTAURANT':

			return {...state, restaurants: [...state.restaurants, {...action.restaurant, id: cuid()}]}
		case 'DELETE_RESTAURANT':
			const dRest = state.restaurants.find(rest => (rest.id === action.id))
			const idx = state.restaurants.indexOf(dRest)

			return {...state, restaurants: [...state.restaurants.slice(0,idx), ...state.restaurants.slice(idx+1)]}
		default:

			return state
	}
}
