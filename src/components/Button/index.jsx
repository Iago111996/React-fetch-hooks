import React from 'react';

import P from 'prop-types';

import './styles.css';

const Button = ({ text, onClick, disabled = false }) => (
  <button
    type="button"
    className="button"
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};

export default Button;
