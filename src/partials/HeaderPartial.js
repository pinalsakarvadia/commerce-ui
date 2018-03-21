import React from 'react';
import {connect} from 'react-redux';
import {loadTokenFromCache} from '../actions/users';

import {Header} from '../components'

class HeaderPartial extends React.PureComponent {
	componentWillMount() {
	    //this.props.loadTokenFromCache();
	}

	render() {
		return (
			<div>
				<Header 
					logo = {this.props.logo} 
					isLoggedIn = {this.props.isLoggedIn} />
			</div>
		);
	}
}

const selector = (state) => {
	const {header, session} = state;
	
	return {
		logo : header.logo,
		isLoggedIn : session.user.isLoggedIn
	}
};

export default connect(state => selector(state), {loadTokenFromCache})(HeaderPartial);
