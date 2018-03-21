import React from 'react';
import {connect} from 'react-redux';

import s from './style';

//import {HomeProfile, FeaturedProducts} from '../../components';

class Cart extends React.PureComponent {
	render() {
		return (
			<s.cartPage>
				Cart Page
			</s.cartPage>
		)
	}
}

const selector = (state) => {
	return {
		
	}
};

export default connect(selector, {})(Cart);