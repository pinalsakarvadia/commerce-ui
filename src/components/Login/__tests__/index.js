import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from '../index';
import factory from './factory';
import {Error} from '../../../components/Common';
import {authenticateUser} from '../../../actions/users';


describe('validate login component', () => { 
	const props = {...factory, authenticateUser};
  	
	describe('validate form render properly', () => {
   		const login = mount(<Login.WrappedComponent {...props} />);
	  	const emailField = login.find('input[name="email"]').filterWhere(n => n.type() === 'input');
	  	const passwordField = login.find('input[name="password"]').filterWhere(n => n.type() === 'input');

   		it('must contains login form and its element', () => {
			expect(login.find('form[name="loginform"]').exists()).toBe(true);
		
			expect(login.find('form[name="loginform"]').text()).toContain('Email Address :');
			expect(login.find('form[name="loginform"]').text()).toContain('Password :');

			expect(login.find('input[name="email"]').exists()).toBe(true);	
			expect(login.find('input[name="password"]').exists()).toBe(true);
			expect(login.find('input[name="submit"]').exists()).toBe(true);
		});

		it('validate only single email field and password field exist on form', () => {
			expect(emailField).toHaveLength(1);
			expect(passwordField).toHaveLength(1);
		});
   	});

	describe('validate form submission', () => {
		let login = mount(<Login.WrappedComponent {...props} />);

		it('if wrong email is filled', () => {
			login.setState({email : 'test'});			
			login.find('input[name="submit"]').simulate('click');
			
			expect(login.state().formErrors.email).toBe(true);	
			expect(login.find('form[name="loginform"]').text()).toContain('Please enter a valid Email Address.');
		});

		it('if correct email is filled', () => {
			login.setState({email : 'test@test.com'});		
			login.find('input[name="submit"]').simulate('click');
			
			expect(login.state().formErrors.email).toBe(false);	
			expect(login.find('form[name="loginform"]').text()).not.toContain('Please enter a valid Email Address.');
		});
		
		it('if wrong password is filled', () => {
			login.setState({password : '123'});			
			login.find('input[name="submit"]').simulate('click');
			
			expect(login.state().formErrors.password).toBe(true);	
			expect(login.find('form[name="loginform"]').text()).toContain('Please enter a valid Password.');
		});

		it('if correct password is filled', () => {
			login.setState({password : '123456'});
			login.find('input[name="submit"]').simulate('click');
			
			expect(login.state('password').length).toBeGreaterThan(4);
			expect(login.state().formErrors.password).toBe(false);	
			expect(login.find('form[name="loginform"]').text()).not.toContain('Please enter a valid Password.');
		});
		
		it('if form is blank', () => {
			login.setState({email : '', password : ''});
			login.find('input[name="submit"]').simulate('click');

			expect(login.state().formErrors.email).toBe(true);
			expect(login.state().formErrors.password).toBe(true);

			expect(login.find('form[name="loginform"]').text()).toContain('Please enter a valid Email Address.');
			expect(login.find('form[name="loginform"]').text()).toContain('Please enter a valid Password.');
		});

		it('if form is correct', () => {
			login.setState({email : 'test@test.com', password : '123456'});
			login.find('input[name="submit"]').simulate('click');

			expect(login.state().formErrors.email).toBe(false);
			expect(login.state().formErrors.password).toBe(false);

			expect(login.find('form[name="loginform"]').text()).not.toContain('Please enter a valid Email Address.');
			expect(login.find('form[name="loginform"]').text()).not.toContain('Please enter a valid Password.');
		});
	});

	describe('after form submission, server side error occurs', () => {
		const login = mount(<Login.WrappedComponent {...props} errorMessage='user is unauthorized' />);
	  	expect(login.find(Error).exists()).toBe(true);
	});
});
