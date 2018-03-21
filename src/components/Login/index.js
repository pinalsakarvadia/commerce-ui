import React from 'react';
import {connect} from 'react-redux';

import {Error, FormInput, FormButton} from '../../components/Common';
import {authenticateUser} from '../../actions/users';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state  = {
			email: '',
			password: '',
			formErrors: {
				email: false,
				password: false
			},
			formValid : false
		};
	}

	formToJSON = elements => [].reduce.call(elements, (data, element) => { 
	  if(!element.type.includes('submit','button')) {; 
		  data[element.name] = element.value;
	  }
	  return data;

	}, {});

	handleInput = e => this.validateField(e.target.name, e.target.value);

	handleButton = e => this.submitForm(e);
	
	submitForm = (e) => {
		e.preventDefault();

		let formData = this.formToJSON(document.getElementById('loginform').elements);
		
		for (const fieldName of Object.keys(formData)) {
	        this.validateField(fieldName, formData[fieldName], true);
	    }

		const hasFormError = Object.keys(this.state.formErrors).map(e => this.state.formErrors[e]);

	    if (!hasFormError.includes('') && !hasFormError.includes(true)) {
	      this.setState({ formValid: true });
	      this.props.authenticateUser(formData);
	    } else {
	      this.setState({ formValid: false });
	    }
	}

	validateField = (name, value, setError = false) => {
		const formErrors = this.state.formErrors;

		switch(name) {
			case 'email':
				formErrors.email = false;

				if(setError) {
					if(value !== '') {
						let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  		
	  					if(!emailRegex.test(value)) { 
	  						formErrors.email = true;
	  					}					
					} else {
						formErrors.email = true;
					}
				}

				this.setState({email: value, formErrors});
				break;
			case 'password':
				formErrors.password = false;

				if(setError) {
					if(value !== '') {
						if(value.length < 4) {
							formErrors.password = true;
						}
					} else {
						formErrors.password = true;
					}
				}

				this.setState({password: value, formErrors});
				break; 
			default:
				break;
		}
	} 

	render() {
		return (
			<form method='post' name='loginform' id='loginform'>
				{(this.props.errorMessage) ? <Error>{this.props.errorMessage}</Error> : ``}
				{/*<div>{(this.props.loading) ? `${this.props.loading} Loading...` : `${this.props.loading} Not Loading...`}</div>*/}
				<FormInput 
					title = 'Email Address : '
				    name = 'email'
				    onChange = {this.handleInput}
				    placeholder = 'Email Address'
				    error = {this.state.formErrors.email}
				    errorMsg = 'Please enter a valid Email Address.'
				/>
				<FormInput 
					title = 'Password : '
				    name = 'password'
				    type = 'password'
				    onChange = {this.handleInput}
				    placeholder = 'Password'
				    error = {this.state.formErrors.password}
				    errorMsg = 'Please enter a valid Password.'
				/>
				<FormButton onClick={this.handleButton} active={false} />
			</form>
		)
	}
}


const selector = (state) => {
	const {session} = state;
	
	return {
		token: session.user.token,
		loading: session.user.loading,
		errorMessage: session.user.errorMessage
	}
}

export default connect(selector, {authenticateUser})(Login);