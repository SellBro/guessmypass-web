import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  ${font.size(24)};
  ${font.bold};
  color: ${color.textPrimary};
  border-bottom: 2px solid ${color.border};
  border-color: ${props => (props.hasError ? color.borderError : color.border)};
  ${props => props.hasIcon && 'padding-right: 40px'};
`;
