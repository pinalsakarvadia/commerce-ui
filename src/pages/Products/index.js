import React from 'react';
import {connect} from 'react-redux';

import s from './style';

//import {HomeProfile, FeaturedProducts} from '../../components';

class Products extends React.PureComponent {
	render() {
		return (
			<s.productsPage>
				Products Page
			</s.productsPage>
		)
	}
}

const selector = (state) => {
	return {
		
	}
};

export default connect(selector, {})(Products);