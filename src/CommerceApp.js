import React from 'react';
import {withRouter} from 'react-router-dom';

import HeaderPartial from './partials/HeaderPartial';
import FooterPartial from './partials/FooterPartial';

import s from './style';

class CommerceApp extends React.PureComponent {
	render() {
		return (
			<s.CommerceApp>
				<HeaderPartial />
				<s.Content>
					<s.Main>
						{this.props.children}
					</s.Main>
					<FooterPartial />
				</s.Content>				
			</s.CommerceApp>			
		);
	}
}

export default withRouter(CommerceApp);