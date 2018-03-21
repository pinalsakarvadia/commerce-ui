import React from 'react';

import s from './style';

import {Link} from '../Common';

class MiniProduct extends React.PureComponent {
	render() {
		const item = this.props;
		
		return (
			<s.productContainer>
				<s.title><Link to={`product/detail/${item.slug}-${item.id}`} title={item.title}>{item.title}</Link></s.title>
				<s.imgContainer>
					<s.img src={item.image} alt={item.title} title={item.title} />
					<s.description>{item.description}</s.description>
				</s.imgContainer>
				<s.productInfo>Categories : {item.categories.map(category => `${category}, `)} etc...</s.productInfo>
				<s.productInfo>
					Price : 
					<span id="price">{item.price}</span>
					<span id="discount_price">{item.discounted_price}</span>
					(<span id="discount">{item.discount}</span>)
				</s.productInfo>
				{(item.current === (item.total-1)) 
					? ''
					: <s.seperator />}
			</s.productContainer>
		);
	}
}

export default MiniProduct;