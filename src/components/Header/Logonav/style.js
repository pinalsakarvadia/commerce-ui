import styled from 'styled-components';

const styles = {};

styles.logonavContainer = styled.div `
	display: flex;
  	flex-direction: row;  
  	justify-content: center;
`;

styles.logoContainer = styled.div `
	display: flex;
  	flex: 1; 
`;

styles.logo = styled.img `
	padding-left: 20px;
`;

styles.headerUrls = styled.div `
	display: flex;
  	flex: 1; 
	justify-content: flex-end;
	padding-right: 20px;	
`;

styles.link = styled.div `
	padding-top: 15px;
	padding-right: 20px;
`;

export default styles;