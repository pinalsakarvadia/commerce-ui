import React from 'react';
import {connect} from 'react-redux';

import {MiniProduct} from '../../components';
import {loadFeaturedProducts} from '../../actions/products';

import s from './style';

class FeaturedProducts extends React.PureComponent {
	componentDidMount() {
		this.props.loadFeaturedProducts();
	}

	render() {
		const {items, loading} = this.props;
		
		return (
			<s.featuredProducts>
				<s.title>Featured Products</s.title>
				<s.seperator />
				{(loading) 
					? 'Loading....' 
					: (items.length > 0) 
						? items.map((item, index) => {
							return <MiniProduct key={item.id} current={index} total={items.length} {...item} />
						  })
						: 'No products found.'
				}
			</s.featuredProducts>
		)
	}
}

const selector = (state) => {
	const {products} = state;
	
	return {
		items : products.featured.items,
		loading: products.featured.loading
	}
}

export default connect(selector, {loadFeaturedProducts})(FeaturedProducts);