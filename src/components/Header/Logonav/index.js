import React from 'react'

import s from './style';

import {Link} from '../../Common';

const Logonav = (props) => 
	<s.logonavContainer>
		<s.logoContainer>
			<s.logo src={props.logo.img.url} alt={props.logo.img.alt} title={props.logo.img.title} />
		</s.logoContainer>
			{(props.isLoggedIn) 
				? <s.headerUrls>
					<s.link><Link to='/logout'>Logout</Link></s.link>
				  </s.headerUrls>
				: <s.headerUrls>
					<s.link><Link to='/signin'>Login</Link></s.link>
				  	<s.link><Link to='/signup'>Sign Up</Link></s.link>
				  </s.headerUrls>
			}
			
	</s.logonavContainer>;

export default Logonav;
