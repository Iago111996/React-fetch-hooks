import React from 'react';
import P from 'prop-types';

import './styles.css';

const TextInput = ({ searchValeu, hendleChange }) => (
  <input
    placeholder="Digite sua pesquisa..."
    className="text-input"
    onChange={hendleChange}
    value={searchValeu}
    type="search"
  />
);

TextInput.propTypes = {
  searchValeu: P.string.isRequired,
  hendleChange: P.func.isRequired,
};

export default TextInput;
