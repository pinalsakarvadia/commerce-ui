import types from '../action-types';
import {createUserSession} from '../libs/usersService';
import {push} from 'react-router-redux';  
import {sessionCache} from '../common';

const authenticateUser = (params) => {
	return (dispatch) => {
		dispatch({type: types.AUTHENTICATE_USER});

	 	createUserSession(params)
	 		.then(response => {
	 			sessionCache.set('commerce_token', response.access_token);
	 			sessionCache.set('commerce_token_expiry', response.expirydate);
	 			dispatch({type: types.AUTHENTICATE_SUCCESS, payload : response});
	 			dispatch(push('/'));
	 		})
	 		.catch(error => dispatch({type: types.AUTHENTICATE_FAIL, payload : error}))
	}
}

const loadTokenFromCache = () => {
	return (dispatch) => {
		const access_token = sessionCache.get('commerce_token');
		const expirydate = sessionCache.get('commerce_token_expiry');
		const current_time = Math.floor(new Date().getTime() / 1000);
		
		return (access_token && current_time < expirydate) 
			? dispatch({type: types.LOAD_TOKEN_FROM_CACHE, payload : {access_token, isLoggedIn: true}})
			: ''
	}
}

const logoutUser = () => {
	return (dispatch) => {
		return (sessionCache.get('commerce_token')) 
			? (
				sessionCache.delete('commerce_token'),
				sessionCache.delete('commerce_token_expiry'),
				dispatch({type: types.LOUGHT_USER}),
				dispatch(push('/signin'))
			  )
			: ('');
	}
}

export {
	authenticateUser,
	loadTokenFromCache,
	logoutUser
}