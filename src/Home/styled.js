import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 980px;
  max-width: none !important;
  margin: 0 auto;
  padding: 0;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
`;

export const SideContainer = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 10px 0 10px;
`;

export const CenterContainer = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 10px 0 10px;
`;
