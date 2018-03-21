import axios from 'axios';
import {sessionCache} from '../common';

const API_SERVER_URL = 'http://localhost:3001';
const API_KEY = '562199ee89a4858a04a214b92003f033';
const DEFAULT_ERROR = 'Something went wrong...';
const DEFAULT_ERROR_STATUS = 400;

const server = {};

server.withAuth = (request) => {
	const access_token = sessionCache.get('commerce_token');
	const expirydate = sessionCache.get('commerce_token_expiry');
	const current_time = Math.floor(new Date().getTime() / 1000);

	request.headers['x-access-token'] = (current_time < expirydate) ? access_token : '';

	return request;
}

server.request = axios.create({
	baseURL: API_SERVER_URL,
	timeout: 3000,
	headers: {
		'x-api-key' : API_KEY
	}
});

server.handleResponse = (response) => {
	return (response.status=== 200) 
		? response.data.data
		: Promise.reject({status: DEFAULT_ERROR_STATUS, message : DEFAULT_ERROR});
}

server.handleError = (error) => {	
	let message = (error.response && error.response.data && error.response.data.message) 
		? error.response.data.message 
		: DEFAULT_ERROR;
	
	let status = (error.response && error.response.status) < DEFAULT_ERROR_STATUS ? error.response.status : DEFAULT_ERROR_STATUS;
	
	return Promise.reject({status, message});
}

export default server;