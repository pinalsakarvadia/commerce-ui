import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('validate main app component renders', () => { 
	it('renders without crashing', () => {
  		const app = mount(<App />);
  		expect(app.props()).toEqual({});
	});
});
