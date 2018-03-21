import React from 'react';
import {connect} from 'react-redux';

import s from './style';

//import {HomeProfile, FeaturedProducts} from '../../components';

class Search extends React.PureComponent {
	render() {
		return (
			<s.searchPage>
				Search Page
			</s.searchPage>
		)
	}
}

const selector = (state) => {
	return {
		
	}
};

export default connect(selector, {})(Search);