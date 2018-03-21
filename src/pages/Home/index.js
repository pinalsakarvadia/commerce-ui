import React from 'react';
import {connect} from 'react-redux';

import s from './style';

import {HomeProfile, FeaturedProducts} from '../../components';

class Home extends React.PureComponent {
	render() {
		return (
			<s.homePage>
				<s.leftBar>
					{(this.props.isLoggedIn) 
						? <HomeProfile />
						: <s.banner src="/utils/home-banner.jpg" />
					}
				</s.leftBar>
				<s.middleBar>
					<FeaturedProducts />
				</s.middleBar>
				<s.rightBar>
					<s.banner src="/utils/home-banner.jpg" />
				</s.rightBar>
			</s.homePage>
		)
	}
}

const selector = (state) => {
	const {session} = state;
	return {
		isLoggedIn : session.user.isLoggedIn
	}
};

export default connect(selector, {})(Home);