import React from 'react';
import {connect} from 'react-redux';

import {logoutUser} from '../../actions/users';

class Logout extends React.Component {
	componentWillMount() {
		this.props.logoutUser();
	}
	render() {
		return '';
	}
}


const selector = (state) => {
	const {session} = state;
	
	return {
		isLoggedIn: session.user.isLoggedIn
	}
}

export default connect(selector, {logoutUser})(Logout);