import styled from 'styled-components';

const styles = {};

styles.loginPage = styled.div `
	display: flex;
  	flex-direction: row;
  	justify-content: center;
`;

styles.formContainer = styled.div `
	flex : 1;
	margin-top: 70px;
	max-width: 40%;
`;

styles.title = styled.div `
	display:flex;
	font-size: 16px;
	font-weight : bold;
	color : #F04A60;
	flex : 1;
	justify-content: center;
	padding-bottom: 30px;
`;

export default styles;