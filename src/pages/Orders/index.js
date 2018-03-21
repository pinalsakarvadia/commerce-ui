import React from 'react';
import {connect} from 'react-redux';

import s from './style';

//import {HomeProfile, FeaturedProducts} from '../../components';

class Orders extends React.PureComponent {
	render() {
		return (
			<s.ordersPage>
				Orders Page
			</s.ordersPage>
		)
	}
}

const selector = (state) => {
	return {
		
	}
};

export default connect(selector, {})(Orders);