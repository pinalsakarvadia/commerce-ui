const initialState = {
	img : {
		url : '/utils/logo.png',
		title : 'Commerce Web Store',
		alt : 'Commerce Web Store'
	},
	url : '/'
}

export default function(state = initialState, action) {
	switch(action.type) {
		default:
			return state;
	}
}