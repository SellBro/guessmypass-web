import React from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from './styled';

const iconCodes = {
  [`sparks`]: '\u2728',
  [`eye`]: '\\1F441',
};

const Icon = ({ type, ...iconProps }) => <StyledIcon {...iconProps} code={iconCodes[type]} />;

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(iconCodes)),
  className: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  type: undefined,
  className: undefined,
  size: 16,
};

export default Icon;
