import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const ItemContainer = styled.tr`
  vertical-align: middle;
  border-bottom: 1px solid ${color.border};
`;

export const Info = styled.td`
  vertical-align: middle;
  line-height: 1;
`;

export const Name = styled.a`
  text-decoration: none;
  cursor: pointer;
  ${font.size(20)};
  color: ${color.textSecondary};
`;

export const Notes = styled.small``;

export const CheckBox = styled.input`
  padding: 0;
`;

export const SelectButtonContainer = styled.td`
  width: 35px;
  max-width: 35px;
`;
