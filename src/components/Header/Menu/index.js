import React from 'react';

import s from './style';

import {Link} from '../../Common';

const Menu = (props) => 
	<s.menuContainer>
	    <s.ul>
	      <s.li><Link to="/" title="Home">Home</Link></s.li>
	      <s.li><Link to="/search" title="Search">Search</Link></s.li>
	      <s.li><Link to="/products" title="Product List">Product List</Link></s.li>
	      <s.li><Link to="/carts" title="Your Cart">Your Cart</Link></s.li>
	      <s.li><Link to="/orders" title="Orders History">Orders History</Link></s.li>
	    </s.ul>
	</s.menuContainer>;

export default Menu;
