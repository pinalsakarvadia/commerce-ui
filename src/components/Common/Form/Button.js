import React from 'react';
import PropTypes from 'prop-types';

import s from './style';

const button = (props) => (  
  <s.formContainer>
    <s.inputContainer>
      <s.label>&nbsp;</s.label>
      <s.buttonWrapper>
	     <s.button
	       type={props.type}
	       name={props.name}
	       value={props.value}
	       active={props.active}
	       onClick={props.onClick} />
	     </s.buttonWrapper>
    </s.inputContainer>
  </s.formContainer>
);

button.propTypes = {
  type: PropTypes.oneOf(['button','submit']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

button.defaultProps = {
  type: 'submit',
  name: 'submit',
  value : 'Submit',
  active: false
}

export default button; 