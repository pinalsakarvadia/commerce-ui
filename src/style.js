import styled from 'styled-components';

const styles = {};

styles.CommerceApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 960px;
`;

styles.Content = styled.div`
  position: relative;
  flex: 1;
`;

styles.Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 1;
  z-index: 1;
  min-height: calc(100% - 208px);
  padding: 170px 50px 0px 50px;
`;

export default styles;
