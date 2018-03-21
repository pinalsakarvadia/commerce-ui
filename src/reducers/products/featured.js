import types from '../../action-types';

const initialState = {
	items : [],
	loading : true
}

export default function(state = initialState, action) {
	switch(action.type) {
		case types.LOAD_FEATURED_PRODUCTS:
			return {state, ...action.payload};
		default:
			return state;
	}
}