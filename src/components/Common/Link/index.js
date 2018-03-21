/* global location */
/* eslint no-restricted-globals: ["off", "location"] */

import React from 'react';

import s from './style';

const Link = (props) => {
	return (
		<s.link title={props.title} to={props.to}>{props.children}</s.link>
	);
}

export default Link;