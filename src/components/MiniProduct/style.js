import styled from 'styled-components';

const styles = {};

styles.productContainer = styled.div `
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
`;

styles.title = styled.div `
	font-weight : bold;
	font-size: 14px;

	& a {
		color: #282A2A;
	}
`;

styles.imgContainer = styled.div `
	display: flex;
	flex-direction: row;	
	padding: 10px 0;
`;

styles.img = styled.img `
	flex: 1;
	border: 0;
	width: 150px;
	height: 100px;
`;

styles.description = styled.span `
	flex: 2;
	padding-left: 15px;
`;

styles.productInfo = styled.div `
	display: flex;
	padding: 5px;

	& #price {
		text-decoration: line-through!important;
		padding: 0 10px;
	}

	& #discount_price {
		color: #D31535;
		font-weight: bold;
		padding-right: 5px;
	}

	& #discount {
		color: #D31535;
		font-weight: bold;
	}
`;

styles.seperator = styled.div `
	border-bottom: 1px solid #ccc;
`;

export default styles;