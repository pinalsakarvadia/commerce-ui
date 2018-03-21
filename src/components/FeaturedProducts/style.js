import styled from 'styled-components';

const styles = {};

styles.featuredProducts = styled.div `
	display: flex;
	flex-direction: column;
	width : 90%;
`;

styles.title = styled.label `
	display:flex;
	font-size: 16px;
	font-weight : bold;
	color : #F04A60;	
`;

styles.seperator = styled.span `
	display: flex;
	border : 0.5px solid #ccc;
	display : flex;
	margin: 5px 0px;
`;

export default styles;