import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Input } from 'shared/components';

import { StyledInput, StyledIcon } from './styled';

const PasswordInput = ({ ...inputProps }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <StyledInput>
      <Input hasIcon name="password" {...inputProps} type={hidden ? 'password' : 'text'} />
      {!hidden ? (
        <StyledIcon size={30} type="eye" onClick={() => setHidden(!hidden)} />
      ) : (
        <StyledIcon
          size={21}
          isHidden={hidden}
          content={'\f070'}
          className="fa fa-eye-slash"
          onClick={() => setHidden(!hidden)}
        />
      )}
    </StyledInput>
  );
};

PasswordInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

PasswordInput.defaultProps = {
  value: undefined,
};

export default PasswordInput;
