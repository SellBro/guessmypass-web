import styled from 'styled-components';

import { font } from 'shared/utils/styles';

export const StyledIcon = styled.i`
  display: inline-block;
  ${props => `${font.size(props.size)}`};
  ${props =>
    props.left || props.top ? `transform: translate(${props.left}px, ${props.top}px);` : ''}
  &:before {
    content: '${props => (props.content ? props.content : props.code)}';
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
