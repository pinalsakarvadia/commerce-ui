import React from 'react';
import {connect} from 'react-redux';

class NotFound extends React.PureComponent {
	render() {
		return (
			<div>Not Found</div>
		)
	}
}

const selector = (state) => {
	return {
		
	}
};

export default connect(selector, {})(NotFound);