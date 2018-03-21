import React from 'react';
import {connect} from 'react-redux';

import s from './style';

//import {HomeProfile, FeaturedProducts} from '../../components';

class ProductDetail extends React.PureComponent {
	render() {
		return (
			<s.productDetailPage>
				Products Details Page
			</s.productDetailPage>
		)
	}
}

const selector = (state) => {
	return {
		
	}
};

export default connect(selector, {})(ProductDetail);