import React from 'react';
import PropTypes from 'prop-types';

import { Input as MyInput } from './styled';

const Input = ({ value, filter, onChange, ...inputProps }) => {
  const handleChange = event => {
    if (!filter || filter.test(event.target.value)) {
      onChange(event.target.value, event);
    }
  };

  return <MyInput onChange={handleChange} value={value} {...inputProps} />;
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  filter: PropTypes.instanceOf(RegExp),
};

Input.defaultProps = {
  className: undefined,
  value: undefined,
  filter: undefined,
  onChange: () => {},
};

export default Input;
