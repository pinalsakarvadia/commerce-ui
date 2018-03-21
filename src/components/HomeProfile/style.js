import styled from 'styled-components';

const styles = {};

styles.homeProfile = styled.div `
	display : flex;
	flex-direction: column;
`;

styles.profileImg = styled.div `
	display : flex;
	padding: 5px;
	justify-content: center;
	& img {
		border : 1px solid #B8B8BC;
		border-radius: 5px;
	}
`;

styles.profileName = styled.div `
	display : flex;
	font-weight: bold;
	font-size:16px;
	justify-content: center;
	color : #F04A60;
	padding: 10px;
`;

styles.profileInfo = styled.div `
	display : flex;
	padding: 5px;
`;

export default styles;