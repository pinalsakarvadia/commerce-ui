import types from '../action-types';
import {getFeaturedProducts} from '../libs/productsService';

export const loadFeaturedProducts = () => {
	return (dispatch, getState) => {
		(getState().session.user.isLoggedIn)
			? getFeaturedProducts(getState)
				.then(items => dispatch({type: types.LOAD_FEATURED_PRODUCTS, payload : {items, loading: false}}))
				.catch(error => dispatch({type: types.LOAD_FEATURED_PRODUCTS, payload : {items: [], loading: false}}))
			: dispatch({type: types.LOAD_FEATURED_PRODUCTS, payload : {items: [], loading: false}});
	}
}