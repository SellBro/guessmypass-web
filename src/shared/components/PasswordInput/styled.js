import styled from 'styled-components';

import { color } from 'shared/utils/styles';

import Icon from '../Icon';

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const StyledIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  right: 5px;
  color: ${color.textPrimary};
  ${props => props.isHidden ? "top: 10px; right: 7px;" : ""};
`; 
