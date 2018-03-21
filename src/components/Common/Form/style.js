import styled from 'styled-components';

const styles = {};

styles.formContainer = styled.div `
	display: flex;
	flex-direction: column;  	
	height: 100%;
	padding: 5px;
	position: relative;
`;

styles.inputContainer = styled.div `
	display: flex;
	min-width: 100%;
`;

styles.label = styled.label `
	display: flex;
	flex: 1;
  	flex-direction: column;
  	justify-content: center;
  	text-align: left;
`;

styles.input = styled.input `
	display: flex;
	flex-direction: column;
	flex: 2;
	border-radius: 3px;
  	border: 1px solid ${props => props.error === true ? '#e53a41' : '#B3B3B3'};
  	outline: 0;
  	box-sizing: border-box;
  	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  	transition: all 300ms ease;
  	padding: 5px;
`;

styles.inputErrorContainer = styled.div `
	display: flex;
	min-width: 100%;
`;

styles.inputError = styled.div`
	display: flex;
	flex-direction: column;
	flex: 2;
  	padding-top: 5px;
  	text-align: left;
  	color: #e53a41;
`;

styles.buttonWrapper = styled.div `
	display: flex;
	flex: 2;
	height: 25px;
`;

styles.button = styled.input `
	min-width: 40%;
	max-width: 40%;
	justify-content: center;
	font-weight: bold;
	color: #D8EDDA;
	background: #188521;
  	border: 1px solid #188521;
  	border-radius: 3px;
  	cursor: pointer;
  	outline: 0;
  	box-sizing: border-box;
  	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  	transition: all 300ms ease;

	${props =>
    	props.active === false ?
    		`background-color: #5C5B5B;
    		border: 1px solid #5C5B5B;
    		` : 
    		``
    }
`;

export default styles;