import styled from 'styled-components';

const styles = {};

styles.menuContainer = styled.nav `
  display: flex;
  border-top: 1px solid #CDD3D3;
  border-bottom: 1px solid #CDD3D3;
  justify-content: center;
  background: #fff;
`;

styles.ul = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

styles.li = styled.li `
  background-image: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(216,216,216,1) 50%,
    rgba(150,150,150,1) 95%,
    rgba(100,100,100,1) 95%
  );
  background-size: 100% 200%;
  background-position: top center;
  display: block;
  text-align: center;
  text-decoration: none;
  transition: all .25s ease-in-out;
  &:hover {
    background-position: bottom center;
    color: rgba(0,0,0,.75);
  }
  & a {
    color: #282A2A;
    display: block;
    padding: 1rem 4rem;
    font-weight: bold;
    transition: all .25s ease-in-out;
    &:hover {
  	  color: #F4F5ED;
  	}
  }
`;


export default styles;