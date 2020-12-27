import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const ToggleButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  user-select: none;
  ${font.size(40)};
  ${font.bold};
  color: ${color.textPrimary};
  background-color: ${({ active }) => (active ? color.toggleButtonActive : color.grayDarken)};
`;

export const ListContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${color.backgroundForm};
  color: ${color.textPrimary};

  td {
    padding: 0.75rem;
  }
`;

export const ListBody = styled.tbody``;

export const FormHeader = styled.div`
  height: 100px;
  display: flex;
`;

export const FormContainer = styled.div`
  box-shadow: -2px 5px 13px 5px rgba(0, 0, 0, 0.41);
`;
