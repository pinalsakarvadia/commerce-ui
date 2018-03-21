import server from './server';

export const getFeaturedProducts = () => {
	const request = {
		method: 'get',
		url: '/api/v1/product',
		headers: {}
	};
	
	return server.request(server.withAuth(request))
		.then(response => server.handleResponse(response))
		.catch(error => server.handleError(error));
}