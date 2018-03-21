import React from 'react';
import PropTypes from 'prop-types';

import s from './style';

const input = (props) => (  
  <s.formContainer>
    <s.inputContainer>
      {props.title.length ? <s.label>{props.title}</s.label> : '' }
      <s.input
        name={props.name}
        type={props.type}
        value={props.content}
        error={props.error}
        onChange={props.onChange}
        placeholder={props.placeholder} />      
    </s.inputContainer>
    {props.error === true ? 
      <s.inputErrorContainer>
        <s.label></s.label>
        <s.inputError>{props.errorMsg}</s.inputError>
      </s.inputErrorContainer>  : ''}
  </s.formContainer>
);

input.propTypes = {
  type: PropTypes.oneOf(['text','number','password']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string.isRequired
}

input.defaultProps = {
  type: 'text',
  value : '',
  placeholder: '',
  error : false,
  errorMsg : ''
}

export default input; 