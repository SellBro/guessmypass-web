import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const FilterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  color: ${color.textPrimary};
  background-color: ${color.backgroundForm};
`;

export const FilterHeader = styled.div`
  padding: 10px;
  text-align: center;
  ${font.size(48)};
  ${font.bold};
  background-color: ${color.grayDarken};
`;

export const FilterBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  height: 48px;
  margin-bottom: 10px;
  border-radius: 20px;
  ${font.size(24)};
  ${font.bold};
  background: ${color.toggleButtonActive};
`;

export const TypeTitle = styled.div`
  text-transform: uppercase;
  ${font.size(24)};
  color: ${color.textGray};
`;

export const TypeList = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;

export const Type = styled.div`
  ${font.size(18)};
`;
