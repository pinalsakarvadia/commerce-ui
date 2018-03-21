import React from 'react'

import Logonav from './Logonav';
import Menu from './Menu';

import s from './style'

const Header = (props) => 
	<s.headerContainer>
		<Logonav 
			logo={props.logo}
			isLoggedIn={props.isLoggedIn} />
		<Menu />
	</s.headerContainer>;

export default Header;
