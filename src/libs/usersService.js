import server from './server';

export const createUserSession = (params) => {
	const request = {
		method: 'post',
		url: '/api/v1/user/login',
		headers: {},
		data: {data: params}
	};

	return server.request(request)
		.then(response => server.handleResponse(response))
		.catch(error => server.handleError(error));
}