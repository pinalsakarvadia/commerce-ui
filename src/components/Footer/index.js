import React from 'react';

import {Link} from '../../components/Common';
import s from './style';

const Footer = (props) => {
	var date = new Date();
	var year = date.getFullYear();

	return (
		<s.footer>
			<s.footerLeft>
				CopyRight &copy; {year} - Commerce Group 
			</s.footerLeft>
			<s.footerRight>
				<s.link><Link to="/terms" title="Terms & Condition">Terms & Condition</Link></s.link>
				<s.link><Link to="/policy" title="Privacy Policy">Privacy Policy</Link></s.link>
			</s.footerRight>			
		</s.footer>
	);
}

export default Footer;