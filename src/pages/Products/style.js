import styled from 'styled-components';

const styles = {};

styles.productsPage = styled.div `
  	display:flex;
  	flex-direction:row;
`;

styles.leftBar = styled.div `
	flex : 1;
`;

styles.middleBar = styled.div `
	flex : 2;
	padding: 5px;
`;

styles.rightBar = styled.div `
	flex : 1;
	padding: 5px;
`;
styles.banner = styled.img `
	border : 1px solid #B8B8BC;
`;

export default styles;