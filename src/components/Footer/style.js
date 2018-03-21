import styled from 'styled-components';

const styles = {};

styles.footer = styled.div `
	display: flex;
	position: relative;
	background: #fff;
	border-top: 1px solid #CDD3D3;
	padding-top: 10px;
	padding-bottom: 10px;
`;

styles.footerLeft = styled.div `
	display: flex;
	flex: 1;
	padding-left: 20px;
`;

styles.footerRight = styled.div `
	display: flex;
	flex: 1;
	flex-direction: row-reverse;
	padding-right: 20px;
`;

styles.link = styled.div `
	padding-right: 20px;
`;

export default styles;