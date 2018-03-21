import React from 'react';

import s from './style';

const Error = (props) => {
	return (
		<s.errorContainer>{props.children}</s.errorContainer>
	);
}

export default Error;