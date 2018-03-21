import React from 'react';
import {connect} from 'react-redux';

import s from './style';

import {Login} from '../../components';

class SignIn extends React.PureComponent {
	render() {
		return (
			<s.loginPage>
				<s.formContainer>
					<s.title>Login with Email Address</s.title>
					<Login />
				</s.formContainer>
			</s.loginPage>
		)
	}
}

const selector = (state) => {
	return {
		
	}
};

export default connect(selector, {})(SignIn);