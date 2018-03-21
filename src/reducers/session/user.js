import types from '../../action-types';

const initialState = {
	loading : false,
	isLoggedIn : false,
	access_token : '',
	token_expiry : '',
	userid : '',
	errorMessage : ''
}

export default function(state = initialState, action) {
	switch(action.type) {
		case types.LOAD_TOKEN_FROM_CACHE:
			return {
				state, 
				access_token: action.payload.access_token,
				isLoggedIn: action.payload.isLoggedIn
			};
		case types.AUTHENTICATE_USER:
			return {state, loading: true};
		case types.AUTHENTICATE_SUCCESS:
			return {
				state, 
				access_token: action.payload.access_token,
				token_expiry: action.payload.expirydate,
				userid: action.payload.userid,
				isLoggedIn: true
			};
		case types.AUTHENTICATE_FAIL:
			return {state, errorMessage: action.payload.message};
		case types.LOUGHT_USER:
			return {...initialState};
		default:
			return state;
	}
}