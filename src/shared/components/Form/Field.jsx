import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import Input from 'shared/components/Input';
import PasswordInput from 'shared/components/PasswordInput';

import { StyledField } from './styled';

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  name: undefined,
};

const generateField = FormComponent => {
  const FieldComponent = ({ className, name, ...props }) => {
    const fieldId = uniqueId('field');

    return (
      <StyledField className={className}>
        <FormComponent id={fieldId} name={name} {...props} />
      </StyledField>
    );
  };

  FieldComponent.propTypes = propTypes;
  FieldComponent.defaultProps = defaultProps;

  return FieldComponent;
};

export default {
  Input: generateField(Input),
  Passwordinput: generateField(PasswordInput),
};
